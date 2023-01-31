import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAssignComponent } from './work-assign.component';

describe('WorkAssignComponent', () => {
  let component: WorkAssignComponent;
  let fixture: ComponentFixture<WorkAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkAssignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
