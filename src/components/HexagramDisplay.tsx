import { Lines } from '@/data/hexagrams';

interface Props {
  lines: Lines;
  changingLines?: boolean[];
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: { h: 'h-[4px]', gap: 'gap-1.5', w: 'w-16' },
  md: { h: 'h-[6px]', gap: 'gap-2', w: 'w-24' },
  lg: { h: 'h-2', gap: 'gap-2.5', w: 'w-32' },
};

const HexagramDisplay = ({ lines, changingLines, size = 'md' }: Props) => {
  const s = sizeMap[size];
  // Display from top (index 5) to bottom (index 0)
  const displayLines = [...lines].reverse();
  const displayChanging = changingLines ? [...changingLines].reverse() : undefined;

  return (
    <div className={`flex flex-col ${s.gap} ${s.w}`}>
      {displayLines.map((line, i) => {
        const isChanging = displayChanging?.[i];
        const lineColor = isChanging ? 'bg-primary' : 'hex-line--yang';
        return (
          <div key={i} className="relative">
            {line === 1 ? (
              <div className={`${s.h} ${lineColor} rounded-sm`} />
            ) : (
              <div className="flex gap-2">
                <div className={`${s.h} flex-1 ${lineColor} rounded-sm`} />
                <div className={`${s.h} flex-1 ${lineColor} rounded-sm`} />
              </div>
            )}
            {isChanging && (
              <span className="absolute -right-4 top-1/2 -translate-y-1/2 text-primary text-xs">○</span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default HexagramDisplay;
