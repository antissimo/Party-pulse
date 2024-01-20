import { typesOfUsers} from "./helper.js";

export  class User{
    constructor(){
        this._id = 0;
        this._username = "";
        this.password = "";
        this.email = "";
        this.typeOfUser = typesOfUsers.None;
    }
    
    ConstructManual(id,username,password,email,typeOfUser){
        this._id = id;
        this._username = username;
        this.password = password;
        this.email = email;
        this.typeOfUser = typeOfUser;
    }
    ConstructFromData(data){
        this._id = 0;//Ode negdi GET sa API-a
        this._username = data["username"];
        this.password = data["password"];
        this.email = data["email"];
        this.typeOfUser = typesOfUsers.Regular;
    }
}