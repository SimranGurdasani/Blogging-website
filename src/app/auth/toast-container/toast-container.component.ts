import { Component } from '@angular/core';
import { TestToastService } from 'src/app/test-toast.service';

@Component({
  selector: 'app-toast-container',
  templateUrl: './toast-container.component.html',
  styleUrls: ['./toast-container.component.css']
})
export class ToastContainerComponent {
  constructor(public toastService:TestToastService){
    
  }
}
