import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ViewBlogsComponent } from './view-blogs/view-blogs.component';
import { ViewSingleBlogComponent } from './view-single-blog/view-single-blog.component';



@NgModule({
  declarations: [
    CreateComponent,
    ViewBlogsComponent,
    ViewSingleBlogComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CreateComponent,
    ViewBlogsComponent,
    ViewSingleBlogComponent
  ]
})
export class BlogModule { }
