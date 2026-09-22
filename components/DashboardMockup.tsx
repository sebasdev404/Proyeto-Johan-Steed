'use client';
import { TrendingUp } from 'lucide-react'; 
import { motion } from 'framer-motion'; 
import { categories, weekly } from '@/data/demoData';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export function DashboardMockup() {
  return (
    <div className="text-slate-900">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[.16em] text-[#1f6b55]">Dashboard</p>
          <h3 className="mt-2 text-4xl font-extrabold tracking-tight">Panel de Inteligencia</h3>
          <p className="mt-3 text-base text-slate-500">Resumen general de métricas e interacción ciudadana.</p>
        </div>
        <button className="rounded-lg border border-slate-200 bg-white shadow-sm px-4 py-2.5 text-xs font-bold">Últimos 30 días</button>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[
          ['4.286','Comentarios analizados'],
          ['183','Necesidades detectadas'],
          ['27','Barrios identificados'],
          ['18','Publicaciones monitoreadas']
        ].map(([n,l]) => (
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm" key={l}>
            <b className="text-4xl font-extrabold text-[#07111f]">{n}</b>
            <p className="mt-2 text-sm text-slate-500">{l}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {/* Horizontal Bars */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-base font-extrabold text-[#07111f]">Top Categorías</p>
          <div className="mt-8 space-y-5">
            {categories.slice(0,4).map(x => (
              <div key={x.name}>
                <div className="mb-3 flex justify-between text-sm text-slate-600">
                  <span>{x.name}</span>
                  <b className="text-[#07111f] text-base">{x.value}</b>
                </div>
                <div className="h-2.5 w-full rounded-full bg-slate-100">
                  <motion.div initial={{width:0}} whileInView={{width:`${x.value/3}%`}} className="h-2.5 rounded-full" style={{background:x.color}}/>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recharts Bar Chart */}
        <div className="rounded-xl border border-slate-200 bg-[#0d2233] p-6 shadow-lg shadow-[#0d2233]/20 text-white">
          <div className="flex items-center gap-2 text-base font-bold">
            <TrendingUp size={20} className="text-[#b7f170]"/> Evolución Semanal
          </div>
          <div className="mt-6 h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weekly}>
                <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} />
                <Tooltip 
                  cursor={{fill: 'rgba(255,255,255,0.05)'}} 
                  contentStyle={{borderRadius: '8px', border: 'none', backgroundColor: '#07111f', color: '#fff', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.5)'}} 
                  itemStyle={{color: '#b7f170', fontWeight: 'bold'}}
                />
                <Bar dataKey="value" fill="#b7f170" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recharts Pie Chart */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-base font-extrabold text-[#07111f]">Distribución de Casos</p>
          <div className="mt-2 h-48 w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie 
                  data={categories} 
                  dataKey="value" 
                  nameKey="name" 
                  cx="50%" 
                  cy="50%" 
                  innerRadius={50} 
                  outerRadius={75} 
                  paddingAngle={3}
                >
                  {categories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="transparent" />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} 
                  itemStyle={{fontWeight: 'bold', color: '#07111f'}}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-base font-extrabold text-[#07111f]">Últimas alertas territoriales</p>
        {[['Infraestructura','Limonar','47 menciones de riesgo', 'bg-rose-500'],
          ['Servicios públicos','Panorama','21 menciones preventivas', 'bg-amber-400'],
          ['Movilidad','Caguán','17 sugerencias ciudadanas', 'bg-[#1f6b55]']
         ].map(x => (
          <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-5 text-sm" key={x[0]}>
            <span className="flex items-center gap-3 font-medium text-slate-700">
              <span className={`h-3 w-3 rounded-full ${x[3]}`}/>
              {x[0]} <span className="text-slate-300">|</span> <span className="text-slate-500">{x[1]}</span>
            </span>
            <b className="text-base text-[#07111f]">{x[2]}</b>
          </div>
        ))}
      </div>
    </div>
  );
}
