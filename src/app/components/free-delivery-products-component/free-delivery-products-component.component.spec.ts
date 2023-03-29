import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeDeliveryProductsComponentComponent } from './free-delivery-products-component.component';

describe('FreeDeliveryProductsComponentComponent', () => {
  let component: FreeDeliveryProductsComponentComponent;
  let fixture: ComponentFixture<FreeDeliveryProductsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeDeliveryProductsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeDeliveryProductsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
