import SectionLink from "@/components/SectionLink";
import { navLinks } from "@/data/portfolio";

export default function Navbar() {
  return (
    <header className="masthead">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:border focus:border-ink focus:bg-paper focus:px-3 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>

      <div className="page flex items-center justify-between gap-6 py-3.5">
        <div className="flex min-w-0 items-baseline gap-4">
          <SectionLink
            href="/#top"
            className="display text-lg whitespace-nowrap sm:text-xl"
          >
            Nagendra Singh
          </SectionLink>
          <span aria-hidden="true" className="hidden h-3.5 w-px bg-rule-2 sm:block" />
          <p className="meta hidden whitespace-nowrap sm:block">
            Full-stack · Python · AI
          </p>
        </div>

        <nav aria-label="Contents" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <SectionLink
                  href={link.href}
                  className="flex items-baseline gap-2 border-b border-transparent pb-0.5 text-sm text-ink-2 transition-colors hover:border-accent hover:text-ink"
                >
                  <span className="num">{link.num}</span>
                  {link.label}
                </SectionLink>
              </li>
            ))}
          </ul>
        </nav>

        <SectionLink
          href="/#contact"
          className="action action-quiet px-4 py-2 text-xs"
        >
          Get in touch
        </SectionLink>
      </div>

      <nav aria-label="Contents" className="border-t border-rule lg:hidden">
        <ul className="page flex gap-6 overflow-x-auto py-2.5 text-sm">
          {navLinks.map((link) => (
            <li key={link.href} className="shrink-0">
              <SectionLink
                href={link.href}
                className="flex items-baseline gap-2 text-ink-2"
              >
                <span className="num">{link.num}</span>
                {link.label}
              </SectionLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
