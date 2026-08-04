export type NumbersBandStat = {
  value: string;
  label: string;
  source?: string;
};

type NumbersBandProps = {
  stats: NumbersBandStat[];
  className?: string;
};

export function NumbersBand({ stats, className = "" }: NumbersBandProps) {
  return (
    <section className={`w-full bg-band py-16 sm:py-20 ${className}`}>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-2">
            <span className="font-display whitespace-nowrap text-[1.75rem] font-bold leading-tight tracking-tight text-band-accent sm:text-[2.25rem] lg:text-[2.75rem]">
              {stat.value}
            </span>
            <span className="font-body text-sm text-band-muted">{stat.label}</span>
            {stat.source ? (
              <span className="font-body text-[11px] uppercase tracking-wide text-band-subtle">
                {stat.source}
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}

export default NumbersBand;
