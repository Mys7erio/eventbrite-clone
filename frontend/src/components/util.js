export function checkAuthentication() {
  const browserToken = localStorage.getItem("Token");
  const requestHeaders = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${browserToken}`,
    },
    body: JSON.stringify({Token: browserToken}),
  };

  return fetch("http://localhost:8000/verify/", requestHeaders)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data.token_valid ? true : false;
    });
}
