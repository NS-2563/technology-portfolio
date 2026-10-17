import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getCaseStudy, getCaseStudySlugs } from "@/data/case-studies";

type Params = { slug: string };

// The page awaits route params for a static data lookup, which cannot
// render before navigation. Opt out of instant-navigation validation
// for this segment (dev-only warning; no runtime effect).
export const instant = false;

export function generateStaticParams(): Params[] {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export const ensureStatic = "navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) {
    return { title: "Project not found — Technology Portfolio" };
  }
  return {
    title: `${study.projectName} case study — Technology Portfolio`,
    description: study.tagline,
  };
}

const toc = [
  { id: "overview", n: "01", label: "Overview" },
  { id: "features", n: "02", label: "Verified features" },
  { id: "stack", n: "03", label: "Stack" },
  { id: "architecture", n: "04", label: "Request path" },
  { id: "engineering", n: "05", label: "Source audit" },
  { id: "limitations", n: "06", label: "Limitations" },
  { id: "links", n: "07", label: "Links" },
];

function Chapter({
  id,
  n,
  title,
  caption,
  children,
}: {
  id: string;
  n: string;
  title: string;
  caption?: string;
  children: ReactNode;
}) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="reveal"
    >
      <p className="num">{n}</p>
      <h2 id={headingId} className="chapter-title mt-2">
        {title}
      </h2>
      {caption ? <p className="meta mt-2">{caption}</p> : null}
      <div className="mt-6">{children}</div>
    </section>
  );
}

function Glossary({ rows }: { rows: { term: string; body: string }[] }) {
  return (
    <dl className="border-b border-rule">
      {rows.map((row) => (
        <div
          key={row.term}
          className="grid gap-1.5 border-t border-rule py-4 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-6"
        >
          <dt className="text-sm font-semibold">{row.term}</dt>
          <dd className="text-sm leading-6 text-ink-2">{row.body}</dd>
        </div>
      ))}
    </dl>
  );
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) {
    notFound();
  }

  return (
    <div id="top" className="flex min-h-full flex-1 flex-col">
      <Navbar />

      <main id="main-content" className="flex flex-1 flex-col">
        <header className="page pt-10 pb-14 sm:pt-14">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 font-mono text-xs text-ink-3">
              <li>
                <Link href="/" className="transition-colors hover:text-accent">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/#projects"
                  className="transition-colors hover:text-accent"
                >
                  Work
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-ink">
                {study.projectName}
              </li>
            </ol>
          </nav>

          <div className="mt-10 grid gap-3 lg:grid-cols-[8.5rem_minmax(0,1fr)] lg:gap-12">
            <div className="flex items-baseline gap-3 lg:flex-col lg:gap-1">
              <span className="num">Record 01</span>
              <span className="label">Case study</span>
            </div>
            <div className="min-w-0">
              <h1
                className="headline enter"
                style={{ animationDelay: "60ms" }}
              >
                {study.projectName}
              </h1>
              <p className="lede measure-wide mt-5">{study.tagline}</p>
              <p className="meta mt-5 flex flex-wrap items-center gap-2.5">
                <span aria-hidden="true" className="mark" />
                {study.status} — {study.statusNote}
              </p>
              <p className="meta mt-2">{study.stack.join(" · ")}</p>
            </div>
          </div>
        </header>

        <div className="page grid gap-12 pb-20 lg:grid-cols-[8.5rem_minmax(0,1fr)] lg:gap-12 lg:pb-28">
          <aside aria-label="Contents" className="hidden lg:block">
            <div className="sticky top-24">
              <p className="meta">Contents</p>
              <ul className="mt-4 space-y-2.5">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="flex items-baseline gap-2.5 text-sm text-ink-2 transition-colors hover:text-accent"
                    >
                      <span className="num">{item.n}</span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="min-w-0 space-y-16">
            <Chapter
              id="overview"
              n="01"
              title="Overview"
              caption="What the project is for, and who it is for."
            >
              <div className="prose measure-wide">
                {study.overview.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </Chapter>

            <Chapter
              id="features"
              n="02"
              title="Verified features"
              caption="Each feature below was confirmed working in the browser. No claims are made about scores, success rates, or the quality of AI-generated results."
            >
              <Glossary
                rows={study.features.map((feature) => ({
                  term: feature.title,
                  body: feature.description,
                }))}
              />
            </Chapter>

            <Chapter
              id="stack"
              n="03"
              title="Technology stack"
              caption="Grouped by the layer it sits in."
            >
              <Glossary
                rows={study.stackGroups.map((group) => ({
                  term: group.title,
                  body: group.description,
                }))}
              />
            </Chapter>

            <Chapter
              id="architecture"
              n="04"
              title="Request path"
              caption="Step by step, front to back, as read from the source and local configuration."
            >
              <ol className="border-l border-rule">
                {study.architecture.map((step, index) => (
                  <li
                    key={step.title}
                    className="relative border-t border-rule py-5 pl-7 first:border-t-0"
                  >
                    <span aria-hidden="true" className="rail-node top-6 -left-[4px]" />
                    <p className="num">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-1.5 font-semibold">{step.title}</h3>
                    <p className="measure mt-1.5 text-sm leading-6 text-ink-2">
                      {step.description}
                    </p>
                  </li>
                ))}
              </ol>
              <p className="note measure mt-8 border-l border-accent pl-5">
                {study.architectureNote}
              </p>
            </Chapter>

            <Chapter
              id="engineering"
              n="05"
              title="Engineering work"
              caption="Concrete implementation evidence found in the public source — read, not run."
            >
              <Glossary
                rows={study.engineering.map((item) => ({
                  term: item.title,
                  body: item.description,
                }))}
              />
            </Chapter>

            <Chapter
              id="limitations"
              n="06"
              title="Limitations and next steps"
              caption="What is knowingly unfinished or unverified."
            >
              <ul className="border-b border-rule">
                {study.limitations.map((limitation) => (
                  <li
                    key={limitation.slice(0, 32)}
                    className="flex items-start gap-3 border-t border-rule py-4 text-sm leading-6 text-ink-2"
                  >
                    <span
                      aria-hidden="true"
                      className="mark mark-caveat mt-2"
                    />
                    {limitation}
                  </li>
                ))}
              </ul>
            </Chapter>

            <Chapter id="links" n="07" title="Links">
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
                <a
                  href={study.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action"
                >
                  GitHub repository
                  <span aria-hidden="true">↗</span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
                {study.deploymentUrl ? (
                  <a
                    href={study.deploymentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action action-quiet"
                  >
                    Live frontend
                    <span aria-hidden="true">↗</span>
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                ) : null}
              </div>
              {study.deploymentLabel ? (
                <p className="meta mt-5 measure-wide">
                  Note: {study.deploymentLabel}.
                </p>
              ) : null}
              <p className="mt-8">
                <Link href="/#projects" className="tlink">
                  <span aria-hidden="true">←</span> Return to selected work
                </Link>
              </p>
            </Chapter>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
