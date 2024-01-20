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
    if (classList){
        classList.forEach(element => { el.classList.add(element); });
    }
   
    return el;
}
export function CreateInput(type,placeholder,id,required){
    var el =  document.createElement('input');
    el.type = type;
    el.placeholder = placeholder;
    el.id = id;
    el.required = required;
    el.pattern = Regex[type]; 
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
export function CreateTextLabel(text,type){
    var el = document.createElement(type);
    el.textContent = text;
    return el;
}
export function CreateButton(id,type,textContent){
    var el = document.createElement('button');
    el.type = type;
    el.textContent = textContent;
    return el;
}
export async function sha256(string) {
    const utf8 = new TextEncoder().encode(string);
  const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((bytes) => bytes.toString(16).padStart(2, '0'))
    .join('');
    console.log(hashHex);
  return hashHex;
}
export const typesOfUsers = {
    None: 0,
    Regular: 1,
    ClubAdmin: 2,
    SuperAdmin: 4
}
const Regex = {
    'email' : new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
    'password' : new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/)
}

export function Remove(id){
    var el = document.getElementById(id);
    if (!el)
        return;
    el.remove();
}
