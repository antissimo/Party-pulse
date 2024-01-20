/*import jsonData from "./data.json"

export function DohvatiKlubove()
{
    //let jsonString = '{"vanilla":{"lat":43.521815,"lon":16.4319775}, "kauri":{"lat":43.50833,"lon":16.47156},"305":{"lat":43.50961,"lon":16.43747},"velvet":{"lat":43.52229,"lon":16.43402},"moon":{"lat":43.50887,"lon":16.45111},"mind":{"lat":43.50292,"lon":16.42729},"vibe":{"lat":43.52345,"lon":16.43339},"baoli":{"lat":43.51044,"lon":16.45223}}';
    let jsonString = JSON.stringify(jsonData);
    // Parse the JSON string into a JavaScript object
    let parsedData = JSON.parse(jsonString);
}*/
// main.js



const jsonString = `
{
  "clubs": [
    {"name": "Vanilla Club","lat":43.521815,"lon":16.4319775, "image":"slikeProjekt/vanilla.jpg", "adresa":"Osmih mediteranskih igara 21"},
    {"name":"Kauri Club","lat":43.50833,"lon":16.47156, "image":"slikeProjekt/kauri.jpg", "adresa":"Poljička cesta 39"},
    {"name":"Club 305 A.D.","lat":43.50961,"lon":16.43747, "image":"slikeProjekt/305.jpg", "adresa":"Trogirska ul. 7"},
    {"name":"Velvet Club","lat":43.52229,"lon":16.43402, "image":"slikeProjekt/velvet.jpg", "adresa":"Put Supavla 1A"},
    {"name":"Carpe Diem","lat":43.6253, "lon": 16.73775, "image":"slikeProjekt/carpe-diem.jpg", "adresa":"D220 Trilj"},
    {"name":"Ritz Club","lat":45.8015, "lon": 15.961235, "image":"slikeProjekt/ritz.jpg", "adresa":"Ul. Florijana Andrašeca 14"}
  ]
}
`;

const starContainer = document.createElement('div');
starContainer.classList.add('star-container');
for (let i = 0; i < 5; i++) {
  const starIcon = document.createElement('i');
  starIcon.classList.add('fa', 'fa-star', 'star-icon');
  starContainer.appendChild(starIcon);
}

const jsonData = JSON.parse(jsonString);

function generateHtmlFromJson(jsonData) {
  let html = '<ul>';

  jsonData.clubs.forEach((club) => {
    html += `<li><strong>${club.name}</strong>: Lat ${club.lat}, Lon ${club.lon}</li>`;
  });

  html += '</ul>';

  return html;
}

//var markers=[];

// Koristi funkciju za generiranje HTML-a i postavi ga u element s ID-om 'clubs-list'
//document.getElementById('clubs-list').innerHTML = generateHtmlFromJson(jsonData);

var markers = [];
function initMap() 
  {
    const myLatlng = { lat:  43.508133, lng: 16.440193};
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: myLatlng,
    });
    // Create the initial InfoWindow.
    
    // let infoWindow = new google.maps.InfoWindow({
    //   content: "Click the map to get Lat/Lng!",
    //   position: myLatlng,
    // });

    markers[0] = new google.maps.Marker({
    position: { lat: 43.521815, lng: 16.4319775 },
    map: map,
    title: "Vanilla",
     });
    markers[0].setVisible(false);

    markers[1]  = new google.maps.Marker({
    position: { lat: 43.50833, lng: 16.47156 },
    map: map,
    title: "Kauri",
    });
    markers[1].setVisible(false);

    markers[2] = new google.maps.Marker({
    position: { lat: 43.50961, lng: 16.43747 },
    map: map,
    title: "305",
    });
    markers[2].setVisible(false);


    markers[3] = new google.maps.Marker({
    position: { lat: 43.52229, lng: 16.43402 },
    map: map,
    title: "Velvet",
    });
    markers[3].setVisible(false);


    markers[4] = new google.maps.Marker({
    position: { lat: 43.62510, lng:  16.73769 },
    map: map,
    title: "Carpe Diem",
    });
    markers[4].setVisible(false);

    markers[5] = new google.maps.Marker({
    position: { lat: 45.8015, lng:  15.961235 },
    map: map,
    title: "Ritz",
    });
    markers[5].setVisible(false);
  
  }
  
  window.initMap = initMap;


function getCurrentLocation() {
    // Check if the Geolocation API is supported by the browser
    if ('geolocation' in navigator) {
      // Get the current position
      navigator.geolocation.getCurrentPosition(
        function (position) {
          // Success callback
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
  
          // You can use the latitude and longitude values as needed
         // console.log('Latitude: ' + latitude + ', Longitude: ' + longitude);
         document.getElementById("demo").innerHTML = 'Latitude: ' + latitude + ', Longitude: ' + longitude;
        },
        function (error) {
          // Error callback
          console.error('Error getting location: ' + error.message);
        }
      );
    } else {
      // Geolocation is not supported
      console.error('Geolocation is not supported by your browser');
    }
  }

document.addEventListener('DOMContentLoaded', function () {
 // Add an event listener to the button with the id 'getLocationButton'
document.getElementById('pokazi').addEventListener('click', IsNearMe); });

document.addEventListener('DOMContentLoaded', function () {
// Add an event listener to the button with the id 'getLocationButton'
document.getElementById('pronadi').addEventListener('click', getCurrentLocation); });
   
function IsNearMe()
{
    const myLat = 43.6206134;
    const myLon = 16.73527;
    const myRadius = document.getElementById("udaljenost").value;
    let s = "<p style='font-size: 15px' style= 'text-align: center'>";

    for(let i = 0; i < 6; i++){
        if(getDistanceFromLatLonInKm(myLat, myLon, jsonData.clubs[i].lat, jsonData.clubs[i].lon) < myRadius){
        s += jsonData.clubs[i].name;
        s += ", " + jsonData.clubs[i].adresa;
        s += "&nbsp;<img width='35px' height='35px' class='center' src= " + "'" + jsonData.clubs[i].image + "'" + "\>";
        s += "<br>";
        markers[i].setVisible(true);
    }
    s += "<\p>";
    document.getElementById("myData").innerHTML = s;
}
}

  function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}
function deg2rad(deg) {
  return deg * (Math.PI/180)
}
  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        document.getElementById("demo").innerHTML = "User denied the request for Geolocation.";
        break;
      case error.POSITION_UNAVAILABLE:
        document.getElementById("demo").innerHTML = "Location information is unavailable.";
        break;
      case error.TIMEOUT:
        document.getElementById("demo").innerHTML = "The request to get user location timed out.";
        break;
      case error.UNKNOWN_ERROR:
        document.getElementById("demo").innerHTML = "An unknown error occurred.";
        break;
    }
  }
