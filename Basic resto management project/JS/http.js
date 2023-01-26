class Http {
  baseURL = "http://localhost:8700/";
  jwtToken = "";
  data;
  async send(url, option = {}) {
    try {
      const response = await fetch(`${this.baseURL}${url}`, option);
      const data = await response.json();
    
      if (data.data) {
        this.jwtToken = data.data.access_token;
      }
      return data;
    } catch (error) {
      throw error;
    }
  }

  get(url) {
    return this.send(url, {
      method: "GET",
      headers: {
        authorization: this.jwtToken,
      },
    });
  }

  post(url, data) {
    if (url == "auth/login") {
      return this.send(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } else {
      return this.send(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${this.jwtToken}`,
        },
        body: JSON.stringify(data),
      });
    }
  }
}

export const http = new Http();
