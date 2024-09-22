import { Component } from '@angular/core';
import { TestToastService } from 'src/app/test-toast.service';

@Component({
  selector: 'app-blog-toast-container',
  templateUrl: './blog-toast-container.component.html',
  styleUrls: ['./blog-toast-container.component.css']
})
export class BlogToastContainerComponent {
  constructor(public toastService:TestToastService){
    
  }
}
