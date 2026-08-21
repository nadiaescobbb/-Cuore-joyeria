export interface SwatchItem {
  id: string;
  label: string;
  title: string;
  description: string;
  bgColor: string;
  textColor?: string;
  labelColor?: string;
  borderColor?: string;
  colSpanClass: string;
}

export const swatchItems: SwatchItem[] = [
  {
    id: 'taller-propio',
    label: 'Taller propio',
    title: 'Cada pieza se hace acá.',
    description: 'Fabricamos y reparamos cada pieza acá, en Río Grande.',
    bgColor: 'bg-warm-900',
    textColor: 'text-warm-100',
    labelColor: 'text-brand-gold-light',
    borderColor: 'border-transparent',
    colSpanClass: 'md:col-span-3',
  },
  {
    id: 'mas-de-40-anos',
    label: 'Más de 40 años',
    title: 'Todos los días, en Tierra del Fuego.',
    description: 'Trabajamos todos los días en Tierra del Fuego.',
    bgColor: 'bg-warm-200',
    textColor: 'text-warm-900',
    labelColor: 'text-brand-gold',
    borderColor: 'border-warm-300',
    colSpanClass: 'md:col-span-3',
  },
  {
    id: 'mayor-variedad',
    label: 'Mayor variedad',
    title: 'Más de 30 marcas.',
    description: 'Más de 30 marcas, stock que se renueva.',
    bgColor: 'bg-warm-200',
    textColor: 'text-warm-900',
    labelColor: 'text-brand-gold',
    borderColor: 'border-warm-300',
    colSpanClass: 'md:col-span-2',
  },
  {
    id: 'atencion-sin-apuro',
    label: 'Atención sin apuro',
    title: 'Tiempo para que decidas.',
    description: 'Nos dedicamos a que elijas y decidas.',
    bgColor: 'bg-warm-200',
    textColor: 'text-warm-900',
    labelColor: 'text-brand-gold',
    borderColor: 'border-warm-300',
    colSpanClass: 'md:col-span-2',
  },
  {
    id: 'garantia-propia',
    label: 'Garantía propia',
    title: 'Respondemos nosotros.',
    description: 'Respondemos nosotros mismos por cada pieza que reparamos o fabricamos.',
    bgColor: 'bg-warm-200',
    textColor: 'text-warm-900',
    labelColor: 'text-brand-gold',
    borderColor: 'border-warm-300',
    colSpanClass: 'md:col-span-2',
  },
];
