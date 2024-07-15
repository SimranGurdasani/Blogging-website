import { Component } from '@angular/core';
import { TestToastService } from '../test-toast.service';

@Component({
  selector: 'app-toast-test',
  templateUrl: './toast-test.component.html',
  styleUrls: ['./toast-test.component.css']
})
export class ToastTestComponent {
  constructor(private toastService:TestToastService) {

  }

  show=true
  show2=true
  toggleShow(){
    this.show=false
   }

   toggleShow2(){
    this.show2= !this.show2
   }

   addToast(){
    this.toastService.show("Login Successful",{className:'bg-success',delay:5000})
   }
}
