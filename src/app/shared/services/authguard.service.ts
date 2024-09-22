import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(private router:Router) { }

  canActivate(){
    let userId = localStorage.getItem("loggedInUserId");

    if(!userId){
      // /login nhi likhna
      this.router.navigate(['login'])
      return false;
    }
    else{
      return true;
    }
  }
}
