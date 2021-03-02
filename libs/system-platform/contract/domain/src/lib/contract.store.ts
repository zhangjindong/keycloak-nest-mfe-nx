import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Contract } from './contract.model';

export interface ContractState extends EntityState<Contract> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'contract',
  idKey: 'id',
})
export class ContractStore extends EntityStore<ContractState> {
  constructor() {
    super();
  }
}
