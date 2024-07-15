import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/shared/services/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   isValidEmail=true
   isValidPassword=true
  constructor(private databaseService:DatabaseService,private router:Router){

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
          // console.log(user.email)
          this.isValidEmail=true
          this.isValidPassword=true
          localStorage.setItem("loggedInUsers",JSON.stringify(this.databaseService.users))
          this.router.navigate(['/home'])
        }
        else{
          this.isValidEmail=false
          this.isValidPassword=false
          break
        }
      }
    
    console.log(this.isValidEmail)
    // if(this.isValidEmail)
  }
}
