import { deleteFn } from "./removeFunctionality.js";
import { approveFn } from "./approveLogin.js";

// Checkbox template
const checkboxValuesToArray=(element, attr)=> {
  let checkboxValuesArray = []
  let checkbox = document.querySelectorAll(`.${element}`);
  console.log(checkbox.length);


  for (let i = 0; i < checkbox.length; i++) {

    checkbox[i].addEventListener("click",
      function getNames() {

        let attribute = this.getAttribute(attr);
        if (this.checked) {
          checkboxValuesArray.push(attribute); 

          // This function would be made generic later(approveFn)
          approveFn(attribute)
          
        } else {
          let index = checkboxValuesArray.indexOf(attribute);
          if (index > -1) {
            checkboxValuesArray.splice(index, 1);
           
          }
        }
      })

  }
  return checkboxValuesArray;
}



//form data template
 const formData=(form)=>{
  const data={};

  for (let element of form.elements) {
      data[element.name] = element.value;
    }
  return data;
}


//Event listener Fn
HTMLElement.prototype.onClick=function(cb){
  this.addEventListener("click",cb)
}

//remove btn template
 const addActionOnRemoval=(type)=>{
  const removeBtn = document.querySelectorAll(".remove-btn");
  const removedArray=[]
  for (let i = 0; i < removeBtn.length; i++) {
    
      removeBtn[i].onClick( async(e) => {
        removedArray.push( e.target.parentElement.parentElement.id)
          await deleteFn(e.target.parentElement.parentElement.id,type,removeBtn[i])

      });
  }
  return removedArray;
  }
  

  

  //pop-up template
 const showMessage = (type, message) => {
    const { body } = document;
    const div = document.createElement('div');
    div.className = `message ${type}`;
    div.innerHTML = `<span>${message}</span>`
    body.appendChild(div);

    setTimeout(() => {
        div.remove();
    }, 3000)
}


//get class
export const getClass=(element)=>{
  const el=document.querySelector(`.${element}`)
  return el;
}

//navigate
const navigateTo = ((initialPage) => {
  let page = initialPage.split("/")[1];
  return (to) => {
      to = to.split("/")[1];
      const currentPage = document.getElementById(`${page}`);
      currentPage.style.display = "none";
      const nextPage = document.getElementById(`${to}`);
      nextPage.style.display = "flex";
      history.pushState({}, "", `/${to}`);
  } 
})("/login");

navigateTo("/login");


//store 
let store = {
  token: ""
};

//modify
const modifyStore = (key, payload) => {
  store={ ...store, [key]: payload };
  return store;
}

//get token
const getStore = (key) => {
  return store[key];
}

//page mapping
const ROLE_PAGE_MAP = {
  "0a85908d-6574-441f-8a88-a7d7ef4aa947": "/admin",
}


//display template
export function display(prevElement,currentElement)
{
    const prevEl=getClass(prevElement);
    const currEl=getClass(currentElement);
    prevEl.style.display="none";
    currEl.style.display="block"
}
export default
{
  ROLE_PAGE_MAP,
  getStore,
  modifyStore,
  navigateTo,
  showMessage,
  addActionOnRemoval,
  formData,
  checkboxValuesToArray


}