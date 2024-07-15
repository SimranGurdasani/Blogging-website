import { Component } from '@angular/core';
import { TestToastService } from '../test-toast.service';

@Component({
  selector: 'app-test-toast-container',
  templateUrl: './test-toast-container.component.html',
  styleUrls: ['./test-toast-container.component.css']
})
export class TestToastContainerComponent {

  constructor(public toastService:TestToastService){

  }
}
