
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentCompoComponent } from './department-compo.component';

describe('DepartmentCompoComponent', () => {
  let component: DepartmentCompoComponent;
  let fixture: ComponentFixture<DepartmentCompoComponent>;

  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientModule, FormsModule],
      declarations: [ DepartmentCompoComponent ],
       
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
