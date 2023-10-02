async function cors(event, url = "") {
  event.preventDefault();
  fetch(url, { method: "GET", mode: "cors" })
    .then((response) => {
      if (!response.ok) {
        // Handle non-successful responses (HTTP status code other than 200)
        throw new Error("Network response was not ok");
      }
      // Parse the response as JSON
      return response.json();
    })
    .then((data) => {
      // Handle the JSON data here
      document.getElementById("data-area").innerHTML = JSON.stringify(data);
    })
    .catch((error) => {
      // Handle errors here
      document.getElementById("data-area").innerHTML = error;
    });
}
