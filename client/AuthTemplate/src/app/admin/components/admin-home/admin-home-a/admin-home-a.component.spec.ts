import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomeAComponent } from './admin-home-a.component';

describe('AdminHomeAComponent', () => {
  let component: AdminHomeAComponent;
  let fixture: ComponentFixture<AdminHomeAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminHomeAComponent]
    });
    fixture = TestBed.createComponent(AdminHomeAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
