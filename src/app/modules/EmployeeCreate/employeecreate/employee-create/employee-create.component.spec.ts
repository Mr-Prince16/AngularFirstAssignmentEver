import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCreateComponent } from './employee-create.component';
import { ActivatedRoute } from '@angular/router';


describe('EmployeeCreateComponent', () => {
  let component: EmployeeCreateComponent;
  let fixture: ComponentFixture<EmployeeCreateComponent>;
  // const fakeActivatedRoute = {
  //   snapshot: { data: { ... } }
  // } as ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeCreateComponent ],
      imports: [ReactiveFormsModule , HttpClientModule, RouterTestingModule],
      // providers: [ {provide: ActivatedRoute, useValue: fakeActivatedRoute} ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
