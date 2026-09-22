export const categories = [
  { name: 'Infraestructura vial', value: 284, color: '#b7f170' }, { name: 'Servicios públicos', value: 97, color: '#76b9ff' }, { name: 'Alumbrado', value: 68, color: '#f8c95d' }, { name: 'Residuos', value: 43, color: '#ee7171' }, { name: 'Seguridad', value: 39, color: '#b991ff' }, { name: 'Transporte', value: 25, color: '#8edec4' }
];
export const comments = ['En mi barrio…', 'La vía está…', 'No tenemos…', 'Necesitamos…', 'En el Limonar…', 'El alumbrado…', 'Por favor revisen…', 'Cuando llueve…', '¿Qué pasó con…', 'La calle 39…'];
export const modules = ['Publicaciones', 'Análisis de comentarios', 'Necesidades ciudadanas', 'Ubicaciones', 'Analítica', 'Seguimiento', 'Reportes', 'IA'];
export const weekly = [{day:'L', value:34},{day:'M', value:61},{day:'X', value:44},{day:'J', value:78},{day:'V', value:57},{day:'S', value:89},{day:'D', value:65}];

export type DemoComment = {
  id: string; author: string; text: string; time: string; responded: boolean;
  sentiment: 'Frustración' | 'Preocupación' | 'Satisfacción' | 'Conformismo' | 'Aprobación' | 'Indignación' | 'Esperanza' | 'Escepticismo'; 
  category: string; location: string;
  priority: 'Alta' | 'Media' | 'Baja'; confidence: number;
  impact_if_solved: string;
  impact_if_ignored: string;
};
// Datos simulados para demostrar el flujo político antes de conectar Meta Graph API.
export const demoComments: DemoComment[] = [
  { 
    id: 'c-1048', author: 'Andrea M.', time: 'Hace 12 min', responded: false, 
    text: 'Por favor arreglen la vía de mi barrio. Cuando llueve no se puede pasar y los niños no llegan al colegio.', 
    sentiment: 'Frustración', category: 'Infraestructura vial', location: 'Limonar · Calle 39', priority: 'Alta', confidence: 94,
    impact_if_solved: 'Alivia tensión comunitaria, genera compromiso y aumenta validación del gobierno local. Impacto electoral positivo directo en el sector.',
    impact_if_ignored: 'Riesgo de protesta barrial y viralización de la denuncia. Pérdida de credibilidad en el sector y posible aprovechamiento de la oposición.'
  },
  { 
    id: 'c-1049', author: 'Carlos R.', time: 'Hace 19 min', responded: false, 
    text: 'Gracias por atender el alumbrado del parque, ahora se siente mucho más seguro.', 
    sentiment: 'Satisfacción', category: 'Alumbrado', location: 'Panorama · Parque central', priority: 'Baja', confidence: 91,
    impact_if_solved: 'Consolida la aprobación de la gestión y promueve el sentido de pertenencia y vocería positiva orgánica.',
    impact_if_ignored: 'No aplica, acción ya validada positivamente.'
  },
  { 
    id: 'c-1050', author: 'Diana P.', time: 'Hace 31 min', responded: false, 
    text: '¿Cuándo inicia la recolección de residuos en el sector Caguán?', 
    sentiment: 'Preocupación', category: 'Residuos', location: 'Caguán', priority: 'Media', confidence: 86,
    impact_if_solved: 'Tranquiliza a la comunidad, demostrando control y capacidad de respuesta preventiva.',
    impact_if_ignored: 'Puede escalar rápidamente a "Indignación" si ocurre un problema de salud pública o visual afectando a múltiples vecinos.'
  },
  { 
    id: 'c-1051', author: 'Jorge A.', time: 'Hace 48 min', responded: true, 
    text: 'En la carrera 7 sigue el hueco desde hace meses. ¿No que venía el cambio?', 
    sentiment: 'Escepticismo', category: 'Infraestructura vial', location: 'Centro · Carrera 7', priority: 'Alta', confidence: 89,
    impact_if_solved: 'Desactiva críticos frecuentes. Convierte un detractor en un observador pasivo o neutraliza el ataque.',
    impact_if_ignored: 'Capitalizado por la oposición. Alta probabilidad de deterioro sostenido de la imagen institucional.'
  },
  { 
    id: 'c-1052', author: 'María C.', time: 'Hace 1 hora', responded: false, 
    text: 'Ayer vinieron a barrer la calle principal, quedó aceptable, ojalá dure.', 
    sentiment: 'Conformismo', category: 'Residuos', location: 'La Paz', priority: 'Baja', confidence: 82,
    impact_if_solved: 'Se sugiere mantener el ciclo de limpieza para elevar el sentimiento a "Satisfacción" plena.',
    impact_if_ignored: 'Pérdida de la ganancia marginal de imagen. Regreso rápido a escepticismo o crítica constante.'
  }
];
