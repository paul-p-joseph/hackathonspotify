async function getapi(){
    let fetchdata = await fetch("https://api.spotify.com/v1/users/{8829fb8e74ad4e51ab9b2cce518fd710}/playlists");
    let data = await fetchdata.json();
    console.log(data);
}

getapi();