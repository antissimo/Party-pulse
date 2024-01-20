import { Application } from "./application.js";
import {Show,Hide,CreateDiv,CreateInput,CreateForm, CreateTextLabel,CreateButton,sha256, typesOfUsers,Remove} from "./helper.js";
import { User } from "./user.js";
import { GenerateMainApp } from "./mainApp.js";
import {RegisterUser} from "./repository.js"; 
export function Register(){
    if (Application._registering)
        return;
    Application._registering = true;
    showRegisterForm();
    Hide('loginButton');
    Hide('registerButton');
}
export function Login(){
    if (Application._loggingIn)
        return;
    Application._loggingIn = true;
    Hide('loginButton');
    Hide('registerButton');
    showLoginForm();
}
function showLoginForm(){
    const loginForm = CreateForm('loginForm',['form']);
    const formContainer = CreateDiv('loginFormContainer',['form-container']);
    const submitButton = CreateButton('submitButton','button','Login');
    submitButton.addEventListener('click',() => (loginSubmitButton_onClick()));

    [CreateTextLabel('Login','h2'),  
    CreateInput('text','Username','loginUsername',true),
    CreateInput('password','Password','loginPassword',true),
    submitButton].forEach(el => loginForm.appendChild(el));

    formContainer.appendChild(loginForm);
    document.body.appendChild(formContainer);
    formContainer.classList.add('show');
}
function showRegisterForm() {
    const registerForm = CreateForm('registerForm',['form']);
    const formContainer = CreateDiv('registerFormContainer',['form-container']);
    const submitButton = CreateButton('submitButton','button','Register');//type je prije bia submit
    submitButton.addEventListener('click',() => (registerSubmitButton_onClick()));
    [CreateTextLabel('Register','h2'),  
    CreateInput('text','Username','registerUsername',true),
    CreateInput('email','Email','registerEmail',true),
    CreateInput('password','Password','registerPassword',true),
    submitButton].forEach(el => registerForm.appendChild(el));
    formContainer.appendChild(registerForm);
    document.body.appendChild(formContainer);
    formContainer.classList.add('show');
}
function registerSubmitButton_onClick(){
    var password = document.getElementById('registerPassword').value;
    sha256(password).then(hash => {
            const data = {
                username : document.getElementById('registerUsername').value,
                email : document.getElementById('registerEmail').value,
                password : hash}

            RegisterUser(data); // Ode mora ic POST call
            Application._registering = false;
            Application._user = new User();
            Application._user.ConstructFromData(data);
            

            var form = document.getElementById('registerForm');
            form.childNodes.forEach(el => el.remove());
            form.remove();

            Remove('registerFormContainer');
            Remove('loginContainer');
            Remove('loginButton');
            Remove('registerButton');

            GenerateMainApp();
    });
    
}
function loginSubmitButton_onClick(){
    var password = document.getElementById('loginPassword').value;
    sha256(password).then(hash => {
        const data = {
            username : document.getElementById('loginUsername').value,
            password : hash}
        if(checkLoginCreds(data)){
            Application._loggingIn = false;
            var form = document.getElementById('loginForm');
            form.childNodes.forEach(el => el.remove());
            form.remove();

            Remove('loginFormContainer');
            Remove('loginContainer');
            Remove('loginButton');
            Remove('registerButton');
            GenerateMainApp();
        }else{
            alert("Krivo korisnicko ime ili lozinka");
        }
        
        
});
}

function checkLoginCreds(data){
    var user = Application._Users.find(u => u.username==data.username && u.password == data.password);
    if (user){
        Application._user = user;
        return true;
    }
    return false;
}