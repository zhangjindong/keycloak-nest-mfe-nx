import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractService } from './contract.service';

@NgModule({
  imports: [CommonModule],
  providers:[ContractService]
})
export class SystemPlatformContractDomainModule {}
