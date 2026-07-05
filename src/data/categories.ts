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
    image: 'https://res.cloudinary.com/dsdb4fibv/image/upload/v1783222060/cat_anillos_hwizp6.jpg',
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
    image: 'https://res.cloudinary.com/dsdb4fibv/image/upload/v1783222066/cat_pulseras_c4ffmn.jpg',
    description: '',
    waMessage: 'Hola Cuore, quería ver pulseras'
  },
  {
    id: 'aros',
    name: 'Aros',
    image: 'https://res.cloudinary.com/dsdb4fibv/image/upload/v1783222068/cat_aros_vaq2ln.jpg',
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
