// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
];

// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "Rock",
    "Rocket": "Rock",
    "Groot": "Pop",
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    const playlists = {};

    // Create playlists for each Guardian based on their preferred genre
    for (let guardian in guardians) {
        const preferredGenre = guardians[guardian];
        playlists[guardian] = songs.filter(song => song.genre === preferredGenre);
    }

    // Display the playlists
    const playlistDiv = document.getElementById('playlists');
    playlistDiv.innerHTML = '';  // Clear previous playlists

    for (let guardian in playlists) {
        const playlist = playlists[guardian];
        const playlistElement = document.createElement('div');
        playlistElement.className = 'playlist';

        const title = document.createElement('h2');
        title.textContent = `${guardian}'s Playlist`;
        playlistElement.appendChild(title);

        const ul = document.createElement('ul');
        playlist.forEach(song => {
            const li = document.createElement('li');
            li.className = 'song';

            const songTitle = document.createElement('span');
            songTitle.className = 'song-title';
            songTitle.textContent = song.title;

            const songArtist = document.createElement('span');
            songArtist.textContent = ` by ${song.artist}`;
            // Apply styles directly
            songArtist.style.color = '#fff'; // White color for artist
            songArtist.style.textDecoration = 'none'; // Remove underline

            li.appendChild(songTitle);
            li.appendChild(songArtist);
            ul.appendChild(li);
        });

        playlistElement.appendChild(ul);
        playlistDiv.appendChild(playlistElement);
    }
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);
