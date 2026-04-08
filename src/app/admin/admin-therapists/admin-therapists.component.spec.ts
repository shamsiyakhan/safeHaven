import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTherapistsComponent } from './admin-therapists.component';

describe('AdminTherapistsComponent', () => {
  let component: AdminTherapistsComponent;
  let fixture: ComponentFixture<AdminTherapistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTherapistsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTherapistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
