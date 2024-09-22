import { Component } from '@angular/core';
import { delay } from 'rxjs';
import { DatabaseService } from 'src/app/shared/services/database.service';
import { HelperService } from 'src/app/shared/services/helper.service';
import { TestToastService } from 'src/app/test-toast.service';

@Component({
  selector: 'app-view-blogs',
  templateUrl: './view-blogs.component.html',
  styleUrls: ['./view-blogs.component.css']
})
export class ViewBlogsComponent {
  blogs:any
  mysavedBlogDetails!:any
  constructor(private databaseService:DatabaseService,private helperService:HelperService,private testtoastService:TestToastService){

  }

  ngOnInit(){
    // console.log(this.databaseService.blogs)
    this.blogs=this.databaseService.blogs.filter((elem:any)=>elem.activeYN===1)
    console.log(this.blogs)
  }

  // ye below function helperService ka getCategoryFromCategoryId(2) taki direct helper service ka function html m call na krke ts ka help se yaha se helperservice ka function bula rhe
  getCategoryFromCategoryId(categoryId:any){
    const category = this.helperService.getCategoryFromCategoryId(+categoryId)
    // below way will also work
    // const category = this.databaseService.categories.find((elem:any)=>elem.id===+categoryId)
    return category?.name
  }

  // savedBlog(id:any){
  //   console.log(id)
  //   let tobeSaved = this.databaseService.blogs.find((elem:any)=>elem.blogid===+id)

  //   this.databaseService.savedBlogs.push(tobeSaved)
  //   localStorage.setItem("savedBlogs",JSON.stringify(this.databaseService.savedBlogs))

  // }
  getMySavedBlogs(id:any){
    let obj=this.databaseService.savedBlogsDetails
    // hasOwnProperty mtlab ki jo particular loggedInUserId h usne kuch save b kia h ya ni
    // case 1:{} i.e else m jyega
    // case 2:{
                // 1:[1,2,3],
                // 2:[1,2]
              //  }
    if(obj.hasOwnProperty(this.databaseService.loggedInUserId)){
      // ye niche key hai loggedinuserid jiska value se mtlab rkh rhe i.e arr chahiye kyuki usmei hame append krna h
      let arr=obj[this.databaseService.loggedInUserId]
      arr.push(id)
    }
    else{
      let arr=[id]
      // obj={
      //   this.databaseService.loggedInUserId:arr
      // }
      // ye above method nhi likh skte kyuki vo variable h so variables are only accessed using [] brackets and not by .
      obj[this.databaseService.loggedInUserId]=arr
     
      console.log(this.databaseService.savedBlogsDetails)
      
    }
    console.log(obj)
    localStorage.setItem("savedBlogsDetails",JSON.stringify(obj))
  }

  isSaved(id:any){
    let temp= this.databaseService.savedBlogsDetails
    [this.databaseService.loggedInUserId]?.filter((elem:any)=> elem === +id)
  return temp?.length>0;
  }

  removeSavedBlog(id:any){
    //to remove specific blog of specific user

    console.log(id)
    // below line is getting user k blogs
    let arr = this.databaseService.savedBlogsDetails[this.databaseService.loggedInUserId]
    console.log(arr)

    let toBeRemovedIndex = arr.findIndex((elem:any)=>elem === +id)
    console.log(toBeRemovedIndex)
    arr.splice(toBeRemovedIndex,1)
    console.log(arr);
    this.databaseService.savedBlogsDetails[this.databaseService.loggedInUserId]=arr
    console.log(this.databaseService.savedBlogsDetails)
    localStorage.setItem("savedBlogsDetails",JSON.stringify(this.databaseService.savedBlogsDetails))
  }

  isLiked(id:any){
    let temp= this.databaseService.likedBlogsDetails
    [this.databaseService.loggedInUserId]?.filter((elem:any)=> elem === +id)
  return temp?.length>0;
  }

  removeLikedBlog(id:any){
    //to remove specific blog of specific user
    console.log(id)
    // below line is getting user k blogs
    let arr = this.databaseService.likedBlogsDetails[this.databaseService.loggedInUserId]
    console.log(arr)

    let blog=this.databaseService.blogs.find((elem:any)=>elem.blogid===+id)
    blog.noOfLikes -=1
    console.log(blog)

    let toBeRemovedIndex = arr.findIndex((elem:any)=>elem === +id)
    console.log(toBeRemovedIndex)
    arr.splice(toBeRemovedIndex,1)
    console.log(arr);
    this.databaseService.likedBlogsDetails[this.databaseService.loggedInUserId]=arr
    console.log(this.databaseService.likedBlogsDetails)
    localStorage.setItem("likedBlogsDetails",JSON.stringify(this.databaseService.likedBlogsDetails))
    localStorage.setItem("blogs",JSON.stringify(this.databaseService.blogs))
  }

  getMyLikedBlogs(id:any){
    let obj=this.databaseService.likedBlogsDetails

    let blog=this.databaseService.blogs.find((elem:any)=>elem.blogid===+id)
    blog.noOfLikes +=1
    console.log(blog)
    // hasOwnProperty mtlab ki jo particular loggedInUserId h usne kuch save b kia h ya ni
    // case 1:{} i.e else m jyega
    // case 2:{
                // 1:[1,2,3],
                // 2:[1,2]
              //  }
    if(obj.hasOwnProperty(this.databaseService.loggedInUserId)){
      // ye niche key hai loggedinuserid jiska value se mtlab rkh rhe i.e arr chahiye kyuki usmei hame append krna h
      let arr=obj[this.databaseService.loggedInUserId]
      arr.push(id)
    }
    else{
      let arr=[id]
      // obj={
      //   this.databaseService.loggedInUserId:arr
      // }
      // ye above method nhi likh skte kyuki vo variable h so variables are only accessed using [] brackets and not by .
      obj[this.databaseService.loggedInUserId]=arr
     
      console.log(this.databaseService.likedBlogsDetails)
      
    }
    console.log(obj)
    localStorage.setItem("likedBlogsDetails",JSON.stringify(obj))
    localStorage.setItem("blogs",JSON.stringify(this.databaseService.blogs))
  }

  addToast(){
    console.log("saved")
    this.testtoastService.show("Liked Successfully",{className:'bg-success',delay:5000})
  }

  getImgUrl(name:any){
    return "assets/Images/"+name;
  }

}
