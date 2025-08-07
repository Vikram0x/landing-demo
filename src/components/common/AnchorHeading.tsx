"use client";

import { useCallback } from "react";

type Props = {
  level?: 2 | 3 | 4;
  id: string;
  children: React.ReactNode;
};

export default function AnchorHeading({ level = 2, id, children }: Props) {
  const Tag = (`h${level}` as unknown) as keyof JSX.IntrinsicElements;

  const copyLink = useCallback(() => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url).catch(() => {});
  }, [id]);

  return (
    <div className="group relative scroll-mt-28" id={id}>
      <Tag className="mb-2 text-2xl font-semibold tracking-tight text-emerald-900 dark:text-emerald-300">
        {children}
      </Tag>
      <button
        aria-label="Copy link"
        onClick={copyLink}
        className="absolute -left-8 top-1 hidden rounded p-1 text-sm text-emerald-700 ring-1 ring-emerald-200 hover:bg-emerald-50 dark:text-emerald-300 dark:ring-emerald-700/40 dark:hover:bg-emerald-900/20 group-hover:inline-block"
      >
        #
      </button>
    </div>
  );
}

