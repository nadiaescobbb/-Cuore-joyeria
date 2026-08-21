interface SwatchCardProps {
  label: string;
  title: string;
  description: string;
  bgColor: string;
  textColor?: string;
  labelColor?: string;
  borderColor?: string;
  colSpanClass?: string;
}

export function SwatchCard({
  label,
  title,
  description,
  bgColor,
  textColor = 'text-warm-900',
  labelColor = 'text-brand-gold',
  borderColor = 'border-warm-300',
  colSpanClass = 'md:col-span-3',
}: SwatchCardProps) {
  return (
    <div
      className={`${colSpanClass} ${bgColor} ${textColor} border ${borderColor} p-6 md:p-8 rounded-[3px] flex flex-col justify-end h-full min-h-[220px] md:min-h-[260px]`}
    >
      <span className={`font-mono text-micro uppercase tracking-[0.2em] font-medium ${labelColor}`}>
        {label}
      </span>
      <h3 className={`font-heading text-h3 md:text-2xl font-normal leading-snug ${textColor} my-2`}>
        "{title}"
      </h3>
      <p className={`font-body text-subtle leading-relaxed opacity-90 ${textColor}`}>
        {description}
      </p>
    </div>
  );
}
