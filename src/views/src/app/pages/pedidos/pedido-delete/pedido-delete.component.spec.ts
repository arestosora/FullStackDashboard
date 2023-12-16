import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoDeleteComponent } from './pedido-delete.component';

describe('PedidoDeleteComponent', () => {
  let component: PedidoDeleteComponent;
  let fixture: ComponentFixture<PedidoDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
