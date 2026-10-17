import JournalSection from "./JournalSection";

const contacts = [
  {
    label: "Email",
    value: "snagendrasingh25@gmail.com",
    href: "mailto:snagendrasingh25@gmail.com",
    external: false,
  },
  {
    label: "GitHub",
    value: "github.com/NS-2563",
    href: "https://github.com/NS-2563",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/nagendra-singh-s",
    href: "https://linkedin.com/in/nagendra-singh-s",
    external: true,
  },
];

export default function Contact() {
  return (
    <JournalSection
      id="contact"
      folio="04"
      label="Close"
      title="If any of this is useful, write to me."
      intro="Open to feedback, collaboration, and full-stack work in progress. Email is the quickest route; there is no form and no backend here."
    >
      <ul className="border-b border-rule">
        {contacts.map((contact) => (
          <li key={contact.label} className="border-t border-rule">
            <a
              href={contact.href}
              {...(contact.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group flex items-center justify-between gap-6 py-5"
            >
              <span className="flex min-w-0 flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-8">
                <span className="meta w-20 shrink-0">{contact.label}</span>
                <span className="truncate text-base transition-colors group-hover:text-accent sm:text-lg">
                  {contact.value}
                </span>
              </span>
              <span
                aria-hidden="true"
                className="shrink-0 text-accent transition-transform group-hover:translate-x-1"
              >
                {contact.external ? "↗" : "→"}
              </span>
              {contact.external ? (
                <span className="sr-only">(opens in a new tab)</span>
              ) : null}
            </a>
          </li>
        ))}
      </ul>

      <p className="note mt-10 measure-wide">
        Still writing, still fixing what breaks. The projects above are the
        record so far.
      </p>
    </JournalSection>
  );
}
