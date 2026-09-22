'use client';
import { useMemo, useState } from 'react';
import { Check, ChevronRight, MessageCircle, RefreshCw, Send, Sparkles, AlertTriangle } from 'lucide-react';
import { DemoComment, demoComments } from '@/data/demoData';

const sentimentStyle: Record<string, string> = {
  'Frustración': 'bg-rose-100 text-rose-700 border-rose-200',
  'Preocupación': 'bg-orange-100 text-orange-800 border-orange-200',
  'Indignación': 'bg-red-100 text-red-900 border-red-200',
  'Satisfacción': 'bg-emerald-100 text-emerald-700 border-emerald-200',
  'Aprobación': 'bg-teal-100 text-teal-700 border-teal-200',
  'Conformismo': 'bg-amber-100 text-amber-700 border-amber-200',
  'Esperanza': 'bg-blue-100 text-blue-700 border-blue-200',
  'Escepticismo': 'bg-slate-200 text-slate-700 border-slate-300'
};
const priorityStyle = { Alta: 'bg-rose-600 text-white', Media: 'bg-amber-400 text-[#07111f]', Baja: 'bg-slate-200 text-slate-700' };

export function CaseFlowDemo() {
  const [comments, setComments] = useState(demoComments);
  const [selectedId, setSelectedId] = useState(demoComments[0].id);
  const [taken, setTaken] = useState(false);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const pending = useMemo(() => comments.filter(c => !c.responded), [comments]);
  const selected = comments.find(c => c.id === selectedId) ?? comments[0];

  const select = (c: DemoComment) => { setSelectedId(c.id); setTaken(false); setSent(false); };
  const notify = () => { setSent(true); setComments(items => items.map(i => i.id === selected.id ? {...i, responded: true} : i)); };

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_70px_rgba(7,17,31,.12)]">
      <div className="flex flex-col gap-5 border-b border-slate-100 bg-slate-50 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[.16em] text-[#1f6b55]">Demo interactiva · datos simulados</p>
          <p className="mt-1 text-base text-slate-500">Publicación de Facebook → clasificación → gestión del caso</p>
        </div>
        <button onClick={() => {setLoading(true); window.setTimeout(() => setLoading(false), 650)}} disabled={loading} className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-slate-700">
          <RefreshCw size={16} className={loading ? 'animate-spin' : ''}/>
          {loading ? 'Consultando Meta…' : 'Simular consulta a Meta'}
        </button>
      </div>
      <div className="grid lg:grid-cols-[.92fr_1.08fr]">
        <section className="border-b border-slate-100 p-6 lg:border-b-0 lg:border-r">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-extrabold text-[#07111f]">Comentarios ciudadanos</h3>
            <span className="rounded-full bg-[#07111f] px-3 py-1.5 text-xs font-bold text-white">{pending.length} sin respuesta</span>
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-500">Se priorizan las interacciones ciudadanas de alto impacto político.</p>
          <div className="mt-5 space-y-3">
            {comments.map(c => (
              <button key={c.id} onClick={() => select(c)} className={`w-full rounded-xl border p-4 text-left transition ${selected.id === c.id ? 'border-[#1f6b55] bg-emerald-50' : 'border-slate-100 hover:border-slate-300'} ${c.responded ? 'opacity-50' : ''}`}>
                <div className="flex items-start justify-between gap-3">
                  <b className="text-sm text-[#07111f]">{c.author}</b>
                  <span className="text-xs text-slate-400">{c.time}</span>
                </div>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{c.text}</p>
                <div className="mt-4 flex items-center gap-2">
                  <span className={`rounded border px-2.5 py-1 text-xs font-bold ${sentimentStyle[c.sentiment] || 'bg-slate-100 text-slate-700'}`}>{c.sentiment}</span>
                  {c.responded ? <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700"><Check size={14}/> Respondido</span> : <span className="text-xs font-bold text-slate-500">Sin respuesta</span>}
                </div>
              </button>
            ))}
          </div>
        </section>
        <section className="p-6 sm:p-8">
          <div className="flex items-center gap-2">
            <Sparkles size={20} className="text-[#1f6b55]"/>
            <h3 className="text-base font-extrabold text-[#07111f]">Análisis automático</h3>
            <span className="ml-auto text-xs text-slate-400">Confianza {selected.confidence}%</span>
          </div>
          <blockquote className="mt-5 rounded-xl bg-[#07111f] p-5 text-base leading-7 text-white">“{selected.text}”</blockquote>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <Metric label="Sentimiento Ciudadano" value={selected.sentiment} className={sentimentStyle[selected.sentiment]?.split(' ')[0] + ' ' + sentimentStyle[selected.sentiment]?.split(' ')[1]}/>
            <Metric label="Prioridad" value={selected.priority} className={priorityStyle[selected.priority]}/>
            <Metric label="Categoría" value={selected.category}/>
            <Metric label="Ubicación" value={selected.location}/>
            <Metric label="Estado" value={taken ? 'Caso en gestión' : 'Por revisar'} />
            <Metric label="Fuente" value="Facebook / Meta" />
          </div>
          
          <div className="mt-8 flex flex-col gap-4">
            <p className="text-sm font-extrabold text-[#07111f] border-b border-slate-100 pb-2">Proyección de Impacto Político</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-5">
                <p className="text-sm font-extrabold text-emerald-800 flex items-center gap-2"><Check size={16}/> Si se resuelve</p>
                <p className="mt-2 text-xs leading-6 text-emerald-900/80">{selected.impact_if_solved}</p>
              </div>
              <div className="rounded-xl border border-rose-200 bg-rose-50/50 p-5">
                <p className="text-sm font-extrabold text-rose-800 flex items-center gap-2"><AlertTriangle size={16}/> Si se ignora</p>
                <p className="mt-2 text-xs leading-6 text-rose-900/80">{selected.impact_if_ignored}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button onClick={() => setTaken(true)} disabled={taken} className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#07111f] px-5 py-3.5 text-sm font-bold text-white disabled:bg-emerald-700 transition">
              <ChevronRight size={18}/>{taken ? 'Caso tomado para gestión' : 'Tomar caso'}
            </button>
            <button onClick={notify} disabled={!taken || sent} className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#1f6b55] px-5 py-3.5 text-sm font-bold text-[#1f6b55] disabled:border-slate-200 disabled:text-slate-400 transition hover:bg-slate-50">
              <MessageCircle size={18}/>{sent ? 'Mensaje simulado enviado' : 'Notificar por WhatsApp'}
            </button>
          </div>
          {sent && <div className="mt-4 flex items-start gap-2 rounded-lg bg-emerald-50 p-4 text-xs leading-6 text-emerald-800 border border-emerald-100">
            <Send size={16} className="mt-0.5 shrink-0"/>Se generó la notificación de seguimiento. En producción, se requiere consentimiento del ciudadano y una plantilla de WhatsApp aprobada.
          </div>}
        </section>
      </div>
    </div>
  );
}

function Metric({ label, value, className = '' }: { label: string; value: string; className?: string }) { 
  return (
    <div className="rounded-lg border border-slate-100 p-3.5 bg-slate-50/50">
      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{label}</p>
      <span className={`mt-2 inline-block rounded px-2 py-1 text-xs font-bold text-[#07111f] ${className}`}>{value}</span>
    </div>
  ); 
}
