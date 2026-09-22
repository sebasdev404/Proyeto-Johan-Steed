'use client';
import { MapPin, AlertTriangle, Users, Navigation } from 'lucide-react'; 

export function MapMockup() {
  return (
    <div className="text-slate-900">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[.16em] text-[#1f6b55]">Termómetro Territorial</p>
          <h3 className="mt-2 text-4xl font-extrabold tracking-tight">Mapa Ciudadano</h3>
          <p className="mt-3 text-base text-slate-500">Visualización de necesidades y prioridades por barrio o sector.</p>
        </div>
        <button className="rounded-lg border border-slate-200 bg-white shadow-sm px-4 py-2.5 text-xs font-bold flex items-center gap-2">
          <Navigation size={14}/> Centrar mapa
        </button>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm relative h-[600px]">
        {/* Mapa real embebido tipo Google Maps / OSM */}
        <div className="absolute inset-0 bg-[#e2e8f0]">
          <iframe 
            title="Mapa base"
            width="100%" 
            height="100%" 
            frameBorder="0" 
            scrolling="no" 
            marginHeight={0} 
            marginWidth={0} 
            src="https://www.openstreetmap.org/export/embed.html?bbox=-75.32,2.88,-75.25,2.98&layer=mapnik" 
            className="w-full h-full object-cover opacity-60 mix-blend-multiply pointer-events-none"
            style={{ filter: 'grayscale(100%) contrast(1.1) brightness(1.1)' }}
          ></iframe>
        </div>
        
        {/* Puntos calientes del mapa */}
        <div className="absolute top-[35%] left-[30%] flex flex-col items-center group cursor-pointer">
          <div className="flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full animate-pulse absolute -z-10 opacity-70"></div>
          <div className="flex items-center justify-center w-10 h-10 bg-rose-500 text-white rounded-full shadow-lg border-2 border-white">
            <AlertTriangle size={18}/>
          </div>
          <div className="mt-3 bg-white px-4 py-2 rounded-xl shadow-md border border-slate-100 text-center opacity-0 group-hover:opacity-100 transition-opacity">
            <p className="text-sm font-bold">Limonar</p>
            <p className="text-xs text-rose-600 mt-0.5">Riesgo Alto (Infraestructura)</p>
          </div>
        </div>

        <div className="absolute top-[55%] left-[50%] flex flex-col items-center group cursor-pointer">
          <div className="flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full animate-pulse absolute -z-10 opacity-70"></div>
          <div className="flex items-center justify-center w-10 h-10 bg-amber-500 text-white rounded-full shadow-lg border-2 border-white">
            <Users size={18}/>
          </div>
          <div className="mt-3 bg-white px-4 py-2 rounded-xl shadow-md border border-slate-100 text-center opacity-0 group-hover:opacity-100 transition-opacity">
            <p className="text-sm font-bold">Caguán</p>
            <p className="text-xs text-amber-600 mt-0.5">Alerta Temprana (Residuos)</p>
          </div>
        </div>

        <div className="absolute top-[25%] left-[65%] flex flex-col items-center group cursor-pointer">
           <div className="flex items-center justify-center w-10 h-10 bg-[#1f6b55] text-white rounded-full shadow-lg border-2 border-white">
            <MapPin size={18}/>
          </div>
          <div className="mt-3 bg-white px-4 py-2 rounded-xl shadow-md border border-slate-100 text-center opacity-0 group-hover:opacity-100 transition-opacity">
            <p className="text-sm font-bold">Panorama</p>
            <p className="text-xs text-[#1f6b55] mt-0.5">Sentimiento Positivo (Alumbrado)</p>
          </div>
        </div>

        {/* Panel flotante de Leyenda */}
        <div className="absolute bottom-6 right-6 bg-white p-5 rounded-xl border border-slate-200 shadow-lg">
          <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-4">Nivel de Urgencia</p>
          <div className="space-y-3 text-sm font-medium text-slate-700">
            <div className="flex items-center gap-3"><span className="w-3 h-3 rounded-full bg-rose-500"></span> Intervención crítica</div>
            <div className="flex items-center gap-3"><span className="w-3 h-3 rounded-full bg-amber-500"></span> Atención requerida</div>
            <div className="flex items-center gap-3"><span className="w-3 h-3 rounded-full bg-[#1f6b55]"></span> Zona estable</div>
          </div>
        </div>
      </div>
    </div>
  );
}
