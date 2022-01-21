//  api kye `AIzaSyBe0kjrb_gLyp0mi_cTX8pK5QWCzta8FVk`;

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 23.684994, lng: 90.356331 },
    zoom: 7,
  });
}
