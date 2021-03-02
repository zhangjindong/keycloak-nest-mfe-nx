import { Injectable } from '@angular/core';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { ContractStore, ContractState } from './contract.store';

@Injectable()
export class ContractService extends NgEntityService<ContractState> {

  constructor(protected store: ContractStore) {
    super(store);
  }

}
