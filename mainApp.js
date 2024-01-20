import { Application } from "./application.js";
import { CreateDiv } from "./helper.js";
export function GenerateMainApp(){
    var mainDiv = CreateDiv('MainAppContainer');

    var imgElement = document.createElement('img');
    imgElement.src = './slikeProjekt/Logo.png';
    mainDiv.appendChild(imgElement);
    document.body.style.backgroundColor = 'rgb(255, 255, 255)';
    imgElement.style.userSelect = 'none';
    imgElement.id = '#logo';
    imgElement.classList.add('pulsate');
    console.log(imgElement);
    document.body.appendChild(mainDiv);
}