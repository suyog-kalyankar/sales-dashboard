import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesRepCardsComponent } from './sales-rep-cards.component';

describe('SalesRepCardsComponent', () => {
  let component: SalesRepCardsComponent;
  let fixture: ComponentFixture<SalesRepCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesRepCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesRepCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
