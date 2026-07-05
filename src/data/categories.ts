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
    image: '/cat_anillos.png',
    description: '',
    waMessage: 'Hola Cuore, quería ver anillos disponibles'
  },
  {
    id: 'collares',
    name: 'Collares',
    image: '/cat_collares.png',
    description: '',
    waMessage: 'Hola Cuore, quería ver opciones de collares'
  },
  {
    id: 'pulseras',
    name: 'Pulseras',
    image: '/cat_pulseras.png',
    description: '',
    waMessage: 'Hola Cuore, quería ver pulseras'
  },
  {
    id: 'aros',
    name: 'Aros',
    image: '/cat_aros.png',
    description: '',
    waMessage: 'Hola Cuore, quería ver aros'
  },
  {
    id: 'relojes',
    name: 'Relojes',
    image: '/cat_relojes.png',
    description: '',
    waMessage: 'Hola Cuore, quería consultar por relojes'
  }
];
