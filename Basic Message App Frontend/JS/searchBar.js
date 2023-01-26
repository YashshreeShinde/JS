import references from "./references.js";

export function searchUsers() {
  const user_name=document.querySelectorAll(".user-name")
  const user_list=document.querySelectorAll(".user-list")

  references.searchBtn.addEventListener("click", () => {

    let input=references.search_input.value.toLowerCase()
    for(let i=0;i<user_name.length;i++)
    {

        if(user_name[i].textContent.toLowerCase().includes(input))
        {
            user_list[i].style.display="flex"
            
        }
        else if(!user_name[i].textContent.toLowerCase().includes(input))
        {
            user_list[i].style.display="none"
        }

        
        
    }


  });
}
