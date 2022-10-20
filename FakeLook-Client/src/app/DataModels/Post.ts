class Post{
    
    Content:string = "";
    PhotoUrl:string = "";
    Latitude:Number =0;
    Longitude:Number =0;
    constructor(public PostId:Number, public CreateDate:Date,
         public Title:string,public UserId:Number) {
            
         }
}
export default Post;