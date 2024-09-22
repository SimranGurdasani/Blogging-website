import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatabaseService } from 'src/app/shared/services/database.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  @Input()
  blogs:any;

  @Input()
  controlVisibility!:boolean

  // basically this refresh is like ghanti i.e child will ring and parent will listen that myBlogs needs to be updated whenver incase of user wants to del blog
  @Output()
  refresh = new EventEmitter()

  constructor(private databaseService:DatabaseService,private modalService:NgbModal){}
  open(content:any){
    this.modalService.open(content,{centered:true})
    .result.then(
      (result)=>{
        console.log('closed with result'+result)
        // deletion logic here
        // id se blog laaye fir uss blog ka activeYN ka 0 kia fir localstorage m updatekia
        const blog = this.databaseService.blogs.find((elem:any)=>elem.blogid===result)
        blog.activeYN=0;
        localStorage.setItem("blogs",JSON.stringify(this.databaseService.blogs))
        this.refreshData()
      },
      (reason)=>{
        console.log('closed with reason'+reason)
      }
    )
  }

  // getMyBlogs(){
  //   this.blogs = this.databaseService.blogs.filter((elem:any)=>elem.authorId===this.databaseService.loggedInUserId && elem.activeYN===1)
  //   console.log(this.blogs)
  // }

  // getMySavedBlogs(){
  //   // this.userId=this.databaseService.loggedInUserId
  //   this.savedBlogs=this.databaseService.savedBlogsDetails[this.databaseService.loggedInUserId]
  //   console.log(this.savedBlogs)
  //   this.blogs=this.savedBlogs.map((blogId:any)=>{
  //     return this.databaseService.blogs.find((blog:any)=>blog.blogid === +blogId)
  //   });
  //   console.log(this.blogs)
  // }

  refreshData(){
    this.refresh.emit()
  }

  getImgUrl(name:any){
    return "assets/Images/"+name;
  }

}
