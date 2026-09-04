export function splitHighlightedTitle(
  title?: string,
  highlight?: string
): { lead: string; accent: string } | null {
  const trimmedHighlight = highlight?.trim();
  if (trimmedHighlight) {
    return { lead: title?.trim() || "", accent: trimmedHighlight };
  }

  const trimmed = title?.trim();
  if (!trimmed) return null;

  const match = trimmed.match(/^(.*?[.!?])\s+(.+)$/);
  if (match) {
    return { lead: match[1], accent: match[2] };
  }

  return { lead: trimmed, accent: "" };
}
