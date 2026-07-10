
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
    image: 'https://res.cloudinary.com/dsdb4fibv/image/upload/v1782508797/edefice1_gzc3qa.avif',
    waMessage: 'Hola Cuore, quería consultar por relojes Casio Edifice'
  },
  {
    id: 'vintage',
    title: 'Vintage',
    category: 'Clásicos retro',
    image: 'https://res.cloudinary.com/dsdb4fibv/image/upload/v1782508794/clasico_b9c6rp.avif',
    waMessage: 'Hola Cuore, quería consultar por relojes retro/vintage'
  },
  {
    id: 'gshock',
    title: 'G-Shock',
    category: 'Alta resistencia',
    image: 'https://res.cloudinary.com/dsdb4fibv/image/upload/v1782508796/gshock_twz9qg.avif',
    waMessage: 'Hola Cuore, quería consultar por modelos G-Shock'
  }
];
