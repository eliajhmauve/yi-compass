import { useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { generateReport } from '@/lib/report-generator';
import { HexagramSet } from '@/lib/hexagram-utils';
import ReactMarkdown from 'react-markdown';

interface HistoryRecord {
  id: string;
  date: string;
  question: string;
  main: string;
  changed: string;
  mutual: string;
  opposite: string;
  reverse: string;
  report: string;
}

const AnalysisReport = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as { question: string; hexSet: HexagramSet } | null;

  const report = useMemo(() => {
    if (!state) return '';
    return generateReport(state.question || '未指定問題', state.hexSet);
  }, [state]);

  // Save to history
  useEffect(() => {
    if (!state || !report) return;
    const record: HistoryRecord = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('zh-TW'),
      question: state.question || '未指定問題',
      main: state.hexSet.main.fullName,
      changed: state.hexSet.changed.fullName,
      mutual: state.hexSet.mutual.fullName,
      opposite: state.hexSet.opposite.fullName,
      reverse: state.hexSet.reverse.fullName,
      report,
    };
    const existing = JSON.parse(localStorage.getItem('iching-history') || '[]');
    existing.unshift(record);
    localStorage.setItem('iching-history', JSON.stringify(existing.slice(0, 50)));
  }, [state, report]);

  if (!state) {
    return (
      <div className="page-container text-center">
        <p className="text-muted-foreground">無卦象資料，請先進行取卦或復盤。</p>
        <button className="btn-oracle mt-4" onClick={() => navigate('/')}>返回首頁</button>
      </div>
    );
  }

  return (
    <div className="page-container max-w-3xl mx-auto">
      <button onClick={() => navigate('/')} className="text-muted-foreground text-sm mb-6 hover:text-accent">
        ← 返回首頁
      </button>

      <div className="brutalist-card-gold prose prose-invert prose-sm md:prose-base max-w-none
        prose-headings:text-accent prose-headings:font-serif
        prose-h1:text-2xl prose-h1:md:text-3xl prose-h1:border-b-[3px] prose-h1:border-primary prose-h1:pb-3
        prose-h2:text-lg prose-h2:md:text-xl
        prose-strong:text-accent
        prose-blockquote:border-l-[3px] prose-blockquote:border-accent prose-blockquote:text-muted-foreground
        prose-hr:border-border
        prose-li:text-foreground
        prose-p:text-foreground prose-p:leading-relaxed">
        <ReactMarkdown>{report}</ReactMarkdown>
      </div>

      <div className="flex gap-4 justify-center mt-8">
        <button className="btn-secondary-oracle" onClick={() => navigate('/')}>
          返回首頁
        </button>
        <button className="btn-secondary-oracle" onClick={() => navigate('/history')}>
          查看紀錄庫
        </button>
      </div>
    </div>
  );
};

export default AnalysisReport;
