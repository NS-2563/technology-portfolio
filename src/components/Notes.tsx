import { labEntries, skillGroups } from "@/data/portfolio";

export default function Notes() {
  return (
    <section className="act">
      <div className="page journal">
        <div className="folio">
          <span className="num">№ 03</span>
          <span className="label">Notes</span>
        </div>

        <div className="min-w-0">
          <h2 className="act-title reveal measure-wide">
            The working notes behind the projects.
          </h2>
          <p className="lede mt-5 measure-wide">
            Tools I actually reach for, and the observations that came out of
            using them.
          </p>

          <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-0">
            <section
              id="skills"
              aria-labelledby="skills-heading"
              className="reveal lg:pr-12"
            >
              <p className="num">03.1</p>
              <h3 id="skills-heading" className="entry-title mt-2">
                Tools I reach for
              </h3>
              <dl className="mt-6 border-b border-rule">
                {skillGroups.map((group) => (
                  <div key={group.title} className="border-t border-rule py-5">
                    <dt className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                      <span className="text-base font-semibold">
                        {group.title}
                      </span>
                      <span className="meta">{group.levelNote}</span>
                    </dt>
                    <dd className="mt-2 text-sm leading-6 text-ink-2">
                      {group.items.join(" · ")}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            <section
              id="lab"
              aria-labelledby="lab-heading"
              className="reveal lg:border-l lg:border-rule lg:pl-12"
            >
              <p className="num">03.2</p>
              <h3 id="lab-heading" className="entry-title mt-2">
                Field notes
              </h3>
              <ol className="mt-6 border-b border-rule">
                {labEntries.map((entry, index) => (
                  <li key={entry.title} className="border-t border-rule py-5">
                    <div className="flex items-baseline justify-between gap-6">
                      <p className="meta">{entry.kind}</p>
                      <p className="num">{String(index + 1).padStart(2, "0")}</p>
                    </div>
                    <h4 className="mt-2 font-semibold">{entry.title}</h4>
                    <p className="mt-1.5 text-sm leading-6 text-ink-2">
                      {entry.detail}
                    </p>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
