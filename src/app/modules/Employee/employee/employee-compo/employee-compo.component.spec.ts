import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCompoComponent } from './employee-compo.component';

describe('EmployeeCompoComponent', () => {
  let component: EmployeeCompoComponent;
  let fixture: ComponentFixture<EmployeeCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeCompoComponent ],
      imports: [HttpClientModule , RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
