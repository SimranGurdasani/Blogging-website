import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private databaseService:DatabaseService) 
  { 

  }

  getCategoryFromCategoryId(categoryId:any){
    // find returns 1 elem
    return this.databaseService.categories.find((elem)=>elem.id === categoryId)
  }
}
