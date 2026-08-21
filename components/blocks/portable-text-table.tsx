import type { PortableTextComponents } from "next-sanity";

import { cn } from "@/lib/utils";

export type TableRowValue = {
  _key?: string;
  cells?: string[];
};

export type TableValue = {
  _type?: "table";
  _key?: string;
  hasHeader?: boolean;
  rows?: TableRowValue[];
};

export function PortableTextTable({
  value,
  className,
}: {
  value: TableValue;
  className?: string;
}) {
  const rows = value.rows?.filter(Boolean) ?? [];
  if (!rows.length) return null;

  const hasHeader = value.hasHeader !== false;
  const [headerRow, ...bodyRows] = hasHeader ? rows : [undefined, ...rows];
  const dataRows = hasHeader ? bodyRows : rows;

  return (
    <div className={cn("my-4 w-full overflow-x-auto", className)}>
      <table className="w-full min-w-60 border-collapse text-left text-sm">
        {headerRow ? (
          <thead>
            <tr className="border-b border-current/25">
              {(headerRow.cells ?? []).map((cell, index) => (
                <th
                  key={`${headerRow._key || "header"}-${index}`}
                  className="px-3 py-2 font-semibold"
                >
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
        ) : null}
        <tbody>
          {dataRows.map((row, rowIndex) =>
            row ? (
              <tr
                key={row._key || `row-${rowIndex}`}
                className="border-b border-current/15 last:border-b-0"
              >
                {(row.cells ?? []).map((cell, cellIndex) => (
                  <td
                    key={`${row._key || rowIndex}-${cellIndex}`}
                    className="px-3 py-2 opacity-90"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ) : null
          )}
        </tbody>
      </table>
    </div>
  );
}

export const bannerPortableTextComponents: PortableTextComponents = {
  types: {
    table: ({ value }) => <PortableTextTable value={value as TableValue} />,
  },
};
