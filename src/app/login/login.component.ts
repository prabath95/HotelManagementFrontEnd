import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from '../services/login/login.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:any;
  password:any;
  user:any;
  constructor(private loginService:LoginService,public router:Router) { }

  ngOnInit() {
  }
  login(){
    this.user = {
      "Email" : this.username,
      "password" : this.password
    }
    this.loginService.post("user/login",this.user)
    .subscribe((data)=>{
      if(data.success){
        if(data.role=="patient"){
        this.router.navigateByUrl('/patient');
        localStorage.setItem("user",data.user);
        window.location.reload();
        }else if (data.role=="doctor"){
          this.router.navigateByUrl('/doctor');
        }else if(data.role =="administrator"){
          this.router.navigateByUrl('/administrator');
        }
      }else {
        swal("Ops!","Invalid Login", "error");
      }
    },(err)=>{
      swal("Ops!", "Login Fail", "error");
    });
  }
}
