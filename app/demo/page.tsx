'use client';

import { useState } from 'react';
import { ArrowLeft, Bell, CircleHelp, LayoutDashboard, ListChecks, MapPinned, Settings, type LucideIcon } from 'lucide-react';
import { CaseFlowDemo } from '@/components/CaseFlowDemo';
import { DashboardMockup } from '@/components/DashboardMockup';
import { MapMockup } from '@/components/MapMockup';

const navigation: Array<[LucideIcon, string]> = [
  [LayoutDashboard, 'Dashboard'], 
  [ListChecks, 'Bandeja de casos'], 
  [MapPinned, 'Termómetro Territorial'], 
  [Settings, 'Configuración']
];

export default function DemoPage() {
  const [activeTab, setActiveTab] = useState('Bandeja de casos');

  return (
    <main className="min-h-screen bg-[#edf2f6] text-[#07111f]">
      <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-5 sm:px-8">
        <a href="/" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-[#1f6b55]">
          <ArrowLeft size={18}/> Volver a la propuesta
        </a>
        <div className="flex items-center gap-4">
          <span className="hidden text-sm text-slate-500 sm:block">Entorno demostrativo</span>
          <button aria-label="Notificaciones" className="rounded-full p-2 text-slate-500 hover:bg-slate-100"><Bell size={20}/></button>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#07111f] text-sm font-bold text-[#b7f170]">JS</span>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[260px_1fr]">
        <aside className="border-b border-slate-200 bg-[#081827] px-5 py-7 text-slate-300 lg:min-h-[calc(100vh-64px)] lg:border-b-0 lg:border-r">
          <a href="/demo" className="block text-2xl font-extrabold tracking-[-.08em] text-white">CIVIA</a>
          <p className="mt-1 text-xs uppercase tracking-[.18em] text-[#b7f170]">Plataforma ciudadana</p>
          
          <nav className="mt-8 flex gap-2 overflow-auto lg:block lg:space-y-3">
            {navigation.map(([Icon, label], index) => {
              const isActive = activeTab === label;
              const isConfig = label === 'Configuración';
              
              if (isConfig) return null;

              return (
                <button 
                  key={label} 
                  onClick={() => setActiveTab(label)}
                  className={`inline-flex w-full shrink-0 items-center gap-3 rounded-lg px-4 py-3 text-sm font-bold transition-colors ${isActive ? 'bg-[#b7f170] text-[#07111f]' : 'text-slate-300 hover:bg-white/10'}`}
                >
                  <Icon size={18}/>{label}
                </button>
              );
            })}
          </nav>
          
        </aside>

        <section className="min-w-0 p-5 sm:p-8">
          {activeTab === 'Bandeja de casos' && (
            <div className="animate-in fade-in duration-500">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-[.16em] text-[#1f6b55]">Bandeja de gestión</p>
                  <h1 className="mt-2 text-4xl font-extrabold tracking-tight">Casos ciudadanos</h1>
                  <p className="mt-3 text-base text-slate-500">Comentarios recibidos, clasificados y listos para gestionar.</p>
                </div>
                <span className="w-fit rounded-full bg-amber-100 px-4 py-2.5 text-sm font-bold text-amber-800">Modo simulación activo</span>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <Stat value="3" label="Casos pendientes" accent="text-rose-600"/>
                <Stat value="1" label="Prioridad alta" accent="text-amber-600"/>
                <Stat value="94%" label="Confianza promedio" accent="text-[#1f6b55]"/>
              </div>
              <div className="mt-8">
                <CaseFlowDemo/>
              </div>
            </div>
          )}

          {activeTab === 'Dashboard' && (
            <div className="animate-in fade-in duration-500">
              <DashboardMockup />
            </div>
          )}

          {activeTab === 'Termómetro Territorial' && (
            <div className="animate-in fade-in duration-500">
              <MapMockup />
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

function Stat({ value, label, accent }: { value: string; label: string; accent: string }) { 
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <p className={`text-3xl font-extrabold ${accent}`}>{value}</p>
      <p className="mt-2 text-sm font-medium text-slate-500">{label}</p>
    </div>
  ); 
}
