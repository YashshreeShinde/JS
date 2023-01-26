import { http } from "./http.js";
import references from "./references.js";

export const viewSchools = async () => {
  const response = await http.get("school/getSchoolDatabase");

  const schoolsArray = response.data;

  let elements = "";
  for (let school of schoolsArray) 
  {
    const { schoolID, schoolName, year, subjects, classes } = school;

    let element = `
    <section class="school-item" id=${schoolID}>
                    <img src="./images/school.png" alt="school" class="school-img">
                    <label class="school-details-label school-name">
                        ${schoolName}
                    </label>
               
            <section class="school-details"> 
            
                    <div class="school-details-label">
                        Year
                    </div>
                    <div class="school-year">${year}</div>
                  
                    <div class="school-details-label">
                        Subjects
                    </div>
            <div class="school-subjects">
                        <ol>`;
        for (let subject of subjects) {
            element += `<li>${subject.subject}</li>`;
        }
        element += `</ol>
                        </div>
                        <div class="school-details-label">
                            Classes
                        </div>
                        <div class="school-classes">
                            <ol>`;
        for (let class1 of classes) {
            element += `<li>class ${class1.className}</li>`;
        }
        element += `                 
                            </ol>
                        </div>
                        
                    </div>
                </section>  
            </section>  
                `;

        elements += element;
    }
    references.schools.innerHTML = `<h1>Schools</h1> ${elements}`;
    references.schools.style.display = "block";
    };
