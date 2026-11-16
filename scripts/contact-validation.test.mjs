import test from "node:test";
import assert from "node:assert/strict";
import { validateContact } from "../lib/contact-validation.ts";
import { improveHomeContent } from "../lib/home-content.ts";

function form(overrides = {}) {
  const data = new FormData();
  for (const [key, value] of Object.entries({ name: "Jane Smith", email: "jane@example.com",
    website: "https://example.com", about: "Free website analysis", description: "", ...overrides })) data.set(key, value);
  return data;
}

test("analysis can be requested without composing a message", () => {
  assert.equal(validateContact(form()).ok, true);
});
test("server rejects missing analysis URL, unsafe URL, and invalid email", () => {
  for (const overrides of [{ website: "" }, { website: "javascript:alert(1)" },
    { website: "https://user:password@example.com" }, { email: "invalid" }, { name: "" }]) {
    assert.equal(validateContact(form(overrides)).ok, false);
  }
});
test("project inquiries work without an existing website but need project details", () => {
  assert.equal(validateContact(form({ about: "Project inquiry", website: "", description: "Build a new store" })).ok, true);
  assert.equal(validateContact(form({ about: "Project inquiry", website: "" })).ok, false);
});
test("oversized messages and forged request types are rejected", () => {
  assert.equal(validateContact(form({ description: "x".repeat(5001) })).ok, false);
  assert.equal(validateContact(form({ about: "Unexpected" })).ok, false);
});
test("launch copy and analysis links improve without mutating CMS content", () => {
  const blocks = [{ _key: "hero", _type: "heroSection", title: "Build Smarter. Grow Better.",
    primaryButtonText: "Get Your Free Digital Analysis", primaryUrl: "mailto:studio@example.com" }];
  const result = improveHomeContent(blocks);
  assert.equal(result[0].primaryUrl, "/#contact");
  assert.equal(result[0].title, "Websites that turn visitors into customers.");
  assert.equal(blocks[0].title, "Build Smarter. Grow Better.");
  assert.equal(improveHomeContent([{ ...blocks[0], title: "Custom CMS title" }])[0].title, "Custom CMS title");
});
test("duplicate duration question is removed only when an answer exists", () => {
  const faqs = [{ _id: "first", question: "How long does it take to build a website?", answer: [{ _type: "block" }] },
    { _id: "duplicate", question: "How long does a website take?" },
    { _id: "other", question: "Do I own my website?" }];
  assert.deepEqual(improveHomeContent([{ _key: "faq", _type: "faqsBlock", faqs }])[0].faqs.map(f => f._id), ["first", "other"]);
});
