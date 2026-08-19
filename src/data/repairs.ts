export interface RepairService {
  id: string;
  name: string;
}

export const repairServices: RepairService[] = [
  { id: 'joyas', name: 'Reparación de joyas en plata y oro' },
  { id: 'grabado', name: 'Grabado láser y personalización' }
];
