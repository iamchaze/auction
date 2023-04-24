import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidProductsComponent } from './bid-products.component';

describe('BidProductsComponent', () => {
  let component: BidProductsComponent;
  let fixture: ComponentFixture<BidProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BidProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
