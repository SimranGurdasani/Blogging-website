import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/shared/services/database.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor(public databaseService:DatabaseService,private router:Router){

  }

  createForm=new FormGroup({
    title:new FormControl(),
    category:new FormControl(),
    description:new FormControl(),
    imgurl:new FormControl(),
    createdAt:new FormControl(),
    updatedAt:new FormControl()
  })

  submit(){
    let currentTime = new Date();
    this.createForm.patchValue({
      createdAt:currentTime,
      updatedAt:currentTime
    })
    console.log(this.createForm.value)
    console.log(this.createForm)
    let blogsData=this.generateDataModel()
    this.databaseService.blogs.push(blogsData)
    localStorage.setItem("blogs",JSON.stringify(this.databaseService.blogs))
    this.router.navigate(["/blogs"])
  }

  private generateDataModel(){
    return {
      blogid: ++this.databaseService.blogsCount,
      authorId:this.databaseService.loggedInUserId,
      noOfLikes:0,
      activeYN:1,
      ...this.createForm.value
    }
  }

  onSelectedFiles(event:any){
    // target is here input tag ne call kia hai so target is input
    // event.target mtlab event ek obj jiske andar target key hoti hai basically kaha se call hua
    let filename=event.target.files[0].name
    console.log(filename)
  
    this.createForm.patchValue({
      imgurl:filename
    })
}
}
