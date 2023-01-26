import references from "./references.js";

import Messages from "./Messages.js";
import { currentUser } from "./Login.js";
import { searchUsers } from "./searchBar.js";
import { http } from "./http.js";

export let multipleUsersArray=[]

const getUsers = async () => {
  const list = await http.get("login/getAllUsers");
  console.log(list)
  displayUserList(list);
  selectMultipleUsers();
  searchUsers()
};

export let selectedUserName = "";

function displayUserList(data) {
  for (let element in data) {
    if (data[element] != currentUser) 
    {
      const listElement = `<input type="checkbox" name="checkBox" class=${data[element]}>
      <img src="./ava_0017-192.webp" class="profile-photo" alt="image">
      <span class="user-name" id=${data[element]}>${data[element]}</span>`;
      const user_list = document.createElement("div");
      user_list.classList.add("user-list");
      user_list.innerHTML = listElement;
      references.users.appendChild(user_list);

      const selectedElement = document.getElementById(data[element]);
      let selectedUser = document.querySelector(".selected-user-name");

      // Event listener function forms a closure with outerFunction(displayUserList) so that it can access 
      //selectedElement and selectedUser inside event listener function
        selectedElement.addEventListener("click", (e) => {
        selectedUserName = selectedElement.innerText;
        selectedUser.innerText = selectedElement.innerText;

        Messages.setRecieverName(selectedUserName);
        Messages.getMessages();
      });
    }
  }
}

function selectMultipleUsers() {
  let checkbox = document.querySelectorAll("input[name=checkBox]");
  console.log(checkbox.length);
  
  for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener("click", getCheckedUserNames, false);
  }
}
let getCheckedUserNames = function () {
  let attribute = this.getAttribute("class");
  if (this.checked) {
    multipleUsersArray.push(attribute);
    console.log(multipleUsersArray);
  } else {
    let index = multipleUsersArray.indexOf(attribute);
    if (index > -1) {
      multipleUsersArray.splice(index, 1);
    }
  }
}

function Logout()
{
    references.users.innerHTML=""
    references.chat_input_message.value="";
    references.chatmessages.innerHTML=""
    references.search_input.value=""
    references.modal_text.innerHTML="User Logout Successfully"
    references.mainWindow.style.display="none";
    references.login.style.display="flex";  
 
}
references.logoutBtn.addEventListener(("click"),Logout)


export default { displayUserList, selectedUserName, getUsers };
