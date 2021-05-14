import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUserDetailComponent } from './form-user-detail.component';

describe('FormUserDetailComponent', () => {
  let component: FormUserDetailComponent;
  let fixture: ComponentFixture<FormUserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUserDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
