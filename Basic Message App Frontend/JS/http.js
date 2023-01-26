class Http {
    baseURL = "http://localhost:8005/";
    
    async send(url, option={}) {
        const response = await fetch(`${this.baseURL}${url}`, option);
        const data = await response.json();
        return data;
      } 
    
  
    get(url) {
      return this.send(url);
    }
  
    post(url, data) {
      return this.send(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    }
  }
  
  export const http = new Http();