import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomeBComponent } from './admin-home-b.component';

describe('AdminHomeBComponent', () => {
  let component: AdminHomeBComponent;
  let fixture: ComponentFixture<AdminHomeBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminHomeBComponent]
    });
    fixture = TestBed.createComponent(AdminHomeBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
