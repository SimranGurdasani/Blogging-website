export interface Post{
    id:number,
    title:string,
    description:string,
    tags:string[],
    categoryId:number,
    authorId:number,
    noOfLikes:number,
    createdAt:Date,
    updatedAt:Date,
    activeYN:boolean
}