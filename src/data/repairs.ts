export interface RepairService {
  id: string;
  name: string;
}

export const repairServices: RepairService[] = [
  { id: 'reloj', name: 'Reparación de relojes' },
  { id: 'pilas', name: 'Cambio de pilas y mallas' },
  { id: 'joyas', name: 'Reparación de joyas' },
  { id: 'grabado', name: 'Grabado láser' }
];
