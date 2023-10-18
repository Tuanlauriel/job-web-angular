import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForEmployersJobsComponent } from './for-employers-jobs.component';

describe('ForEmployersJobsComponent', () => {
  let component: ForEmployersJobsComponent;
  let fixture: ComponentFixture<ForEmployersJobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForEmployersJobsComponent]
    });
    fixture = TestBed.createComponent(ForEmployersJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
