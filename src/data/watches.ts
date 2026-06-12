export interface Watch {
  id: string;
  title: string;
  category: string;
  image: string;
  waMessage: string;
}

export const watches: Watch[] = [
  {
    id: 'edifice',
    title: 'Edifice',
    category: 'Línea de acero',
    image: '/images/edefice1.avif',
    waMessage: 'Hola Cuore, quería consultar por relojes Casio Edifice'
  },
  {
    id: 'vintage',
    title: 'Vintage',
    category: 'Clásicos retro',
    image: '/images/clasico.avif',
    waMessage: 'Hola Cuore, quería consultar por relojes retro/vintage'
  },
  {
    id: 'gshock',
    title: 'G-Shock',
    category: 'Alta resistencia',
    image: '/images/gshock.avif',
    waMessage: 'Hola Cuore, quería consultar por modelos G-Shock'
  }
];
