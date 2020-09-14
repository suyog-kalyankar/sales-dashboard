import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesChartDetailsComponent } from './sales-chart-details.component';

describe('SalesChartDetailsComponent', () => {
  let component: SalesChartDetailsComponent;
  let fixture: ComponentFixture<SalesChartDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesChartDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesChartDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
