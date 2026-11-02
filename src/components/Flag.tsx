function star(cx: number, cy: number, r: number, rotation: number) {
  const points = Array.from({ length: 10 }, (_, i) => {
    const radius = i % 2 === 0 ? r : r * 0.382;
    const angle = ((rotation + i * 36 - 90) * Math.PI) / 180;
    return `${(cx + radius * Math.cos(angle)).toFixed(2)},${(cy + radius * Math.sin(angle)).toFixed(2)}`;
  });
  return points.join(" ");
}

const flags: Record<string, React.ReactNode> = {
  en: (
    <>
      <rect width="30" height="20" fill="#012169" />
      <path d="M0 0L30 20M30 0L0 20" stroke="#fff" strokeWidth="4" />
      <path d="M0 0L30 20M30 0L0 20" stroke="#C8102E" strokeWidth="2" />
      <path d="M15 0V20M0 10H30" stroke="#fff" strokeWidth="6" />
      <path d="M15 0V20M0 10H30" stroke="#C8102E" strokeWidth="3.6" />
    </>
  ),
  es: (
    <>
      <rect width="30" height="20" fill="#AA151B" />
      <rect y="5" width="30" height="10" fill="#F1BF00" />
    </>
  ),
  fr: (
    <>
      <rect width="10" height="20" fill="#002654" />
      <rect x="10" width="10" height="20" fill="#fff" />
      <rect x="20" width="10" height="20" fill="#CE1126" />
    </>
  ),
  de: (
    <>
      <rect width="30" height="7" fill="#000" />
      <rect y="7" width="30" height="6" fill="#DD0000" />
      <rect y="13" width="30" height="7" fill="#FFCE00" />
    </>
  ),
  it: (
    <>
      <rect width="10" height="20" fill="#009246" />
      <rect x="10" width="10" height="20" fill="#fff" />
      <rect x="20" width="10" height="20" fill="#CE2B37" />
    </>
  ),
  pt: (
    <>
      <rect width="12" height="20" fill="#006600" />
      <rect x="12" width="18" height="20" fill="#FF0000" />
      <circle cx="12" cy="10" r="3.5" fill="#FFCC00" />
    </>
  ),
  nl: (
    <>
      <rect width="30" height="7" fill="#AE1C28" />
      <rect y="7" width="30" height="6" fill="#fff" />
      <rect y="13" width="30" height="7" fill="#21468B" />
    </>
  ),
  ar: (
    <>
      <rect width="30" height="7" x="0" fill="#00732F" />
      <rect y="7" width="30" height="6" fill="#fff" />
      <rect y="13" width="30" height="7" fill="#000" />
      <rect width="8" height="20" fill="#FF0000" />
    </>
  ),
  "zh-CN": (
    <>
      <rect width="30" height="20" fill="#DE2910" />
      <polygon points={star(5, 5, 3, 0)} fill="#FFDE00" />
      <polygon points={star(10, 2, 1, 20)} fill="#FFDE00" />
      <polygon points={star(12, 4, 1, 45)} fill="#FFDE00" />
      <polygon points={star(12, 7, 1, 20)} fill="#FFDE00" />
      <polygon points={star(10, 9, 1, 0)} fill="#FFDE00" />
    </>
  ),
  hi: (
    <>
      <rect width="30" height="7" fill="#FF9933" />
      <rect y="7" width="30" height="6" fill="#fff" />
      <rect y="13" width="30" height="7" fill="#138808" />
      <circle cx="15" cy="10" r="2.3" fill="none" stroke="#000080" strokeWidth="0.6" />
      <path d="M15 7.7V12.3M12.7 10H17.3M13.4 8.4L16.6 11.6M16.6 8.4L13.4 11.6" stroke="#000080" strokeWidth="0.4" />
    </>
  ),
  bn: (
    <>
      <rect width="30" height="20" fill="#006A4E" />
      <circle cx="13.5" cy="10" r="4.5" fill="#F42A41" />
    </>
  ),
  ur: (
    <>
      <rect width="30" height="20" fill="#01411C" />
      <rect width="7.5" height="20" fill="#fff" />
      <circle cx="19" cy="10" r="4.8" fill="#fff" />
      <circle cx="20.6" cy="9" r="4.1" fill="#01411C" />
      <polygon points={star(22.6, 7.6, 1.9, 20)} fill="#fff" />
    </>
  ),
  id: (
    <>
      <rect width="30" height="10" fill="#E70011" />
      <rect y="10" width="30" height="10" fill="#fff" />
    </>
  ),
  ms: (
    <>
      <rect width="30" height="20" fill="#fff" />
      {Array.from({ length: 7 }, (_, i) => (
        <rect key={i} y={i * (20 / 7)} width="30" height={10 / 7} fill="#CC0001" />
      ))}
      <rect width="15" height="10.7" fill="#010066" />
      <circle cx="5.6" cy="5.3" r="3.2" fill="#FFCC00" />
      <circle cx="6.5" cy="5.3" r="2.6" fill="#010066" />
      <polygon points={star(10, 5.3, 2.4, 0)} fill="#FFCC00" />
    </>
  ),
};

export function Flag({ code, className = "" }: { code: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 30 20"
      width="20"
      height="14"
      aria-hidden
      className={`shrink-0 overflow-hidden rounded-[2px] ring-1 ring-white/20 ${className}`}
    >
      {flags[code]}
    </svg>
  );
}
