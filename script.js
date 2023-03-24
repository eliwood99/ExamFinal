const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

const xhr = new XMLHttpRequest();

function onRequestHandler(){
    if(this.readyState == 4 && this.status == 200){
        const data = JSON.parse(this.response);
        const HTMLResponse = document.querySelector("#listado");

        const det = data["results"].map((poke) => `<tr><td>${poke.name}</td><td><input type="button" id="${poke.url}" value="Ver Detalles" class="btn" onclick="verDetalle('${poke.url}')"></td></tr>`);

        HTMLResponse.innerHTML = `${det}`
    }
}
   
xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", API_URL);
xhr.send();

function verDetalle(url){

    fetch(url)
      .then(response => response.json())
      .then((json) => {

console.log(json["sprites"].back_default)

        const item = `Detalle del Pokemon:<br><br>
                      <img src="${json["sprites"].back_default}"><br>
                      Nombre: ${json.name}<br>Peso: ${json.weight}<br>Altura: ${json.height}`;   
        const HTMLResponse = document.querySelector("#detalle");
        HTMLResponse.innerHTML = `${item}`
      })

}