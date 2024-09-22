import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { CreateComponent } from './blog/create/create.component';
import { ViewSingleBlogComponent } from './blog/view-single-blog/view-single-blog.component';
import { ViewBlogsComponent } from './blog/view-blogs/view-blogs.component';
import { HomeComponent } from './home/home.component';
import { ToastTestComponent } from './toast-test/toast-test.component';
import { UpdateComponent } from './blog/update/update.component';
import { AuthguardService } from './shared/services/authguard.service';


const routes: Routes = [
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    component:HomeComponent,
    // below is called child routing i.e hame jispe navbar,footer chahiye
    children:[
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'create',
        component:CreateComponent
      },
      {
        // update/:id ':id' is placeholder
        path:'update/:id',
        component:UpdateComponent
      },
      {
        path:'blogs/:id',
        component:ViewSingleBlogComponent
      },
      {
        path:'blogs',
        component:ViewBlogsComponent
      },
      {
        path:'toast-test',
        component:ToastTestComponent
      }
    ],
    // ye below hai dekhta hai ki bayi canActivate naam ka function h in AuthguardService and if checks if user is loggedin
    canActivate:[AuthguardService]
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
