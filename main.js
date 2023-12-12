import { Application } from "./application.js";
import {Show,Hide,CreateDiv,CreateInput,CreateForm, CreateHeading,CreateButton} from "./helper.js";
export function Register(){
    if (Application._registering)
        return;
    Application._registering = true;
    showRegisterForm();
    Hide('loginButton');
    Hide('registerButton');
}
export function Login(){
    Hide('loginButton');
    Hide('registerButton');
}
function showRegisterForm() {
    const registerForm = CreateForm('registerForm',['form']);
    const formContainer = CreateDiv('registerFormContainer',['form-container']);
    [CreateHeading('Register'),  CreateInput('text','Username','registerUsername',true),
    CreateInput('email','Email','registerEmail',true),CreateInput('password','Password','registerPassword',true),
    CreateButton('submit','Register')].forEach(el => registerForm.appendChild(el));

    formContainer.appendChild(registerForm);
    document.body.appendChild(formContainer);
    formContainer.classList.add('show');
}