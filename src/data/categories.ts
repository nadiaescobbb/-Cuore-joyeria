export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
  waMessage: string;
}

export const categories: Category[] = [
  {
    id: 'anillos',
    name: 'Anillos',
    image: '/images/anillos.jpg',
    description: 'Plata 925, modelos para todos los días y para regalar.',
    waMessage: 'Hola Cuore, quería ver anillos disponibles'
  },
  {
    id: 'collares',
    name: 'Collares',
    image: '/images/collares.jpg',
    description: 'Cadenas, dijes y piezas simples para usar seguido.',
    waMessage: 'Hola Cuore, quería ver opciones de collares'
  },
  {
    id: 'alianzas',
    name: 'Alianzas',
    image: '/images/alianzas.avif',
    description: 'A medida, con grabado, fabricadas en nuestro taller.',
    waMessage: 'Hola Cuore, quería cotizar alianzas'
  },
  {
    id: 'relojes',
    name: 'Relojes',
    image: '/images/relojescasio.jpg',
    description: 'Casio, clásicos, digitales y otras marcas. Mandanos captura del modelo.',
    waMessage: 'Hola Cuore, quería consultar por relojes'
  }
];
