import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhmucSanphamComponent } from './danhmuc-sanpham.component';

describe('DanhmucSanphamComponent', () => {
  let component: DanhmucSanphamComponent;
  let fixture: ComponentFixture<DanhmucSanphamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhmucSanphamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhmucSanphamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
