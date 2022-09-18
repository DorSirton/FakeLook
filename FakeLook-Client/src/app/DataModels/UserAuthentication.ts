import { StringifyOptions } from "querystring";

class User_Authentication{

    constructor(public UserId:Number, public Email:string, public Password:StringifyOptions) {

    }
}

export default User_Authentication;