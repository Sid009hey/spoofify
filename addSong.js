const form = document.getElementById("add-song-form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent form from submitting normally

  // get the form data
  const formData = new FormData(event.target);
  const title = formData.get("title");
  const album = formData.get("album");
  const link = formData.get("link");

  // send the new song data in an HTTP POST request to the JSON file
  fetch("songs.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: title,
      album: album,
      link: link
    })
  })
  .then(response => {
    if (response.ok) {
      // redirect to the home page if the new song was added successfully
      window.location.href = "index.html";
    } else {
      // display an error message if the request was not successful
      console.error("Failed to add song:", response.statusText);
    }
  })
  .catch(error => {
    console.error("An error occurred while adding the song:", error);
  });
});
