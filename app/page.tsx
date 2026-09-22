import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Architecture, Engine, ModulesRoadmap, Opportunity, Problem } from '@/components/StorySections';
import { DashboardMockup } from '@/components/DashboardMockup';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Opportunity />
        <section className="section bg-[#eaf0f5] text-[#07111f]">
          <div className="mx-auto max-w-[1180px]">
            <p className="eyebrow !text-[#1f6b55]">Datos demostrativos</p>
            <h2 className="display mt-5 text-5xl sm:text-6xl">Imagina poder convertir esto…<br /><span className="text-slate-400">en esto.</span></h2>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl bg-[#07111f] p-8 text-white"><p className="text-6xl font-bold tracking-tighter">4.000</p><p className="mt-2 text-slate-400">comentarios dispersos</p><div className="line my-8"/><p className="text-lg font-bold">Señales organizadas por categorías, ubicación, sentimiento y seguimiento.</p></div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6"><p className="data-note">Visualización conceptual con datos ilustrativos</p><div className="mt-7 space-y-4 text-xs"><p className="flex justify-between"><span>Infraestructura vial</span><b>284</b></p><p className="flex justify-between"><span>Servicios públicos</span><b>97</b></p><p className="flex justify-between"><span>Alumbrado</span><b>68</b></p><p className="flex justify-between"><span>Residuos</span><b>43</b></p></div></div>
            </div>
          </div>
        </section>
        <Architecture />
        <Engine />
        <section id="dashboard" className="section bg-[#eaf0f5] text-[#07111f]"><div className="mx-auto max-w-[1180px]"><p className="eyebrow !text-[#1f6b55]">Dashboard conceptual</p><h2 className="display mt-5 text-5xl sm:text-6xl">Una vista clara<br />para priorizar.</h2><p className="mt-5 max-w-xl text-slate-500">El sentimiento, la categoría y la prioridad pasan a ser filtros para ordenar la gestión. Datos únicamente ilustrativos.</p><div className="mt-12"><DashboardMockup /></div></div></section>
        <ModulesRoadmap />
        <section className="section bg-white text-[#07111f]"><div className="mx-auto max-w-[1180px]"><p className="eyebrow !text-[#1f6b55]">Viabilidad inicial</p><h2 className="display mt-5 max-w-4xl text-5xl sm:text-6xl">Podemos validar la idea sin una gran inversión inicial.</h2><div className="mt-12 grid gap-4 md:grid-cols-3"><div className="rounded-2xl border border-slate-200 p-6"><p className="text-xs text-slate-400">Desarrollo local</p><b className="mt-5 block text-2xl">$0</b><p className="mt-4 text-xs leading-5 text-slate-500">Infraestructura, frontend, backend y datos locales.</p></div><div className="rounded-2xl border border-slate-200 p-6"><p className="text-xs text-slate-400">Producción inicial</p><b className="mt-5 block text-2xl">USD 10–30 / mes</b><p className="mt-4 text-xs leading-5 text-slate-500">Estimación preliminar de infraestructura.</p></div><div className="rounded-2xl border border-slate-200 p-6"><p className="text-xs text-slate-400">Inteligencia artificial</p><b className="mt-5 block text-2xl">Variable</b><p className="mt-4 text-xs leading-5 text-slate-500">Según el volumen de comentarios y modelo.</p></div></div><p className="mt-6 text-xs text-slate-500">Meta Graph API, WhatsApp Business y sus costos están sujetos a permisos, límites de uso y validación al implementar.</p></div></section>
        <section className="section text-center"><div className="mx-auto max-w-4xl"><p className="eyebrow">Visión final</p><h2 className="display mt-9 text-5xl sm:text-7xl">No se trata de leer más comentarios.</h2><p className="display mt-14 text-4xl text-[#b7f170] sm:text-6xl">Se trata de entenderlos.</p><p className="mt-16 text-xl text-slate-300">No se trata de acumular información. Se trata de convertirla en conocimiento y utilizar ese conocimiento para organizar mejor la gestión.</p></div></section>
      </main>
      <footer className="border-t border-white/10 px-6 py-16 text-center"><b className="text-3xl tracking-[-.1em]">CIVIA</b><p className="mt-3 text-sm text-slate-400">Inteligencia ciudadana a partir de conversaciones digitales.</p><p className="mt-9 text-xs text-slate-500">Primer objetivo: Facebook → Comentarios → Inteligencia → Gestión.</p><a href="#inicio" className="mt-8 inline-block rounded-full border border-white/20 px-5 py-2 text-xs transition hover:border-[#b7f170] hover:text-[#b7f170]">Volver al inicio</a></footer>
    </>
  );
}
