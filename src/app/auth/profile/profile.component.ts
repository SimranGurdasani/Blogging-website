import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatabaseService } from 'src/app/shared/services/database.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  myBlogs:any
  selectedBlog!:any
  userId:any
  currentUser:any
  activeId!:number
  savedBlogDetails!:any
  savedBlogs:any
  controlVisibility!:boolean
  constructor(private databaseService:DatabaseService,private modalService:NgbModal){

  }
  ngOnInit(){
    console.log(this.databaseService.loggedInUserId)
    // console.log(this.databaseService.blogs.)
    this.fetchUserDetails()
    this.getMyBlogs()
    this.getMySavedBlogs()

  }

  fetchUserDetails(){
    this.userId=this.databaseService.loggedInUserId
    console.log(this.databaseService.users)
    this.currentUser= this.databaseService.users.find((elem:any)=>elem.id===+(this.userId))
  }

  getMyBlogs(){
    this.myBlogs = this.databaseService.blogs.filter((elem:any)=>elem.authorId===this.databaseService.loggedInUserId && elem.activeYN===1)
    console.log(this.myBlogs)
  }

  // getMySavedBlogs(){
  //   this.savedBlogs=this.databaseService.savedBlogsDetails[this.databaseService.loggedInUserId]
  //   console.log(this.savedBlogs)
  //   this.mySavedBlogs=this.savedBlogs.map((blogId:any)=>{
  //     return this.databaseService.blogs.find((blog:any)=>blog.blogid === +blogId)
  //   });
  //   console.log(this.mySavedBlogs)
  // }

  getMySavedBlogs(){
    let blogIds = this.databaseService.savedBlogsDetails[this.databaseService.loggedInUserId]
    console.log(blogIds)
    this.savedBlogs = this.databaseService.blogs.filter((elem:any)=>blogIds.includes(elem.blogid) && elem.activeYN===1)
    console.log(this.savedBlogs)
  }

  refreshData(){
    this.getMyBlogs()
    this.getMySavedBlogs()
  }




  
  
  // deleteBlog(myBlog:any){
  //   // this.databaseService.blogs.activeYN=0
  //   this.selectedBlog=myBlog
  //   this.databaseService.

  // }
}
