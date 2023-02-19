const headers = new Headers();
headers.append("Content-Type", "application/json");

fetch("songs.json")
  .then(response => {
    return response.json();
  })
  .then(data => {
    const songs = data.songs;
    const grid = document.querySelector(".grid");

    songs.forEach(song => {
      const item = document.createElement("div");
      item.classList.add("grid-item");

      const title = document.createElement("h2");
      title.innerHTML = song.title;
      item.appendChild(title);

      const album = document.createElement("p");
      album.innerHTML = `Album: ${song.album}`;
      item.appendChild(album);

      const link = document.createElement("a");
      link.innerHTML = "Listen Now";
      link.href = song.link;
      item.appendChild(link);

      grid.appendChild(item);
    });

    const searchInput = document.getElementById("search-input");
    const songList = document.getElementById("song-list");

    searchInput.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const filteredSongs = songs.filter((song) => {
        return song.title.toLowerCase().includes(searchTerm);
      });

      songList.innerHTML = "";
      filteredSongs.forEach((song) => {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");

        const title = document.createElement("h2");
        title.innerText = song.title;
        gridItem.appendChild(title);

        const album = document.createElement("p");
        album.innerText = `Album: ${song.album}`;
        gridItem.appendChild(album);

        const link = document.createElement("a");
        link.innerText = "Listen Now";
        link.href = song.link;
        gridItem.appendChild(link);

        songList.appendChild(gridItem);
      });
    });
  })
  .catch(error => {
    console.error("An error occurred while fetching the JSON data:", error);
  });
