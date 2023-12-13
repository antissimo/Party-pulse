import { User } from "./user.js";
export  class Application{
    static _registering = false;
    static _loggingIn = false;
    static _user = new User();
}