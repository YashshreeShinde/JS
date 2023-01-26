import { getClass } from "./utility.js"
import { removeSchoolsFn } from "./removeSchools.js"
import { add_school } from "./addSchool.js"
import { approveLoginFn } from "./approveLogin.js"
import { updateSchoolFn } from "./updateSchool.js"
import { viewSchools } from "./viewSchool.js"
import references from "./references.js";


// navigation mapping 
export const adminMapppingFn=()=>{
    const classMap={
        "Add School":{className:"add-school",viewFn:add_school},
        "View Schools":{className:"view-schools",viewFn:viewSchools},
        "Update School":{className:"update-school",viewFn:updateSchoolFn},
        "Remove School":{className:"remove-schools",viewFn:removeSchoolsFn},
        "Pending Requests":{className:"registered-people",viewFn:approveLoginFn},
        "Dashboard":{className:"distribution-status"}
        

    }

    // Removing the previously selected block and displaying the current selected block.
    let prevElement=getClass(".distribution-status")
    for(let navItem of references.nav_links)
    {
        navItem.addEventListener("click",async(e)=>{
            prevElement.style.display="none"
            let class1=classMap[navItem.innerHTML];  
            let selectedElement=getClass(class1.className);
            prevElement=selectedElement;   
            const viewFn=classMap[navItem.innerHTML].viewFn;
            selectedElement.style.display="block";
            await viewFn();
                

        })
    }
}





