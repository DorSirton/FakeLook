class Tag{
    Longitude:Number =0;
    Lantitude:Number=0;
    constructor(public TagId:Number, public UserId:Number,
         public CreateDate:Date, public TagName:string) {}
}
export default Tag;