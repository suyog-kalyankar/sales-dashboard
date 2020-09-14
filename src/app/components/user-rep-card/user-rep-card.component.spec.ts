import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRepCardComponent } from './user-rep-card.component';

describe('UserRepCardComponent', () => {
  let component: UserRepCardComponent;
  let fixture: ComponentFixture<UserRepCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRepCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRepCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
