//  Encuesta de intereses by Lili Sanchez
// sistema que permite votar y ver los resultados en tiempo real

// *Objeto variable para guardar los votos de cada tema
let conteoVotos = {
  disenoWeb: 0,
  javascript: 0,
  basesDatos: 0
};

// Contador total de votos
let totalDeVotos = 0;

// *Función principal: registra un voto
function registrarVoto(opcionSeleccionada) {
  
  // *aquí sumamos un voto a la opción elegida
  conteoVotos[opcionSeleccionada]++;
  totalDeVotos++;

  // *Actualizamos el número en pantalla usando el id correspondiente
  document.getElementById(`total-${opcionSeleccionada}`).textContent =
    conteoVotos[opcionSeleccionada];

  // *Mostramos un mensaje a quien vota
  alert("💖 ¡Gracias por tu voto! Puedes votar por lo que más te gusta 🏵");

  // *Cada 5 votos mostramos en la consola el total
  if (totalDeVotos % 5 === 0) {
    console.log(`✨ Total de votos acumulados: ${totalDeVotos}`);
  }
}
