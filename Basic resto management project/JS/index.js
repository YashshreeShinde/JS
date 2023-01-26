import { http } from "./http.js";
import references from "./references.js";
import Restos from "./RestoListDisplay.js";
import { submitUserRating } from "./PostRatings.js";
import { getRatingsData } from "./DisplayRatings.js";

const data = {};
export let CURRENT_USER = "";
export let USER_ROLE = "";
export let NAME_OF_MANAGER_RESTO = "";

function submitLoginform() {
  references.loginButton.addEventListener("click", (event) => {
    event.preventDefault();

    for (let element of form.elements) {
      data[element.name] = element.value;
    }

    http.post("auth/login", data).then((response) => {
     
      if (response.error === null) {
        CURRENT_USER = references.loginName.value;
        USER_ROLE = response.data.role;

        if (USER_ROLE == "admin") {
          references.login.classList.toggle("hide");
          references.staff_container.classList.toggle("show");
          getRatingsData();
        } else if (USER_ROLE == "manager") {
          references.login.classList.toggle("hide");
          references.staff_container.classList.toggle("show");
          NAME_OF_MANAGER_RESTO = response.data.restaurant;
          getRatingsData();
        }
      } else {
        references.modal_text.innerHTML = response.error.message;
      }
    });
  });

  references.rating_container_displayBtn.addEventListener("click", (event) => {
    event.preventDefault();
    references.login.classList.toggle("hide");
    references.mainWindow.classList.toggle("show");
    Restos.getRestosName();
  });
}

submitLoginform();
submitUserRating();
