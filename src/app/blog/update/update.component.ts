import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DatabaseService } from 'src/app/shared/services/database.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  // activatedRoute ek obj jo current route ki details return krta h isliye .params ka datatype observable h isliye .subscribe krte h
  id:any
  constructor(public databaseService:DatabaseService,private activatedRoute:ActivatedRoute,private router:Router){
    this.subscribeToParams()
  }

  updateForm = new FormGroup({
    title:new FormControl(),
    category:new FormControl(),
    description:new FormControl()
  })

  subscribeToParams(){
    // params ek observable return krta h i.e jo paas krenge vo return krta h so here hamne id paas ki thi toh vo aaya like route mei ',' krke 'blog.blogid' paas kia tha
    this.activatedRoute.params.subscribe((value)=>{
      console.log(value)
      this.id=value['id']

      // since find returns new obj 
      // idar niche member variable use krenge 'let blog' nhi cuz it is local variable
       let blog=this.databaseService.blogs.find((blog:any)=>blog.blogid===+this.id)
      console.log(blog)
      // ham uss particular blog ki id se uska details 'blogs' array m se fetch kr rhe
      // isliye 'id' se obj aane aane k baad setValues() kr
      // so vo promise k jaise .then() hogya like pehle obj fetch kr fir hi set kr
      this.updateFormValues(blog)
    })
  }

  updateFormValues(blog:any){
    this.updateForm.setValue({
      title:blog.title,
      category:blog.category,
      description:blog.description
    })
  }


  submit(){
    console.log(this.updateForm.value)
    // fetch index of the blog to be updated
    let index = this.databaseService.blogs.findIndex((elem:any)=>elem.blogid === +this.id)

    // fetch blog at the index we got
    let blog = this.databaseService.blogs[index]

    // update the blog
    blog = {
      // pehle us particular blog ki existing details lao 
      ...blog,
      // fir vo updatedform ki new values se override kro
      ...this.updateForm.value,
      updatedAt : new Date()
    }
    
    // update the blogs array at index we got
    this.databaseService.blogs[index]=blog;
    console.log(blog)
    console.log(this.databaseService.blogs)

    // update local storage
    localStorage.setItem("blogs",JSON.stringify(this.databaseService.blogs))

    // navigate to profile
    this.router.navigate(['/profile'])
    
  }

  

}
