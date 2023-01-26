import utility from "./utility.js";
import { http } from "./http.js";


export const deleteFn=async (id, type, element)=> {
 
  if (type === "login-disapprove") {
    try {
      const data = { id: id, status: "rejected" }
      const response = await http.put("auth", data);   
      element.parentElement.parentElement.style.display = "none"
      utility.showMessage("success", response.data.message)
    }
    catch {
      utility.showMessage("error", "Disapprove operation was not successful")
    }
  }
  else if (type === "remove-school") {
    try {
      const response = await http.delete(`school/${id}`);   
      element.parentElement.parentElement.style.display = "none"
      utility.showMessage("success", response.data.message)
    }
    catch {
      utility.showMessage("error", "Remove School operation was not successful")
    }
  }
}