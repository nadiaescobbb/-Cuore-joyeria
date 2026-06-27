import { getImageUrl } from '../utils/image';

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
    image: getImageUrl('/anillos_adt5uu.jpg'),
    description: 'Plata 925, modelos para todos los días y para regalar.',
    waMessage: 'Hola Cuore, quería ver anillos disponibles'
  },
  {
    id: 'collares',
    name: 'Collares',
    image: getImageUrl('/collares_huxdp2.jpg'),
    description: 'Cadenas, dijes y piezas simples para usar seguido.',
    waMessage: 'Hola Cuore, quería ver opciones de collares'
  },
  {
    id: 'alianzas',
    name: 'Alianzas',
    image: getImageUrl('/alianzas_zawavf.avif'),
    description: 'A medida, con grabado, fabricadas en nuestro taller.',
    waMessage: 'Hola Cuore, quería cotizar alianzas'
  },
  {
    id: 'relojes',
    name: 'Relojes',
    image: getImageUrl('/relojescasio_lzx4kk.jpg'),
    description: 'Casio, clásicos, digitales y otras marcas. Mandanos captura del modelo.',
    waMessage: 'Hola Cuore, quería consultar por relojes'
  }
];
