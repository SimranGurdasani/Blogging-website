import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ViewBlogsComponent } from './view-blogs/view-blogs.component';
import { ViewSingleBlogComponent } from './view-single-blog/view-single-blog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { BlogToastContainerComponent } from './blog-toast-container/blog-toast-container.component';



@NgModule({
  declarations: [
    CreateComponent,
    ViewBlogsComponent,
    ViewSingleBlogComponent,
    UpdateComponent,
    BlogToastContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule
  ],
  exports:[
    CreateComponent,
    ViewBlogsComponent,
    ViewSingleBlogComponent
  ]
})
export class BlogModule { }
