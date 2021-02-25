import { ID } from '@datorama/akita';

export interface Contract {
  id: ID;
}

export function createContract(params: Partial<Contract>) {
  return {

  } as Contract;
}
