import references from "./references.js";
import { http } from "./http.js";


const getRestosName = async () => {
  const restoList = await http.get("auth/getAll");
  displayRestosList(restoList); 
};


export let selectedResto="";

function displayRestosList(restoList1) {
  let restoList=restoList1.data.name
  for (let restoName of restoList) {
      const listElement = `
      <img src="../CSS/5-stars.png" class="profile-photo" alt="image">
      <span class="resto-name" id=${restoName}>${restoName}</span>`;
      const resto = document.createElement("div");
      resto.classList.add("resto")
      resto.id=restoName;
      resto.innerHTML = listElement;
      references.restos.appendChild(resto);
      addAction(restoName,restoList)
  }
}

function addAction(restoName) {

  const selectedElement = document.getElementById(restoName);
  const selectedUser = document.querySelector(".selected-resto-name");
  const resto_rating=document.querySelector(".resto-rating")

    selectedElement.addEventListener("click", () => {
      resto_rating.classList.add("show")
      selectedUser.innerText = selectedElement.innerText;
      selectedResto=selectedElement.innerText;  
    
  });

}

export default { displayRestosList,  getRestosName };
