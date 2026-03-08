import { Hexagram } from '@/data/hexagrams';
import HexagramDisplay from './HexagramDisplay';

interface Props {
  main: Hexagram;
  changed: Hexagram;
  mutual: Hexagram;
  opposite: Hexagram;
  reverse: Hexagram;
  changingLines?: boolean[];
}

const labels = [
  { key: 'main', title: '本卦', desc: '當前局勢' },
  { key: 'changed', title: '變卦', desc: '未來發展' },
  { key: 'mutual', title: '互卦', desc: '內在過程' },
  { key: 'opposite', title: '錯卦', desc: '對立視角' },
  { key: 'reverse', title: '綜卦', desc: '整體格局' },
];

const HexagramGroup = ({ main, changed, mutual, opposite, reverse, changingLines }: Props) => {
  const hexes = [main, changed, mutual, opposite, reverse];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
      {hexes.map((hex, i) => (
        <div key={labels[i].key} className="brutalist-card flex flex-col items-center gap-3">
          <div className="text-center">
            <h3 className="text-accent font-bold text-sm">{labels[i].title}</h3>
            <p className="text-muted-foreground text-xs">{labels[i].desc}</p>
          </div>
          <HexagramDisplay
            lines={hex.lines}
            changingLines={i === 0 ? changingLines : undefined}
            size="sm"
          />
          <p className="text-foreground font-bold text-sm">{hex.fullName}</p>
          <p className="text-muted-foreground text-xs text-center leading-relaxed">{hex.meaning}</p>
        </div>
      ))}
    </div>
  );
};

export default HexagramGroup;
