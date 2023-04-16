import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { async } from 'rxjs';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should set submitted to true',async () => {
    component.onSubmit();
    expect (component.onSubmit).toBeTruthy();
    
  }
);
it('Form should be invalid', async () => {
  component.loginForms.controls['email'].setValue('');
  component.loginForms.controls['password'].setValue('');
  expect(component.loginForms.invalid).toBeFalsy();
} );
it('Form should be valid', async () => {
  component.loginForms.controls['email'].setValue('');
  component.loginForms.controls['password'].setValue('');
  expect(component.loginForms.valid).toBeTruthy();
} );
})
