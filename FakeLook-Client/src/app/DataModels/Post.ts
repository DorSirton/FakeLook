class Post{
    
    Content:string = "";
    PhotoUrl:string = "";
    Latitude:string ="";
    Longitude:string ="";
    constructor(public PostId:Number, public CreateDate:Date,
         public Title:string,public UserId:string) {
            
         }
}
export default Post;