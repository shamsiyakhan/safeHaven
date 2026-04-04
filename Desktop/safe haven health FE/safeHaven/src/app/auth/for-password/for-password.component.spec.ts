import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForPasswordComponent } from './for-password.component';

describe('ForPasswordComponent', () => {
  let component: ForPasswordComponent;
  let fixture: ComponentFixture<ForPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
