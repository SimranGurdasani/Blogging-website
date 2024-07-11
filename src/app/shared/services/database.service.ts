import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  users:any=JSON.parse(localStorage.getItem("users") ?? "[]")
  userCount=this.users.length;


  loggedInUsers:any=JSON.parse(localStorage.getItem("loggedInUsers") ?? "[]")
  
}
