iniciarMap();

const mapDiv = document.getElementById("map");
let map;
const cordenada = { lat: -11.831044, lng:  -77.043606 };
var citymap = {
    Carabayllo: {
        center: {lat: -11.831044, lng: -77.043606},
        population: 900
        }
    };

async function iniciarMap() {
    map = await new google.maps.Map(mapDiv, {
        center: cordenada,
        scaleControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 14,
        });
    for (var city in citymap) {
            var cityCircle = new google.maps.Circle({
            strokeColor: '#0000FF',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#5882FA',
            fillOpacity: 0.35,
            map,
            center: citymap[city].center,
            radius: Math.sqrt(citymap[city].population) * 10
        });
    }
}
