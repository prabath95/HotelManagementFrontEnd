import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {
  fname:String;
  lname:String;
  speciality:String;
  hospital:any;
  age:Number;
  email:any;
  conEmail:any;
  gendar:String
  constructor() { }

  ngOnInit() {
  }
  onSelectionChange(value){
    this.gendar=value;
  }
  onSubmit(){

  }
}
