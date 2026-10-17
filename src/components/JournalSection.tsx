import type { ReactNode } from "react";

type Props = {
  id: string;
  folio: string;
  label: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
};

export default function JournalSection({
  id,
  folio,
  label,
  title,
  intro,
  children,
}: Props) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className="act">
      <div className="page journal">
        <div className="folio">
          <span className="num">№ {folio}</span>
          <span className="label">{label}</span>
        </div>
        <div className="min-w-0">
          <h2 id={headingId} className="act-title reveal measure-wide">
            {title}
          </h2>
          {intro ? <p className="lede mt-5 measure-wide">{intro}</p> : null}
          <div className="mt-10">{children}</div>
        </div>
      </div>
    </section>
  );
}
