import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/shared/services/database.service';
import { TestToastService } from '../../test-toast.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   isValidEmail=true
   isValidPassword=true
   loggedInUserId:any
  showToast!: boolean;
  constructor(private databaseService:DatabaseService,private router:Router,private toastService:TestToastService){

  }
  
  ngOnInit(){
    this.loginForm.valueChanges.subscribe((value)=>{
      console.log(value)
      // this.login(loggedInUser)
    })
  }

  loginForm = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  })


  submit(){
    this.databaseService.userCount++;

    let loggedInUser = {
      ...this.loginForm.value,
      id:this.databaseService.userCount
    }

    this.databaseService.loggedInUsers.push(loggedInUser)

    
    this.login(loggedInUser)
  }

  login(loggedInUser:any){
    this.isValidEmail = true
    this.isValidPassword=true
   
    // console.log(loggedInUsersArray)
    let users =  JSON.parse(localStorage.getItem("users") ?? "[]")
    
      for(let user of users){
        if(user.email === loggedInUser.email && user.password === loggedInUser.password){
          this.isValidEmail=true
          this.isValidPassword=true
          localStorage.setItem("loggedInUsers",JSON.stringify(this.databaseService.loggedInUsers))
          this.loggedInUserId=user.id
          break;
        }
        else{
          this.isValidEmail=false
          this.isValidPassword=false
        }
      }

      if(this.isValidEmail && this.isValidPassword){
        this.showToast=true
      }

      if(this.isValidEmail && this.isValidPassword){
        this.databaseService.loggedInUserId=this.loggedInUserId
        localStorage.setItem("loggedInUserId",this.loggedInUserId.toString())
        this.router.navigate(["/home"])
      }

      this.toastService.show("Login successful",{classname:'bg-success',delay:5000})
      this.router.navigate(['/blogs'])
  }

  addToast(){
    this.toastService.show("Login Successful",{className:'bg-success',delay:5000})
  }
}
