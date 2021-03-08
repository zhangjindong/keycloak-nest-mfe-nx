import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RmbPipe } from './pipe/rmb.pipe';
import { ThousandsPipe } from './pipe/thousands.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [RmbPipe, ThousandsPipe],
  exports: [RmbPipe, ThousandsPipe],
})
export class WebShareBaseModule {}
