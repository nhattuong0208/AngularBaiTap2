import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danhmuc-sanpham',
  templateUrl: './danhmuc-sanpham.component.html',
  styleUrls: ['./danhmuc-sanpham.component.scss']
})
export class DanhmucSanphamComponent implements OnInit {

  public DSSP:any = [];
  dkmau:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  addSP(ma,ten,gia){
    this.DSSP.push({
      Ma:ma,
      Ten:ten,
      Gia:gia
    })
    console.log(this.DSSP);
  }

}
