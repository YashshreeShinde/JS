import utility from "./utility.js";
import { http } from "./http.js";
import references from "./references.js";
import { adminMapppingFn } from "./adminNav.js";


// Toggling between login and signup page
function toggle1() {
  const forms = document.querySelector(".forms"),
    links = document.querySelectorAll(".link");
    links.forEach((link) => {
    link.onClick((event) => {
      event.preventDefault();
      forms.classList.toggle("show-signup");
    });
  });
}
toggle1();

// Login 
let loginCredentials = {};
let registrationCredentials = {};

references.loginBtn.onClick(async (event) => {
  try {
    event.preventDefault();
    loginCredentials = utility.formData(references.loginForm);
    const response = await http.post("auth/login", loginCredentials);
    utility.showMessage("success", "Logined Successfully");
    utility.modifyStore("token", response.data.token);
    utility.navigateTo(utility.ROLE_PAGE_MAP[response.data.role]);
    adminMapppingFn();
  } catch (error) {
    utility.showMessage("error", error.message);
  }
});


// Register
references.registerBtn.onClick(async(event) => { 
  try
  {
    event.preventDefault();
    registrationCredentials = utility.formData(references.registrationForm);
    const response=await http.post("auth/signup", registrationCredentials);
    if(response.data!==null)
    utility.showMessage("success", "Signup Successful"); 
    references.registrationForm.reset() 
  }
  catch(error)
  {
    utility.showMessage("error", "Please enter a strong password and valid email id");
  }
  })
