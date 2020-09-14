import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesNavbarComponent } from './sales-navbar.component';

describe('SalesNavbarComponent', () => {
  let component: SalesNavbarComponent;
  let fixture: ComponentFixture<SalesNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
