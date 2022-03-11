
// The value for 'accessToken' begins with 'pk...'
    mapboxgl.accessToken = 'pk.eyJ1IjoiamxpNDciLCJhIjoiY2wwMjc5dmRqMHE5eDNvcnlwd29zY3EyayJ9.zcqlSyi6nKyEO9JU36hy1w'; 
    const map = new mapboxgl.Map({
      container: 'map',
      // Replace YOUR_STYLE_URL with your style URL.
      style: 'mapbox://styles/jli47/cl02skpqv00fo15n7t28il3ak', 
      center: [49.220, -122.835],
      zoom: 9.24
    });

    // Code from the next step will go here.

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}