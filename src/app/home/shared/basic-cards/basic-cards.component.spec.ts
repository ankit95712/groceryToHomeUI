import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCardsComponent } from './basic-cards.component';

describe('BasicCardsComponent', () => {
  let component: BasicCardsComponent;
  let fixture: ComponentFixture<BasicCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicCardsComponent);
    component = fixture.componentInstance;
    component.basicCardDetails = {
      header: 'Orange',
      imageUrl: 'assets/download.jpg',
      quantity: 2,
      metrics: 'kg',
      marketPrice: 30,
      price: 20
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
