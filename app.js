// Album art mapping
const albumArt = {
    "Adrenaline": "adrenaline.jpg",
    "Around the Fur": "around_the_fur.jpg",
    "White Pony": "white_pony.jpg",
    "White Pony (Re-release)": "white_pony.jpg",
    "Deftones": "deftones.jpg",
    "Saturday Night Wrist": "saturday_night_wrist.jpg",
    "Diamond Eyes": "diamond_eyes.jpg",
    "Koi No Yokan": "koi_no_yokan.jpg",
    "Gore": "gore.jpg",
    "Ohms": "ohms.jpg",
    "B-Sides & Rarities": "bsides_rarities.jpg",
    "Covers": "covers.jpg",
    "Private Music": "private_music.jpg"
};

// Sample songs data
const songs = [
    { id: 1, title: "My Own Summer (Shove It)", album: "Around the Fur", year: 1997, votes: 0, comparisons: 0 },
    { id: 2, title: "Change (In the House of Flies)", album: "White Pony", year: 2000, votes: 0, comparisons: 0 },
    // Add more songs as needed
].map(song => ({
    ...song,
    albumArt: albumArt[song.album] || 'default.jpg'
}));

// DOM Elements
const songsContainer = document.getElementById('songs-container');

// Display random pair of songs
function displayRandomPair() {
    // Clear container
    songsContainer.innerHTML = '';
    
    // Get two random songs
    const song1 = songs[Math.floor(Math.random() * songs.length)];
    let song2;
    
    do {
        song2 = songs[Math.floor(Math.random() * songs.length)];
    } while (song1.id === song2.id);
    
    // Create song cards
    [song1, song2].forEach(song => {
        const card = document.createElement('div');
        card.className = 'song-card';
        card.innerHTML = `
            <div class="text-center">
                <img src="${song.albumArt}" alt="${song.album}" class="w-32 h-32 mx-auto mb-4 rounded">
                <h3 class="text-xl font-bold">${song.title}</h3>
                <p class="text-gray-400">${song.album} (${song.year})</p>
            </div>
        `;
        card.addEventListener('click', () => handleVote(song.id));
        songsContainer.appendChild(card);
    });
}

// Handle vote
function handleVote(songId) {
    console.log(`Voted for song ${songId}`);
    // Add your voting logic here
    displayRandomPair();
}

// Initialize the app
displayRandomPair();
