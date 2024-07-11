import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/shared/services/database.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // this.registerForm.valueChanges.subscribe((value)=>{
  //   console.log(registerForm)
  // })
  isValidPassword = true
  isValidUsername = true

  constructor(private databaseService : DatabaseService){

  }

  ngOnInit(){
    this.registerForm.valueChanges.subscribe((value)=>{
    // console.log(this.registerForm)
    // console.log(value)
    this.subscribeToPasswordChange()
    this.subscribeToUsername()
    // console.log("chal rha")
    })
  }

  registerForm = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    confirmPassword: new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    dob: new FormControl('',[Validators.required]),
    bio:new FormControl('',[Validators.required])
  })

  getControl(key:any){
    return this.registerForm.get(key)
  }

  subscribeToUsername(){
    
    this.registerForm.get('username')?.valueChanges.subscribe((value:any)=>this.checkUsername(value))
    
  }

  checkUsername(value:any){
    // In json it is either key-value pair or an array ...so "" empty string ko parse nhi kr payega
    // this.isValidUsername
    this.isValidUsername = true
    let users = JSON.parse(localStorage.getItem("users") ?? "[]")
    console.log(users)
    for(let user of users){
      if(user.username === value){
        this.isValidUsername=false
        break
      }
    }
    console.log(this.isValidUsername)
  }

  subscribeToPasswordChange(){
    // dhono mei value change hoe toh vo message aaye isliye dhono ko subscribe kiya
    this.registerForm.get('confirmPassword')?.valueChanges.subscribe(()=>this.checkPassword())
    this.registerForm.get('password')?.valueChanges.subscribe(()=>this.checkPassword())
  }

  checkPassword(){
    let password = this.registerForm.get('password')?.value;
    let confirmPassword = this.registerForm.get('confirmPassword')?.value

    if(password !== confirmPassword){
      this.isValidPassword = false
    }
    else{
      this.isValidPassword = true
    }
  }

  submit(){
    console.log(this.registerForm.value)
    this.databaseService.userCount++;
    // ye data store krne k liye localstorage ke liye service ka help liya  aur ye user passkiya form ka value leke
    // localstorage is global variable
    // JSON.stringify(this.databaseService.users) converts obj to string
    // JSON.parse(this.databaseService.users) converts string to obj
    let user={
      // ... is called shallow copy ...it is used that if we have to pass all values to service
      ...this.registerForm.value,
      id:this.databaseService.userCount
    }
    // ye push kia pehle service m fir localstorage m dala
    this.databaseService.users.push(user)

    console.log(this.databaseService.users)
    // localstorage needs key and value both as string
    localStorage.setItem("users",JSON.stringify(this.databaseService.users))
    this.clearForm()
  }

  clearForm(){
    this.registerForm.reset({
      username:'',
      password:'',
      confirmPassword:'',
      email:'',
      dob:'',
      bio:''
    })
  }


  
}
