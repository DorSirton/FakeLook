class User {
    PhoneNumber:string="";
    LastConnection:Date= new Date();
    RegisterDate:Date = new Date();
    ProfilePicture:string = "";

    constructor(public UserId:Number,public Email:string, public UserName:string,
        public FirstName:string, public LastName:string,public BirthDate:Date,
        public Gender:Boolean, public Country:string, public City:string) {

    }
}
export default User;