import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeersLayoutComponent } from './employeers-layout.component';

describe('EmployeersLayoutComponent', () => {
  let component: EmployeersLayoutComponent;
  let fixture: ComponentFixture<EmployeersLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeersLayoutComponent]
    });
    fixture = TestBed.createComponent(EmployeersLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
