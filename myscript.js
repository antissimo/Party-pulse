
import {GenerateInformation} from './ClubInfo.js';
/*import jsonData from "./data.json"

export function DohvatiKlubove()
{
    //let jsonString = '{"vanilla":{"lat":43.521815,"lon":16.4319775}, "kauri":{"lat":43.50833,"lon":16.47156},"305":{"lat":43.50961,"lon":16.43747},"velvet":{"lat":43.52229,"lon":16.43402},"moon":{"lat":43.50887,"lon":16.45111},"mind":{"lat":43.50292,"lon":16.42729},"vibe":{"lat":43.52345,"lon":16.43339},"baoli":{"lat":43.51044,"lon":16.45223}}';
    let jsonString = JSON.stringify(jsonData);
    // Parse the JSON string into a JavaScript object
    let parsedData = JSON.parse(jsonString);
}*/
// main.jss


function createClubCard(data, parentDiv) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("clubCard");

  const image = document.createElement("img");
  image.src = data.image;
  cardDiv.appendChild(image);

  const infoDiv = document.createElement("div");
  infoDiv.classList.add("info");

  const nameDiv = document.createElement("div");
  nameDiv.classList.add("name");
  nameDiv.textContent = data.name;

  infoDiv.appendChild(nameDiv);
  cardDiv.appendChild(infoDiv);
  cardDiv.addEventListener("click", () => {
    window.location.href = './ClubInfo.html';
    GenerateInformation(data);
  });
  return cardDiv;
}


const jsonString = `
{
  "clubs": [
    {
      "name": "Vanilla Club",
      "lat": 43.521815,
      "lon": 16.4319775,
      "image": "slikeProjekt/vanilla.jpg",
      "address": "Osmih mediteranskih igara 21",
      "desc": "Vanilla Club in Split is a popular nightlife destination with a central location. Modern ambiance, diverse music program, and contemporary design make it an attractive place to spend time. A rich selection of drinks, cocktails, and regular themed events add dynamism to the club experience. Visitors can expect a pleasant atmosphere, professional bartenders, and a variety of music genres. Vanilla Club often organizes special events, making each visit unique."
    },
    {
      "name": "Kauri Club",
      "lat": 43.50833,
      "lon": 16.47156,
      "image": "slikeProjekt/kauri.jpg",
      "address": "Poljička cesta 39",
      "desc": "Kauri Club, located at Poljička cesta 39, offers a vibrant nightlife experience. With its stylish setting and diverse music selection, Kauri Club attracts partygoers seeking an exciting night out. The club provides a lively atmosphere, and it is a great place to enjoy music, drinks, and good company."
    },
    {
      "name": "Club 305 A.D.",
      "lat": 43.50961,
      "lon": 16.43747,
      "image": "slikeProjekt/305.jpg",
      "address": "Trogirska ul. 7",
      "desc": "Club 305 A.D., situated at Trogirska ul. 7, is a dynamic nightlife venue in Split. Offering a unique ambiance and a variety of music genres, the club caters to different tastes. With its central location, Club 305 A.D. is an ideal spot for a night of entertainment, featuring energetic beats and a lively crowd."
    },
    {
      "name": "Velvet Club",
      "lat": 43.52229,
      "lon": 16.43402,
      "image": "slikeProjekt/velvet.jpg",
      "address": "Put Supavla 1A",
      "desc": "Velvet Club, located at Put Supavla 1A, is a stylish nightclub in Split known for its sophisticated atmosphere. The club boasts a modern design and a curated music selection, making it a popular choice for those seeking an upscale nightlife experience. With its central location, Velvet Club is a great destination for a night of class and entertainment."
    },
    {
      "name": "Carpe Diem",
      "lat": 43.6253,
      "lon": 16.73775,
      "image": "slikeProjekt/carpe-diem.jpg",
      "address": "D220 Trilj",
      "desc": "Carpe Diem, located at D220 Trilj, is a unique club offering a distinctive atmosphere. Known for its scenic location and diverse events, Carpe Diem provides a memorable nightlife experience. The club combines great music, creative cocktails, and a picturesque setting, making it a go-to destination for those looking for a one-of-a-kind night out."
    },
    {
      "name": "Ritz Club",
      "lat": 45.8015,
      "lon": 15.961235,
      "image": "slikeProjekt/ritz.jpg",
      "address": "Ul. Florijana Andrašeca 14",
      "desc": "Ritz Club, situated at Ul. Florijana Andrašeca 14, is a sophisticated nightlife venue in its own class. With a focus on elegance and a carefully curated atmosphere, Ritz Club offers an upscale experience. The club's central location and refined ambiance make it a premier choice for those seeking a night of sophistication, accompanied by excellent music and top-notch service."
    }
  ]
}

`;
const starContainer = document.createElement("div");
starContainer.classList.add("star-container");
for (let i = 0; i < 5; i++) {
  const starIcon = document.createElement("i");
  starIcon.classList.add("fa", "fa-star", "star-icon");
  starContainer.appendChild(starIcon);
}
const jsonData = JSON.parse(jsonString);
//var markers=[];

// Koristi funkciju za generiranje HTML-a i postavi ga u element s ID-om 'clubs-list'
//document.getElementById('clubs-list').innerHTML = generateHtmlFromJson(jsonData);

var markers = [];
function initMap() {
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
  for (let i = 0; i < 6; i++) {
    if (
      getDistanceFromLatLonInKm(
        myLat,
        myLon,
        jsonData.clubs[i].lat,
        jsonData.clubs[i].lon
      ) < myRadius
    ) {
     
      markers[i].setVisible(true);
    }
    let container = document.getElementById("myData");
    jsonData.clubs.forEach(club => {
      container.appendChild(createClubCard(club,container));
    });
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