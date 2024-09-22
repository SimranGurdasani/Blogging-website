import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastContainerComponent } from './toast-container/toast-container.component';
import { RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';




@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    ToastContainerComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    RouterModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
    RegisterComponent
  ]
})
export class AuthModule { }
