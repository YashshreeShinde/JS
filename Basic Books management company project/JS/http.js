import utility from "./utility.js";

class Http {
    baseURL = "http://localhost:4600/";
    
    async send(url, option={}) {
      try{
        const response = await fetch(`${this.baseURL}${url}`, option);
        const data = await response.json();     
        
        if (!response.ok) {
          throw data.error;
        }
       
        return data;
      } 
  
    catch(error)
    {
      throw "Something went wrong"
    }
  }
    get(url){
      return this.send(url,{
        headers:{
          "Authorization":utility.getStore("token")
        }
      });
    }
  
    post(url, data) {
        return this.send(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization":utility.getStore("token")
          },
          body: JSON.stringify(data),
        });
      }

      delete(url) {
        return this.send(url, {
            method: 'DELETE',
            headers:{
            "Authorization":utility.getStore("token")
            }
        })
      }
       put(url,data)
       {
        return this.send(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization":utility.getStore("token")
          },
          body: JSON.stringify(data),
        });
        
       
    }
      
    }
  
  
  export const http = new Http();