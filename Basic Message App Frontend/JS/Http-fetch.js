
const baseURL = "http://localhost:8005/";

const postData = async (url, data) => {
  const res = fetch(`${baseURL}${url}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
  return res;
};


async function getData(url,method={}) {
  try {
    const res = await fetch(`${baseURL}${url}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error)
    throw error;
  }
}

export default { getData, baseURL,postData };
