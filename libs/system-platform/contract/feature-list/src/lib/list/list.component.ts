import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ContractQuery,
  ContractService,
} from '@mfe/system-platform/contract/domain';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  dataSet$ = this.contractQuery.selectAll();
  dataset = [];
  constructor(
    public contractQuery: ContractQuery,
    public contractService: ContractService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.contractService.get().subscribe();
    this.dataSet$.subscribe((data: any) => (this.dataset = data));
  }
  onFilterReset() {
    this.dataset = [];
    this.contractService.get().subscribe();
  }
  onEdit() {}
  onAdd() {}
}
