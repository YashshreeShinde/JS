import references from "./references.js";
import utility from "./utility.js"

export const addSchoolToWorker=()=>
{
    references.select_field.addEventListener('click',()=>{      
    references.select_school_list.classList.toggle('show');
    references.down_arrow_icon.classList.toggle('rotate180');
})


const array=utility.checkboxValuesToArray("school-checkbox", "id")
const select_distributor=document.querySelector(".select-distributor")
references.add_schools_to_workerBtn.onClick(()=>{
    console.log(select_distributor.value)
    console.log(array)
});
}
        
addSchoolToWorker()
  