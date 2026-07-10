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
    image: '/cat-anillos.avif',
    description: '',
    waMessage: 'Hola Cuore, quería ver anillos disponibles'
  },
  {
    id: 'collares',
    name: 'Collares',
    image: 'https://res.cloudinary.com/dsdb4fibv/image/upload/v1783222065/cat_collares_rw1nay.jpg',
    description: '',
    waMessage: 'Hola Cuore, quería ver opciones de collares'
  },
  {
    id: 'pulseras',
    name: 'Pulseras',
    image: '/cat-pulseras.avif',
    description: '',
    waMessage: 'Hola Cuore, quería ver pulseras'
  },
  {
    id: 'aros',
    name: 'Aros',
    image: '/cat-aros.avif',
    description: '',
    waMessage: 'Hola Cuore, quería ver aros'
  },
  {
    id: 'relojes',
    name: 'Relojes',
    image: '/cat_relojes.png', // Fallback local ya que no se proveyó de Cloudinary
    description: '',
    waMessage: 'Hola Cuore, quería consultar por relojes'
  }
];
