import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobseekerLayoutComponent } from './jobseeker-layout.component';

describe('JobseekerLayoutComponent', () => {
  let component: JobseekerLayoutComponent;
  let fixture: ComponentFixture<JobseekerLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobseekerLayoutComponent]
    });
    fixture = TestBed.createComponent(JobseekerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
