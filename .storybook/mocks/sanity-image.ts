/** Storybook stub for Sanity image URLs (picsum placeholders). */
export function urlFor(source: unknown) {
  const seed =
    typeof source === "object" &&
    source !== null &&
    "asset" in source &&
    typeof (source as { asset?: { _ref?: string } }).asset?._ref === "string"
      ? (source as { asset: { _ref: string } }).asset._ref
      : "digiflow";

  const builder = {
    width() {
      return builder;
    },
    height() {
      return builder;
    },
    url() {
      return `https://picsum.photos/seed/${encodeURIComponent(seed)}/1200/900`;
    },
  };

  return builder;
}
