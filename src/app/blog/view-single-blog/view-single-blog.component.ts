import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/shared/services/database.service';

@Component({
  selector: 'app-view-single-blog',
  templateUrl: './view-single-blog.component.html',
  styleUrls: ['./view-single-blog.component.css']
})
export class ViewSingleBlogComponent {
  blogId:any
  viewBlog:any
  author:any
  constructor(private activatedRoute:ActivatedRoute,private databaseService:DatabaseService ){
    // ye activatedRoute ek obj leta h here elem so elem.id na krke index signature denge i.e elm['id']
    this.activatedRoute.params.subscribe((elem)=>{
      this.blogId=elem['id'];
    })
  }

  ngOnInit(){
    this.getBlogsData()
  }

  getBlogsData(){
    console.log(this.blogId)
    this.viewBlog=this.databaseService.blogs.find((elem:any)=>elem.blogid===+this.blogId && elem.activeYN===1)
    this.author = this.databaseService.users.find((elem:any)=>elem.id===+this.viewBlog.authorId)
    console.log(this.author)
  }

  
  getImgUrl(name:any){
    return "assets/Images/"+name;
  }
  }
