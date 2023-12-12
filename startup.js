import { Register,Login } from "./main.js";

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('registerButton').addEventListener("click",()=>(Register()));
    document.getElementById('loginButton').addEventListener("click",()=>(Login()));
});
