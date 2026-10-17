const fieldNotes = [
  {
    keyword: "method",
    text: "Start with a version that runs, then fix the parts that break.",
  },
  {
    keyword: "focus",
    text: "Full-stack web, Python services, and automation with n8n.",
  },
  {
    keyword: "now",
    text: "CareerCraft AI — in development; frontend deployed, backend connectivity unverified.",
  },
];

export default function Hero() {
  return (
    <section
      aria-labelledby="intro-heading"
      className="relative lg:flex lg:min-h-[calc(100svh-4rem)] lg:items-center"
    >
      <div className="page py-14 sm:py-20 lg:py-16">
        <div className="journal">
          <div className="folio">
            <span className="num">№ 00</span>
            <span className="label">Opening</span>
          </div>

          <div className="min-w-0">
            <div className="enter" style={{ animationDelay: "0ms" }}>
              <p className="display text-2xl sm:text-3xl">Nagendra Singh</p>
              <p className="meta mt-2">
                Entries on full-stack development, Python backends, and
                AI-powered applications.
              </p>
            </div>

            <div
              className="rule-x enter mt-7"
              style={{ animationDelay: "60ms" }}
            />

            <h1
              id="intro-heading"
              className="headline enter mt-8 max-w-[17ch]"
              style={{ animationDelay: "120ms" }}
            >
              Turning curiosity into working software.
            </h1>

            <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,21rem)] lg:gap-14">
              <div className="enter" style={{ animationDelay: "200ms" }}>
                <p className="lede measure">
                  I build small, real projects to find out how software works,
                  then keep improving them until they do something useful.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
                  <a href="#projects" className="action">
                    See selected work
                    <span aria-hidden="true">→</span>
                  </a>
                  <a href="#contact" className="tlink">
                    Get in touch
                  </a>
                </div>
              </div>

              <aside
                aria-label="Field notes"
                className="enter border-l border-rule pl-6 lg:pl-8"
                style={{ animationDelay: "280ms" }}
              >
                <ol>
                  {fieldNotes.map((entry) => (
                    <li
                      key={entry.keyword}
                      className="mt-5 border-t border-rule pt-5 first:mt-0 first:border-t-0 first:pt-0"
                    >
                      <p className="num">{entry.keyword}</p>
                      <p className="note mt-1.5">{entry.text}</p>
                    </li>
                  ))}
                </ol>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
