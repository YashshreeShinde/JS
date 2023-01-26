import http from "./Http-fetch.js";
import references from "./references.js";
import Messages from "./Messages.js";
import DisplayUsersList from "./Users.js";


// let isAuthorizedUser = false;


const data = {};
export let currentUser = "";

function submitform() {
  references.loginButton.addEventListener("click", (event) => {
    event.preventDefault();

    for (let element of form.elements) {
      data[element.name] = element.value;
    }

    http.postData("login", data).then(async (res) => {
      const data = await res.json();
      if (data.error === null) {
        references.modal_text.innerHTML = data.data.message;
        currentUser = references.name.value;
        references.login.style.display="none"
        references.mainWindow.style.display="flex"
        DisplayUsersList.getUsers();
        Messages.sendMessage();
      } else {
        references.modal_text.innerHTML = data.error.message;
      }
    });
  });
}


submitform();

