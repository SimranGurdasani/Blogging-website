import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { CreateComponent } from './blog/create/create.component';
import { ViewSingleBlogComponent } from './blog/view-single-blog/view-single-blog.component';
import { ViewBlogsComponent } from './blog/view-blogs/view-blogs.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'create',
    component:CreateComponent
  },
  // {
  //   path:'view-single-blog',
  //   component:ViewSingleBlogComponent
  // },
  {
    path:'blogs',
    component:ViewBlogsComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'**', //wildcard
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
