import { Component } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn!:boolean
  constructor(private databaseService:DatabaseService,private router:Router){

  }

  ngOnInit(){
    let currentUser=this.databaseService.loggedInUserId
    console.log(currentUser)
    if(+currentUser>0) this.isLoggedIn=true
    else{  this.isLoggedIn=false}
    console.log(this.isLoggedIn)
  }

  logoutUser(){

    let currentUser=this.databaseService.loggedInUserId
    console.log(currentUser)
    // this.databaseService.users.forEach((elem:any) =>console.log(elem))
    // let toBeRemovedIndex = this.databaseService.users.findIndex((elem:any)=>elem.id === +currentUser)
    // console.log(toBeRemovedIndex)
    localStorage.removeItem("loggedInUserId")
    this.databaseService.loggedInUserId='';
    this.router.navigate(['/login'])
  }
}
