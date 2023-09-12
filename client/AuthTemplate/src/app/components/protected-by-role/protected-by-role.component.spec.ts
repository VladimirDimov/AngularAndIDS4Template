import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectedByRoleComponent } from './protected-by-role.component';

describe('ProtectedByRoleComponent', () => {
  let component: ProtectedByRoleComponent;
  let fixture: ComponentFixture<ProtectedByRoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtectedByRoleComponent]
    });
    fixture = TestBed.createComponent(ProtectedByRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
