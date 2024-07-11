export interface Comment{
    id:number,
    postId:number,
    userId:number,
    comment:string,
    createdAt:Date,
    activeYN:boolean
}