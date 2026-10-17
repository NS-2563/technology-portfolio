import Link from "next/link";
import { projects } from "@/data/portfolio";
import { getCaseStudy } from "@/data/case-studies";
import JournalSection from "./JournalSection";

const path = ["React SPA", "Axios client", "FastAPI", "SQLite / PostgreSQL"];

export default function Projects() {
  const featured = projects.find((project) => project.featured) ?? projects[0];
  const study = featured.slug ? getCaseStudy(featured.slug) : undefined;
  const others = projects.filter((project) => project !== featured);

  return (
    <JournalSection
      id="projects"
      folio="02"
      label="Work"
      title="Selected work, kept honest about its state."
      intro="One substantial build in progress, one tested automation, and this site. Each entry says what exists, what runs, and what is still unverified."
    >
      <article aria-labelledby="featured-heading" className="reveal">
        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
          <p className="num">Record 01</p>
          <p className="meta flex items-center gap-2.5">
            <span aria-hidden="true" className="mark" />
            {featured.status} — {featured.statusNote}
          </p>
        </div>

        <h3
          id="featured-heading"
          className="act-title mt-5 max-w-3xl"
        >
          {featured.name}
        </h3>
        <p className="lede measure-wide mt-4">{featured.description}</p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-14">
          {study ? (
            <div>
              <p className="meta">Verified by using it</p>
              <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                {study.features.slice(0, 6).map((feature) => (
                  <li
                    key={feature.title}
                    className="flex items-start gap-2.5 text-sm text-ink-2"
                  >
                    <span aria-hidden="true" className="mark mt-2" />
                    {feature.title}
                  </li>
                ))}
              </ul>
              <p className="meta mt-5">
                Six of {study.features.length} confirmed features. The rest,
                with the caveats, are in the case study.
              </p>

              <p className="meta mt-9">Request path, as read from the source</p>
              <ol className="mt-4 flex flex-wrap items-center gap-x-2.5 gap-y-2.5">
                {path.map((node, index) => (
                  <li key={node} className="flex items-center gap-2.5">
                    {index > 0 ? (
                      <span aria-hidden="true" className="connector h-px w-5" />
                    ) : null}
                    <span className="border border-rule-2 px-2.5 py-1 font-mono text-xs">
                      {node}
                    </span>
                  </li>
                ))}
              </ol>
              <p className="meta mt-4">
                AI calls leave this path through one provider interface, backed
                by Google Gemini. Diagram drawn from the project&apos;s source
                and local configuration — not a screenshot.
              </p>
            </div>
          ) : null}

          <div>
            <p className="meta">At a glance</p>
            <dl className="mt-4">
              {study?.stackGroups.map((group) => (
                <div
                  key={group.title}
                  className="border-t border-rule py-3 first:border-t-0 first:pt-0"
                >
                  <dt className="meta">{group.title}</dt>
                  <dd className="mt-1 text-sm leading-6 text-ink-2">
                    {group.description}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-7 flex flex-col items-start gap-4">
              {featured.slug ? (
                <Link href={`/projects/${featured.slug}`} className="action">
                  Read the case study
                  <span aria-hidden="true">→</span>
                </Link>
              ) : null}
              <div className="flex flex-wrap gap-x-7 gap-y-3">
                {featured.repoUrl ? (
                  <a
                    href={featured.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tlink"
                  >
                    Repository
                    <span aria-hidden="true">↗</span>
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                ) : null}
                {featured.demoUrl ? (
                  <a
                    href={featured.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tlink"
                  >
                    Live frontend
                    <span aria-hidden="true">↗</span>
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </article>

      <div className="mt-20">
        <p className="meta">Also on the bench</p>
        <ul className="mt-6 border-b border-rule">
          {others.map((project, index) => (
            <li key={project.name} className="border-t border-rule">
              <div className="grid gap-3 py-7 lg:grid-cols-[3.5rem_minmax(0,1fr)_15rem] lg:gap-10">
                <p className="num lg:pt-1">
                  {String(index + 2).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="entry-title">{project.name}</h3>
                  <p className="measure mt-2 text-sm leading-6 text-ink-2">
                    {project.description}
                  </p>
                </div>
                <div className="lg:pt-1">
                  <p className="meta flex items-center gap-2.5">
                    <span aria-hidden="true" className="mark mark-idle" />
                    {project.status}
                  </p>
                  <p className="meta mt-2">{project.stack.join(" · ")}</p>
                  <p className="meta mt-3">{project.statusNote}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </JournalSection>
  );
}
