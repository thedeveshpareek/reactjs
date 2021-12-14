
// it authorize the user from the spotify .
export const authEndpoint =
"https://accounts.spotify.com/authorize";
//if user authorize then it redirect the user to the page
// and then it redirect to the homepage 
const redirect_uri = "http://localhost:3000/";
// all of the above steps are using the api key 
const client_id = "cc5ae665ff5346c3b91b0652c0806826";
//scopes
const scopes =[
     "user-read-currently-playing",
     "user-read-recently-played",
     "user-read-playback-state",
     "user-top-read",
     "user-modify-playback-state",
 ];

export const getTokensfromResponse{
    
}

 export const loginUrl = `${authEndpoint}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;