import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForEmployersLayoutComponent } from './for-employers-layout.component';

describe('ForEmployersLayoutComponent', () => {
  let component: ForEmployersLayoutComponent;
  let fixture: ComponentFixture<ForEmployersLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForEmployersLayoutComponent]
    });
    fixture = TestBed.createComponent(ForEmployersLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
