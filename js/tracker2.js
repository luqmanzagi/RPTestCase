async function postJSON(data) {
  enc = encodeURIComponent(data)
    try {
      const response = await fetch("https://private-83eae8-trysimplejs.apiary-mock.com/questions"+"/"+enc, {
        method: "PUT", // or 'PUT'
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
const data = window.location.href;
//   const data = { username: "example" };
postJSON(data);