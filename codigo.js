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
//const conoceUbicacion = document.getElementById("conoceUbicacion");


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
                                "Estado": "NEW",
                                "EstadoMedio": "NO ENVIADO"
                            })
                    
                        });			
                            
                        location.href = "gracias.html"
                            // setTimeout (function(){
                            //     location.href = ("https://api.whatsapp.com/send?phone=+51992830820&text=Hola! 👋 %20Mi%20nombre%20es%20"+`${nombre.value}`+"%20me%20interesa%20el%20terreno%20en%20carabayllo%20de%20587m2.%20Acabo%20de%20rellenar%20el%20formulario.%20Espero%20su%20respuesta.");
                            // }, 500);
        
    } catch (error) {
        console.log(error)
    }

})
