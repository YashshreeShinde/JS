import utility from "./utility.js";
import references from "./references.js";
import { http } from "./http.js";

export const add_school=()=> {
 
  references.add.onClick(addMore);
  function addMore() {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Add subject";
    input.name = "subject";
    input.className = "subject";

    references.subjects.appendChild(input);
  }

  references.add_school_btn.onClick(async (e) => {
    e.preventDefault();

    const subjects = document.querySelectorAll(".subject");

    let subjectsArray = [];
    for (let subject of subjects) {
      subjectsArray.push(subject.value);
    }

    const data = utility.formData(references.add_school_form);
    data.subject = subjectsArray;
    console.log(data);
    try {
      const response = await http.post("school/addSchool", data);
      console.log(response);
      utility.showMessage("success", response.data.message);
      references.add_school_form.reset();
    } catch (e) {
      utility.showMessage("error", "Enter correct data");
    }
  });
  references.add_school_form.style.display="flex"
  references.add_school.style.display = "block";



}
