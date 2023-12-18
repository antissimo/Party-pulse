import { Register,Login } from "./LoginRegister.js";
import { Application } from "./application.js";
document.addEventListener('DOMContentLoaded', () => {
    Application.initialize();
    document.getElementById('registerButton').addEventListener("click",()=>(Register()));
    document.getElementById('loginButton').addEventListener("click",()=>(Login()));
});
