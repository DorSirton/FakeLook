class Tag{
    Longitude:string ="";
    Lantitude:string="";
    constructor(public TagId:Number, public UserId:Number,
         public CreateDate:Date, public TagName:string) {}
}
export default Tag;