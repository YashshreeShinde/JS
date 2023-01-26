import { http } from "./http.js";
import references from "./references.js";
import utility from "./utility.js";

export const approveLoginFn = async () => {
  const response = await http.get("user/pendingRequest");

  const pendingRequests = response.data;
  references.registered_people.style.display = "block";

  let elements = "";
  for (let request of pendingRequests) {
    const {username,userID}=request;
    let element = `                
    <div class="item">       
    <label for=${userID}>${username}</label>
    <div id=${userID}>
        <input type="checkbox" name="approved" id=${userID}  class="login-access">            
        <button  class="remove-btn"><img src="./images/x-button.png" alt="img" class="remove-img"></button>
    </div>
    </div>`;

    elements += element;
  }

  references.registered_people.innerHTML = `<h1>Grant Login Access</h1> ${elements}`;
  utility.checkboxValuesToArray("login-access", "id");
  utility.addActionOnRemoval("login-disapprove");
};

export const approveFn=async(id)=>
{
  try{
    const data={id:id,status:"approved"}
    const response=await http.put("auth",data);
   
    showMessage("success",response.data.message)
    }
    catch{
      showMessage("error","Approve operation was not successful")
    }
}