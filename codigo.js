
const mapDiv = document.getElementById("map");
let map;
const cordenada = { lat: -11.831044, lng:  -77.043606 };
var citymap = {
    Carabayllo: {
        center: {lat: -11.831044, lng: -77.043606},
        population: 200
    }
    };

async function iniciarMap() {
    map = await new google.maps.Map(mapDiv, {
        center: cordenada,
        scaleControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 15,
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

iniciarMap();

const form = document.getElementById("form");

const nombre = document.getElementById("nombre");
const celular = document.getElementById("celular");
const correo = document.getElementById("correo");
const capitalPropio = document.getElementById("capitalPropio");
const creditoAprobado = document.getElementById("creditoAprobado");
const loMasPronto = document.getElementById("loMasPronto");
const enUnMes = document.getElementById("enUnMes");
const NoTengoDinero = document.getElementById("NoTengoDinero");
const poLaUbicacion = document.getElementById("poLaUbicacion");
const porElPrecio = document.getElementById("porElPrecio");
const ideal = document.getElementById("ideal");
const conoceUbicacion = document.getElementById("conoceUbicacion");


form.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
        await fetch("https://sheet.best/api/sheets/1c78934a-ed11-448b-86c5-e2c88843a3d3", {
                            method: "POST",
                            mode: "cors",
                            headers: {"Content-Type": "application/json"},
                            body: JSON.stringify({
                                "Nombre": nombre.value,
                                "Celular": celular.value,
                                "Correo": correo.value,
                                "capitalPropio": capitalPropio.checked,
                                "creditoAprobado": creditoAprobado.checked,
                                "loMasPronto": loMasPronto.checked,
                                "enUnMes": enUnMes.checked,
                                "NoTengoDinero": NoTengoDinero.checked,
                                "poLaUbicacion": poLaUbicacion.checked,
                                "porElPrecio": porElPrecio.checked,
                                "ideal": ideal.checked,
                                "conoceUbicacion": conoceUbicacion.value,
                                "Estado": "NEW",
                                "EstadoMedio": "NO ENVIADO"
                            })
                    
                        });			
                            
                            
                            setTimeout (function(){
                                location.href = ("https://api.whatsapp.com/send?phone=+51992830820&text=Hola! 👋 %20Mi%20nombre%20es%20"+`${nombre.value}`+"%20me%20interesa%20el%20terreno%20en%20carabayllo.%20Acabo%20de%20rellenar%20el%20formulario.%20Espero%20tu%20su%20respuesta.");
                            }, 500);
        
    } catch (error) {
        console.log(error)
    }

})
