const apiKey = "YOUR_API_KEY"; // replace with your Last.fm API key
const username = "YOUR_USERNAME"; // replace with your Last.fm username
const limit = 5; // number of songs to fetch
const method = "user.getRecentTracks"; // Last.fm method to use

const apiUrl = `https://ws.audioscrobbler.com/2.0/?method=${method}&user=${username}&api_key=${apiKey}&limit=${limit}&format=json`;

// fetch data from Last.fm API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const tracks = data.recenttracks.track;
    const grid = document.querySelector(".grid");

    tracks.forEach(track => {
      const item = document.createElement("div");
      item.classList.add("grid-item");

      const title = document.createElement("h2");
      title.innerHTML = track.name;
      item.appendChild(title);

      const artist = document.createElement("p");
      artist.innerHTML = `Artist: ${track.artist["#text"]}`;
      item.appendChild(artist);

      const link = document.createElement("a");
      link.innerHTML = "Listen Now";
      link.href = track.url;
      item.appendChild(link);

      grid.appendChild(item);
    });
  })
  .catch(error => {
    console.error("An error occurred while fetching the data:", error);
  });
