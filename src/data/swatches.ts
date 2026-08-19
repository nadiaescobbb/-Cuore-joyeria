export interface SwatchItem {
  id: string;
  label: string;
  title: string;
  description: string;
  bgColor: string;
  textColor?: string;
  labelColor?: string;
  colSpanClass: string;
}

export const swatchItems: SwatchItem[] = [
  {
    id: 'taller-propio',
    label: 'Taller propio',
    title: 'Cada pieza se hace acá.',
    description: 'Fabricamos y reparamos cada pieza acá, en Río Grande.',
    bgColor: 'bg-[#87602F]',
    textColor: 'text-[#FAF8F3]',
    labelColor: 'text-[#D8C79F]',
    colSpanClass: 'md:col-span-3',
  },
  {
    id: 'mas-de-40-anos',
    label: 'Más de 40 años',
    title: 'Todos los días, en Tierra del Fuego.',
    description: 'Trabajamos todos los días en Tierra del Fuego.',
    bgColor: 'bg-[#1F1A15]',
    textColor: 'text-[#FAF8F3]',
    labelColor: 'text-[#D8C79F]',
    colSpanClass: 'md:col-span-3',
  },
  {
    id: 'mayor-variedad',
    label: 'Mayor variedad',
    title: 'Más de 30 marcas.',
    description: 'Más de 30 marcas, stock que se renueva.',
    bgColor: 'bg-[#D8D5D0]',
    textColor: 'text-[#211D19]',
    labelColor: 'text-[#6F4B24]',
    colSpanClass: 'md:col-span-2',
  },
  {
    id: 'atencion-sin-apuro',
    label: 'Atención sin apuro',
    title: 'Tiempo para que decidas.',
    description: 'Nos dedicamos a que elijas y decidas.',
    bgColor: 'bg-[#C2AB80]',
    textColor: 'text-[#1F1A15]',
    labelColor: 'text-[#4A3219]',
    colSpanClass: 'md:col-span-2',
  },
  {
    id: 'garantia-propia',
    label: 'Garantía propia',
    title: 'Respondemos nosotros.',
    description: 'Respondemos nosotros mismos por cada pieza que reparamos o fabricamos.',
    bgColor: 'bg-[#4A3219]',
    textColor: 'text-[#FAF8F3]',
    labelColor: 'text-[#D8C79F]',
    colSpanClass: 'md:col-span-2',
  },
];
