import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  users:any=JSON.parse(localStorage.getItem("users") ?? "[]")
  userCount=this.users.length;

  loggedInUsers:any=JSON.parse(localStorage.getItem("loggedInUsers") ?? "[]")
  loggedInUserId = localStorage.getItem("loggedInUserId") ?? '';

  blogs:any=JSON.parse(localStorage.getItem("blogs") ?? "[]")
  savedBlogsDetails:any=JSON.parse(localStorage.getItem("savedBlogsDetails") ?? "{}")
  likedBlogsDetails:any=JSON.parse(localStorage.getItem("likedBlogsDetails") ?? "{}")
  blogsCount=this.blogs.length;
  categories:Category[]=[
    {
      id:1,
      name:"Fashion",
      activeYN:true
    },
    {
      id:2,
      name:"Technology",
      activeYN:true
    },
    {
      id:3,
      name:"Design",
      activeYN:true
    }
  ]
  
}

// variable h toh input,hardcoded h toh sstring
