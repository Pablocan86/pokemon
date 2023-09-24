//Botón de entrenamiento
const btnEntrenar = document.querySelector("#btnEntrenar");
btnEntrenar.addEventListener("click", entrenar);
//Botón de estado
const btnEstado = document.querySelector("#btnEstado");
btnEstado.addEventListener("click", estado);
//Objeto Pokemon
const charmander = {
  nombre: "Charmander",
  nivel: 0,
  hp: 3,
  evoluciones: [, , , , , "Charmelion", , , , , "Charizard"],
};
//Hacemos que aparezca el Estado del Pokemón en un recuadro en HTML
const cuadroEstado = document.querySelector("#divEstado");
const datosDeEvolucion = document.querySelector("#datosDeEvolucion");

//Traemos del storage nuestro pokemón entrenado
const miPokemonStorage = JSON.parse(localStorage.getItem("miPokemon"));
console.log(miPokemonStorage);

let miPokemon;
//Asignar nuestro pokemón en una variable
//Hay un pokemón guardardo en el storage

if (miPokemonStorage) {
  //Le asigno el pokemón guardado el storage
  miPokemon = miPokemonStorage;
  //Asigno el objeto pokemón charmander
} else {
  miPokemon = charmander;
}
//Asignar nuestros pokemón en una variable
// let miPokemon = charmander;
let divPersonaje = document.querySelector("#divPersonaje");
//Funcion para entrenar al Pokemón y pueda evolucionar
function entrenar() {
  miPokemon.nivel++;
  miPokemon.hp += miPokemon.nivel;

  if (miPokemon.evoluciones[miPokemon.nivel]) {
    const evolucion = miPokemon.evoluciones[miPokemon.nivel];
    miPokemon.nombre = evolucion;
    switch (evolucion) {
      case "Charmelion":
        divPersonaje.innerHTML = `<h3 class="h3Evolucion">Evolucionaste a <span class="evolucion">${evolucion}</span><h3>`;
        divPersonaje.classList.add("charmelion");
        divPersonaje.classList.remove("charmander");
        break;
      case "Charizard":
        divPersonaje.innerHTML = `<h3 class="h3Evolucion">Evolucionaste a <span class="evolucion">${evolucion}</span><h3>`;
        divPersonaje.classList.add("charizard");
        divPersonaje.classList.remove("charmelion");
        break;
    }
  }
  datosDeEvolucion.innerHTML = `<p class="datosEvolucion">Nivel: ${miPokemon.nivel}</p>`;

  //Guardamos en el storage
  localStorage.setItem("miPokemon", JSON.stringify(miPokemon));
}

//Funcion para ver los valores del Pokemón
function estado() {
  cuadroEstado.innerHTML = `<div id="estado" class="estado">
<div id="btnCerrar"><p id="pCerrar">Cerrar</p></div>  
<h2>----TU POKEMÓN----</h2>
<p>Nombre: <span>${miPokemon.nombre}</span></p>
<p>Nivel: <span>${miPokemon.nivel}</span></p>
<p>Potencia: <span>${miPokemon.hp}</span></p></div>`;
  cuadroEstado.classList.add("divEstado");
  cuadroEstado.classList.remove("ocultarDivEstado");
  cerrar();
}

//Elemento para cerrar la ventana de Estado
function cerrar() {
  let cerrar = document.querySelector("#pCerrar");
  cerrar.addEventListener("click", function () {
    cuadroEstado.classList.add("ocultarDivEstado");
    cuadroEstado.classList.remove("divEstado");
  });
}

const reinicar = document.querySelector("#btnReiniciar");
reinicar.addEventListener("click", function () {
  miPokemon = charmander;
  localStorage.removeItem("miPokemon");

  alert("Partida borrada, recarga la página para comenzar de nuevo");
});
