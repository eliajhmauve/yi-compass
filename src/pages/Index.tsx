import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OpeningAnimation from '@/components/OpeningAnimation';

const Index = () => {
  const [showAnimation, setShowAnimation] = useState(() => !sessionStorage.getItem('iching-opened'));
  const [question, setQuestion] = useState('');
  const navigate = useNavigate();

  const handleAnimationComplete = () => {
    sessionStorage.setItem('iching-opened', '1');
    setShowAnimation(false);
  };

  if (showAnimation) {
    return <OpeningAnimation onComplete={handleAnimationComplete} />;
  }

  return (
    <div className="page-container flex flex-col items-center">
      <header className="text-center mb-10 md:mb-14 animate-fade-in">
        <h1 className="text-3xl md:text-5xl font-black text-accent mb-3 tracking-wide">
          ☯ 易經卦象復盤解析
        </h1>
        <p className="text-muted-foreground text-base md:text-lg mb-1">天地之道的流轉 · 卦象中的智慧</p>
        <p className="text-muted-foreground text-sm">陰陽變化的訊息 · 時運與格局的洞察 · 萬物運行的規律</p>
        <p className="text-primary text-xs mt-3 tracking-widest">福青施老師</p>
      </header>

      {/* Question input */}
      <div className="w-full max-w-xl brutalist-card-gold mb-8 animate-fade-in">
        <label className="block text-accent font-bold text-sm mb-3">✦ 寫下您想問的問題</label>
        <textarea
          className="w-full bg-input border-[2px] border-foreground/20 text-foreground p-3 text-sm min-h-[80px] focus:border-accent focus:outline-none resize-none font-serif"
          placeholder="例如：這個合作是否值得長期發展？&#10;我今年的事業方向該如何調整？&#10;目前這段關係的未來發展如何？"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>

      {/* Mode buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl animate-fade-in">
        <button
          className="btn-oracle flex-1"
          onClick={() => navigate('/random', { state: { question } })}
        >
          ☰ 隨機取卦
        </button>
        <button
          className="btn-secondary-oracle flex-1"
          onClick={() => navigate('/review', { state: { question } })}
        >
          ☷ 卦象復盤模式
        </button>
      </div>

      {/* History link */}
      <button
        className="mt-8 text-muted-foreground text-sm underline underline-offset-4 hover:text-accent transition-colors"
        onClick={() => navigate('/history')}
      >
        卦象紀錄庫 →
      </button>

      <footer className="mt-auto pt-12 text-center text-muted-foreground text-xs">
        <p>萬物運行有其節奏，順天應時，方能行穩致遠。</p>
      </footer>
    </div>
  );
};

export default Index;
