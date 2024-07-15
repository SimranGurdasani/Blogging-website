import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestToastService {
  toasts:any=[]
  constructor(){

  }

  show(text:string,options:any={}){
    // insert
    this.toasts.push({text,...options})
  }

  remove(text:string){
    // nikalega
  }
}
