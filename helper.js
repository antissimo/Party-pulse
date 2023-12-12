export function Hide(id){
    var el = document.getElementById(id);
    if (el){
        el.style.visibility = 'hidden';
    }else{
        console.log(el);
    }
}
export function Show(id){
    var el = document.getElementById(id);
    if (el){
        el.style.visibility = 'visible';
    }else{
        console.log(el);
    }
}
export function CreateDiv(id,classList){
    var el = document.createElement('div');
    el.id = id;
   classList.forEach(element => {
    el.classList.add(element);
   });
    return el;
}
export function CreateInput(type,placeholder,id,required){
    var el =  document.createElement('input');
    el.type = type;
    el.placeholder = placeholder;
    el.id = id;
    el.required = required;
    return el;
}
export function CreateForm(id,classList){
    var el = document.createElement('form');
    el.id = id;
   classList.forEach(element => {
    el.classList.add(element);
   });
    return el;
}
export function CreateHeading(text){
    var el = document.createElement('h2');
    el.textContent = text;
    return el;
}
export function CreateButton(type,textContent){
    var el = document.createElement('button');
    el.type = type;
    el.textContent = textContent;
    return el;
}