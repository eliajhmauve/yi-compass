import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Hexagram } from '@/data/hexagrams';
import HexagramSelector from '@/components/HexagramSelector';
import HexagramDisplay from '@/components/HexagramDisplay';

const ReviewMode = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const question = (location.state as any)?.question || '';

  const [main, setMain] = useState<Hexagram | null>(null);
  const [changed, setChanged] = useState<Hexagram | null>(null);
  const [mutual, setMutual] = useState<Hexagram | null>(null);
  const [opposite, setOpposite] = useState<Hexagram | null>(null);
  const [reverse, setReverse] = useState<Hexagram | null>(null);

  const allSelected = main && changed && mutual && opposite && reverse;

  const entries: { label: string; value: Hexagram | null; setter: (h: Hexagram) => void }[] = [
    { label: '本卦', value: main, setter: setMain },
    { label: '變卦', value: changed, setter: setChanged },
    { label: '互卦', value: mutual, setter: setMutual },
    { label: '錯卦', value: opposite, setter: setOpposite },
    { label: '綜卦', value: reverse, setter: setReverse },
  ];

  return (
    <div className="page-container max-w-4xl mx-auto">
      <button onClick={() => navigate('/')} className="text-muted-foreground text-sm mb-6 hover:text-accent">
        ← 返回首頁
      </button>

      <h1 className="section-title">☷ 卦象復盤模式</h1>

      {question && (
        <div className="brutalist-card mb-6">
          <span className="text-accent text-xs font-bold">問題：</span>
          <p className="text-foreground text-sm mt-1">{question}</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {entries.map((entry) => (
          <div key={entry.label} className="brutalist-card">
            <HexagramSelector
              label={entry.label}
              value={entry.value?.number ?? null}
              onChange={entry.setter}
            />
            {entry.value && (
              <div className="flex items-center gap-3 mt-3">
                <HexagramDisplay lines={entry.value.lines} size="sm" />
                <div>
                  <p className="text-foreground text-sm font-bold">{entry.value.fullName}</p>
                  <p className="text-muted-foreground text-xs">{entry.value.meaning}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {allSelected && (
        <div className="text-center animate-fade-in">
          <button
            className="btn-oracle"
            onClick={() => {
              navigate('/analysis', {
                state: {
                  question,
                  hexSet: { main, changed, mutual, opposite, reverse },
                },
              });
            }}
          >
            生成解析報告 →
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewMode;
