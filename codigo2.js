//setTimeout (function(){
   // window.location.href = "https://api.whatsapp.com/send?phone=+51992830820&text=Hola! 👋 %20Me%20interesa%20el%20terreno%20en%20carabayllo%20de%20587m2.%20Acabo%20de%20rellenar%20el%20formulario.%20Espero%20su%20respuesta."
//}, 1500);


// const mapDiv = document.getElementById("map");
// const cordenada = { lat: -11.831044, lng:  -77.043606 };
// var citymap = {
//     Carabayllo: {
//         center: {lat: -11.831044, lng: -77.043606},
//         population: 200
//     }
//     };
    
//     iniciarMap()
    
//     async function iniciarMap() {
//     let map;
//     map = await new google.maps.Map(mapDiv, {
//         center: cordenada,
//         scaleControl: true,
//         mapTypeId: google.maps.MapTypeId.ROADMAP,
//         zoom: 14,
//     });
//     for (var city in citymap) {
//             var cityCircle = new google.maps.Circle({
//             strokeColor: '#0000FF',
//             strokeOpacity: 0.8,
//             strokeWeight: 2,
//             fillColor: '#5882FA',
//             fillOpacity: 0.35,
//             map,
//             center: citymap[city].center,
//             radius: Math.sqrt(citymap[city].population) * 10
//         });
//     }
// }


const wsp1 = document.getElementById("wsp1")
// const wsp2 = document.getElementById("wsp2")

wsp1.addEventListener("click", () => {
    setTimeout( ()=>  {
        location.href = "https://api.whatsapp.com/send?phone=+51992830820&text=Hola%20deseo%20agendar%20una%20visita%20para%20el%20terreno%20ubicado%20en%20carabayllo%20de%20590m2"
      }, 500)
})

// wsp2.addEventListener("click", () => {
//     setTimeout( ()=>  {
//         location.href = "https://api.whatsapp.com/send?phone=+51928797580&text=Hola%20deseo%20agendar%20una%20visita%20para%20el%20terreno%20en%20carabayllo%20de%20590m2"
//       }, 500)
// })
