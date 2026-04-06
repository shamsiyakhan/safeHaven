import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkTasksComponent } from './homework-tasks.component';

describe('HomeworkTasksComponent', () => {
  let component: HomeworkTasksComponent;
  let fixture: ComponentFixture<HomeworkTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeworkTasksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeworkTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
