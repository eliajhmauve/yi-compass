import { hexagrams, Hexagram } from '@/data/hexagrams';

interface Props {
  label: string;
  value: number | null;
  onChange: (hex: Hexagram) => void;
}

const HexagramSelector = ({ label, value, onChange }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-bold text-accent">{label}</label>
      <select
        className="bg-input border-[2px] border-foreground/20 text-foreground px-3 py-2 text-sm font-serif focus:border-accent focus:outline-none"
        value={value ?? ''}
        onChange={(e) => {
          const num = parseInt(e.target.value);
          const hex = hexagrams.find(h => h.number === num);
          if (hex) onChange(hex);
        }}
      >
        <option value="">— 選擇卦象 —</option>
        {hexagrams.map(h => (
          <option key={h.number} value={h.number}>
            {h.number}. {h.fullName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default HexagramSelector;
