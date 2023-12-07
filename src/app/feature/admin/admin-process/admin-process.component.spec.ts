import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProcessComponent } from './admin-process.component';

describe('AdminProcessComponent', () => {
  let component: AdminProcessComponent;
  let fixture: ComponentFixture<AdminProcessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminProcessComponent]
    });
    fixture = TestBed.createComponent(AdminProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
