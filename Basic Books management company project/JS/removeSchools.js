import references from "./references.js";
import { http } from "./http.js"
import utility from "./utility.js";


export const removeSchoolsFn=async()=>
 {

    const response = await http.get("school/getSchoolDatabase")
    const schoolsArray = response.data;

    let elements = ""
    for (let school of schoolsArray) 
    {
        const {schoolID,schoolName}=school;

        let element = `<div class="item">        
        <label for="${schoolID}">${schoolName}</label>
        <div id="${schoolID}">
        <button class="remove-btn"><img src="./images/x-button.png" alt="img" class="remove-img"></button>
        </div>
        </div>`
        elements += element

    }
    references.remove_schools.innerHTML = `<h1>Remove Schools</h1> ${elements}`;
    references.remove_schools.style.display = "block"
    utility.addActionOnRemoval("remove-school")
}

