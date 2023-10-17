// server_URL = "https://example.com"
// const pos = window.location.href.toString()
// fetch(server_URL,{
//     Method: 'POST',
//     headers: {
//         accept: 'application.json',
//         'Content-Type': 'application/json'
//     },
//     Body: JSON.stringify({
//         url: pos,
//     })
// })


async function postJSON(data) {
    try {
      const response = await fetch("https://private-83eae8-trysimplejs.apiary-mock.com/questions", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", data);
    }
  }
  
//   const data = { username: "example" };
const data = {current_URL: window.location.href};
  postJSON(data);