"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

type SectionLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> & {
  href: string;
};

export default function SectionLink({
  href,
  onClick,
  ...rest
}: SectionLinkProps) {
  return (
    <Link
      href={href}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;

        const hashIndex = href.indexOf("#");
        if (hashIndex === -1) return;

        const hash = href.slice(hashIndex);
        if (window.location.hash !== hash) return;

        const target = document.getElementById(
          decodeURIComponent(hash.slice(1)),
        );
        if (!target) return;

        event.preventDefault();
        target.scrollIntoView();
      }}
      {...rest}
    />
  );
}
