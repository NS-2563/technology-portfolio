import SectionLink from "@/components/SectionLink";
import { navLinks } from "@/data/portfolio";

const elsewhere = [
  {
    label: "Email",
    href: "mailto:snagendrasingh25@gmail.com",
    external: false,
  },
  {
    label: "GitHub",
    href: "https://github.com/NS-2563",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/nagendra-singh-s",
    external: true,
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-rule">
      <div className="page py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-14">
          <div>
            <p className="display text-xl">Nagendra Singh</p>
            <p className="meta mt-2">Developer&apos;s field journal</p>
            <p className="meta mt-5 max-w-xs">
              Full-stack development, Python backends, and AI-powered
              applications — recorded as they are built.
            </p>
          </div>

          <nav aria-label="Contents">
            <p className="meta">Contents</p>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <SectionLink
                    href={link.href}
                    className="inline-flex items-baseline gap-2.5 text-ink-2 transition-colors hover:text-accent"
                  >
                    <span className="num">{link.num}</span>
                    {link.label}
                  </SectionLink>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="meta">Elsewhere</p>
            <ul className="mt-4 space-y-2 text-sm">
              {elsewhere.map((contact) => (
                <li key={contact.label}>
                  <a
                    href={contact.href}
                    {...(contact.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="inline-flex items-baseline gap-1.5 text-ink-2 transition-colors hover:text-accent"
                  >
                    {contact.label}
                    {contact.external ? (
                      <span aria-hidden="true">↗</span>
                    ) : null}
                    {contact.external ? (
                      <span className="sr-only">(opens in a new tab)</span>
                    ) : null}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-rule pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="meta">
            Set in Instrument Serif, Geist Sans, and Geist Mono.
          </p>
          <p className="meta flex items-center gap-3">
            System theme aware · No trackers
            <SectionLink href="/#top" className="tlink">
              Back to top <span aria-hidden="true">↑</span>
            </SectionLink>
          </p>
        </div>
      </div>
    </footer>
  );
}
