import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopDashboardComponent } from './pop-dashboard.component';

describe('PopDashboardComponent', () => {
  let component: PopDashboardComponent;
  let fixture: ComponentFixture<PopDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
