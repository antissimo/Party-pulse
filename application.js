import { User } from "./user.js";
import { GetClubs,GetUsers } from "./repository.js";
export  class Application{
    static _registering = false;
    static _loggingIn = false;
    static _user = new User();
    static _Users = null;
    static _Clubs = null;
    static _Events = null;
    static async initialize() {
        try {
            this._Clubs = await GetClubs();
            this._Users = await GetUsers();
        } catch (error) {
            console.error('Error initializing Application:', error);
        }
    }
}