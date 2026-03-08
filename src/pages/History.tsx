import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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

const History = () => {
  const navigate = useNavigate();
  const [records, setRecords] = useState<HistoryRecord[]>([]);
  const [selectedReport, setSelectedReport] = useState<string | null>(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('iching-history') || '[]');
    setRecords(data);
  }, []);

  return (
    <div className="page-container max-w-4xl mx-auto">
      <button onClick={() => navigate('/')} className="text-muted-foreground text-sm mb-6 hover:text-accent">
        ← 返回首頁
      </button>

      <h1 className="section-title">卦象紀錄庫</h1>

      {records.length === 0 ? (
        <div className="brutalist-card text-center">
          <p className="text-muted-foreground">尚無紀錄。進行取卦或復盤後，結果將自動保存。</p>
        </div>
      ) : (
        <div className="space-y-3">
          {records.map((r) => (
            <div key={r.id} className="brutalist-card cursor-pointer hover:border-accent/60 transition-colors"
              onClick={() => setSelectedReport(selectedReport === r.id ? null : r.id)}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <p className="text-accent text-xs font-bold">{r.date}</p>
                  <p className="text-foreground text-sm font-bold mt-1">{r.question}</p>
                </div>
                <div className="flex gap-2 flex-wrap text-xs text-muted-foreground">
                  <span>本：{r.main}</span>
                  <span>變：{r.changed}</span>
                  <span>互：{r.mutual}</span>
                  <span>錯：{r.opposite}</span>
                  <span>綜：{r.reverse}</span>
                </div>
              </div>
              {selectedReport === r.id && (
                <div className="mt-4 pt-4 border-t border-border text-foreground text-xs leading-relaxed whitespace-pre-wrap max-h-96 overflow-y-auto">
                  {r.report}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default History;
