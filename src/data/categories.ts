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
    description: 'De compromiso, cintillos, sellos y solitarios en oro y plata.',
    waMessage: 'Hola Cuore, quería ver anillos disponibles'
  },
  {
    id: 'collares',
    name: 'Collares',
    image: '/images/collares.jpg',
    description: 'Cadenas, dijes, medallas y cruces. Variedad de eslabones y grosores.',
    waMessage: 'Hola Cuore, quería ver opciones de collares'
  },
  {
    id: 'alianzas',
    name: 'Alianzas',
    image: '/images/alianzas.avif',
    description: 'Fabricación propia a medida. Oro 18k, plata 925 y combinadas.',
    waMessage: 'Hola Cuore, quería cotizar alianzas'
  },
  {
    id: 'relojes',
    name: 'Relojes',
    image: '/images/relojescasio.jpg',
    description: 'Más de 30 marcas, desde Casio y G-Shock hasta líneas exclusivas.',
    waMessage: 'Hola Cuore, quería consultar por relojes'
  }
];
