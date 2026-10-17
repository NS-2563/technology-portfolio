import JournalSection from "./JournalSection";

const loop = [
  {
    n: "01",
    title: "Ask a small question",
    detail: "Pick something narrow enough to actually finish.",
  },
  {
    n: "02",
    title: "Build a version that runs",
    detail: "Get one honest path working end to end.",
  },
  {
    n: "03",
    title: "Test the seams",
    detail: "Find what breaks, and what reads badly.",
  },
  {
    n: "04",
    title: "Refine what broke",
    detail: "Fix the unclear part, then go again.",
  },
];

export default function About() {
  return (
    <JournalSection
      id="about"
      folio="01"
      label="Approach"
      title="I learn by building, not by collecting tutorials."
      intro="The work here is a record of that: small projects started on purpose, tested, and revised until they behave."
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,15rem)] lg:gap-14">
        <div className="prose measure-wide">
          <p className="drop-cap">
            I&apos;m working toward full-stack development, with a growing
            interest in Python backends, AI-powered applications, and
            automation. Rather than only following tutorials, I start small
            projects and improve them step by step.
          </p>
          <p>
            My current practice is straightforward: build a working version,
            test it, notice what breaks or feels unclear, then refine it. That
            loop has taught me more about APIs, databases, and deployment than
            reading alone.
          </p>
        </div>

        <div className="border-t border-rule pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
          <p className="note">
            Each project is a chance to write cleaner code and to say plainly
            what I actually learned.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <p className="meta">The loop I keep returning to</p>

        <ol className="mt-8 grid lg:grid-cols-4">
          {loop.map((step) => (
            <li
              key={step.n}
              className="relative ml-1.5 border-l border-rule pb-9 pl-6 last:pb-0 lg:ml-0 lg:border-l-0 lg:border-t lg:pt-10 lg:pb-0 lg:pl-0 lg:pr-10"
            >
              <span
                aria-hidden="true"
                className="rail-node top-1 -left-[4px] lg:-top-[4px] lg:left-0"
              />
              <span className="num">{step.n}</span>
              <h3 className="mt-2 text-base font-semibold">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-ink-2">
                {step.detail}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-0 hidden lg:grid lg:grid-cols-4">
          <div
            aria-hidden="true"
            className="col-span-3 col-start-2 h-9 border-x border-b border-rule-2"
          />
          <p className="meta col-span-3 col-start-2 pt-2">
            Repeat while it is worth improving.
          </p>
        </div>
      </div>
    </JournalSection>
  );
}
