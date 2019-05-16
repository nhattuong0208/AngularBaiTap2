import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaitapComponent } from './baitap.component';
import { DanhmucSanphamComponent } from './danhmuc-sanpham/danhmuc-sanpham.component';

@NgModule({
  declarations: [BaitapComponent, DanhmucSanphamComponent],
  exports:[BaitapComponent,DanhmucSanphamComponent],
  imports: [
    CommonModule
  ]
})
export class BaitapModule { }
