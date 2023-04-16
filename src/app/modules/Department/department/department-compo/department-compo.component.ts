import { Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DepartmentApiService } from './../../../../services/department-api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DepartmentModel } from './department.model';

@Component({
  selector: 'app-department-compo',
  templateUrl: './department-compo.component.html',
  styleUrls: ['./department-compo.component.css']
})
export class DepartmentCompoComponent implements OnInit {
  topics = ['Angular', 'React', 'View'];
  departmentForms !: FormGroup;
  departmentData!:any;
  departmentModelObj:DepartmentModel=new DepartmentModel();
  showAdd :boolean = true;
  showUpdate !:boolean;
  times = ['morning', 'evening'];
  id !: number;
  departmentDetails !:any;
  imageSrc: string = '';

  constructor(private formbuilder: FormBuilder, private departmentapi: DepartmentApiService, private auth: AuthService, private route:Router) { }

  ngOnInit(): void {
    this.departmentForms = this.formbuilder.group({
      departmentName: ['',[Validators.required,Validators.minLength(3)]],
      departmentNumber: [ 0 ,[Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(4)]],
      topic:['',[Validators.required]],
      time:['',[Validators.required]],
      image:['']
      
    })
  //   this.activeRoute.params.subscribe(data=>{
  //     this.id=data["id"]
  //     if(this.id === this.idsearch){
  //     this.getDepartmentById(this.id);
  //     }
  // })
    this.getAllDepartment();
    // this.getDepartmentById(this.id);
}
getDepartmentById(id : any){
this.departmentapi.getdepartmentById(id)
.subscribe((res :any)=>{
  this.departmentData = res;
  console.log(res);
})
}
  get departmentName(){
   return this.departmentForms.get('departmentName')
  }
  get departmentNumber(){
    return this.departmentForms.get('departmentNumber')
   }
   get topic(){
    return this.departmentForms.get('topic')
   }
   get time(){
    return this.departmentForms.get('time')
   }


  clickAddDepartment(){
    this.departmentForms.reset() ;
    this.departmentModelObj =new DepartmentModel();

    this.showAdd = true;
    this.showUpdate = false;

  }
  postDepartmentDetails(){
    this.departmentModelObj.image = this.imageSrc;
    this.departmentModelObj.id = this.id;
    this.departmentDetails=this.departmentModelObj.id;
    this.departmentModelObj.departmentName = this .departmentForms.value.departmentName;
    this.departmentModelObj.departmentNumber = this .departmentForms.value.departmentNumber;
    this.departmentModelObj.topic = this .departmentForms.value.topic;
    this.departmentModelObj.time =this .departmentForms.value.time;
    this.departmentapi.postDepartment(this. departmentModelObj)
    .subscribe((res: any)=>{
      console.log(JSON.stringify(res));
      let ref = document.getElementById('cancel')
      ref?.click();
      this.departmentForms.reset();
      this.getAllDepartment();
    },)
  }
  getAllDepartment(){
    this.departmentapi.getDepartment()
    .subscribe((res: any)=>{
      this.departmentData=res;
      // console.log(JSON.stringify(res));

    })
  }
  deleteDepartment(row : any){
    this.departmentapi.deleteDepartment(row.id)
    .subscribe((res: any)=>{
      this.getAllDepartment();
    })
  }
  onEdit(row : any){
    this.showUpdate = true;
    this.showAdd = false;
    this.departmentModelObj.id = row.id;
    this.departmentForms.controls['departmentName'].setValue(row.departmentName);
    this.departmentForms.controls['departmentNumber'].setValue(row.departmentNumber);
    this.departmentForms.controls['time'].setValue(row.time);
    this.departmentForms.controls['topic'].setValue(row.topic);
    this.departmentForms.controls['image'].setValue(row.imageSrc);
   
  }
updateDepartmentDetails(){
  this.departmentModelObj.departmentName=this.departmentForms.value.departmentName;
  this.departmentModelObj.departmentNumber=this.departmentForms.value.departmentNumber;
  this.departmentModelObj.time=this.departmentForms.value.time;
  this.departmentModelObj.topic=this.departmentForms.value.topic;
  this.departmentModelObj.image = this.imageSrc;
  this.departmentapi.updateDepartment(this.departmentModelObj,this.departmentModelObj.id)
  .subscribe((res: any)=>{
    let ref = document.getElementById('cancel')
    ref?.click();
      this.departmentForms.reset();
      this.departmentModelObj=new DepartmentModel();


      this.getAllDepartment();
     
  })
}
logout(): void{
  this.auth.logout();
    }
    routeDepartment(){
      this.route.navigate(['dashboard'])

    }
    routeEmployee(){
      this.route.navigate(['employee'])
    }
searchDepartment(id: any){
  this.departmentapi.getdepartmentById(id)
  .subscribe((res:any) =>{
    this.departmentData=[res];
  })
}
 

handleInputChange(e :any) {
  var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
  var pattern = /image-*/;
  var reader = new FileReader();
  if (!file.type.match(pattern)) {
    alert('invalid format');
    return;
  }
  reader.onload = this._handleReaderLoaded.bind(this);
  reader.readAsDataURL(file);
}
_handleReaderLoaded(e :any) {
  let reader = e.target;
  this.imageSrc = reader.result;
  console.log(this.imageSrc)
}
}