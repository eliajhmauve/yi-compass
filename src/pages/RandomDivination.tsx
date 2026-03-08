import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { generateRandomCast, buildHexagramSet, HexagramSet } from '@/lib/hexagram-utils';
import HexagramGroup from '@/components/HexagramGroup';

const RandomDivination = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const question = (location.state as any)?.question || '';
  const [hexSet, setHexSet] = useState<HexagramSet | null>(null);
  const [casting, setCasting] = useState(false);

  const handleCast = () => {
    setCasting(true);
    setTimeout(() => {
      const cast = generateRandomCast();
      const set = buildHexagramSet(cast.mainLines, cast.changedLines, cast.changingLines);
      setHexSet(set);
      setCasting(false);
    }, 800);
  };

  return (
    <div className="page-container max-w-5xl mx-auto">
      <button onClick={() => navigate('/')} className="text-muted-foreground text-sm mb-6 hover:text-accent">
        ← 返回首頁
      </button>

      <h1 className="section-title">☰ 隨機取卦</h1>

      {question && (
        <div className="brutalist-card mb-6">
          <span className="text-accent text-xs font-bold">問題：</span>
          <p className="text-foreground text-sm mt-1">{question}</p>
        </div>
      )}

      <div className="text-center mb-8">
        <button
          className="btn-oracle"
          onClick={handleCast}
          disabled={casting}
        >
          {casting ? '卦象生成中…' : hexSet ? '重新取卦' : '開始取卦'}
        </button>
      </div>

      {hexSet && (
        <div className="animate-fade-in">
          <HexagramGroup
            main={hexSet.main}
            changed={hexSet.changed}
            mutual={hexSet.mutual}
            opposite={hexSet.opposite}
            reverse={hexSet.reverse}
            changingLines={hexSet.changingLines}
          />

          <div className="text-center mt-8">
            <button
              className="btn-oracle"
              onClick={() => {
                navigate('/analysis', {
                  state: { question, hexSet: {
                    main: hexSet.main,
                    changed: hexSet.changed,
                    mutual: hexSet.mutual,
                    opposite: hexSet.opposite,
                    reverse: hexSet.reverse,
                    changingLines: hexSet.changingLines,
                  }},
                });
              }}
            >
              生成解析報告 →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomDivination;
