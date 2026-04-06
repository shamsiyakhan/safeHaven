import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HprogressReportsComponent } from './hprogress-reports.component';

describe('HprogressReportsComponent', () => {
  let component: HprogressReportsComponent;
  let fixture: ComponentFixture<HprogressReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HprogressReportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HprogressReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
