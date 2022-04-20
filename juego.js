// modelo: aqui van solo datos, no funciones

function view_iniciar_juego() {
  document.getElementById("root").innerHTML = `
    <h1>Bienvenido al juego de preguntas</h1>
    <h3>Vamos a jugar:</h3> 
    <input type="text" placeholder="NICKNAME"name="nickname" id="nickname">
    
    <h5>este juegoo se trata de blablabla</h5>
   
    <br>
    <br>
    <button onclick="ctrl_iniciarPartida()">Iniciar partida</button>
    <br>
    <br>
    
    <button onclick="ctrl_irAMenuPrincipal()">Regresar a menu principal</button>
    `;
}

// controladores: solo ellos pueden cambiar el modelo y las vistas

function view_iniciarPartida() {
  document.getElementById("root").innerHTML = `
  
  <section id="pregunta">${
    modelo.preguntas[modelo.preguntaActual].pregunta.pregunta
  }</section>
  <section id="resp1" class="respuesta rizq" onclick="ctrl_dioClickEnRespuesta(1)">A)<span id="R1">${
    modelo.preguntas[modelo.preguntaActual].pregunta.opcion1
  }</span></section>
	<section id="resp2" class="respuesta rder" onclick="ctrl_dioClickEnRespuesta(2)">B)<span id="R2">${
    modelo.preguntas[modelo.preguntaActual].pregunta.opcion2
  }</span></section>
	<section id="resp3" class="respuesta rizq" onclick="ctrl_dioClickEnRespuesta(3)">C)<span id="R3">${
    modelo.preguntas[modelo.preguntaActual].pregunta.opcion3
  }</span></section>
	<section id="resp4" class="respuesta rder" onclick="ctrl_dioClickEnRespuesta(4)">D)<span id="R4">${
    modelo.preguntas[modelo.preguntaActual].pregunta.opcionCorrecta
  }</span></section>
	<button id="iniciar" class="panel_sup" onclick="ctrl_irAMenuPrincipal();" >Salir</button>
	<div id="wrap_premio" class="panel_sup">$<span id="premio">${
    modelo.acumulado
  }</span></div>
  
    `;
}

function view_partidaPerdida() {
  document.getElementById("root").innerHTML = `
    <h3>Perdiste:</h3> 
    <button onclick="ctrl_iniciarPartida()">Iniciar nueva partida</button>
    <br>
    <br>
    
    <button onclick="ctrl_irAMenuPrincipal()">Regresar a menu principal</button>
    `;
}

function view_partidaGanada() {
  document.getElementById("root").innerHTML = `
    <h3>Felicidades: Ganaste</h3> 
    <button onclick="ctrl_iniciarPartida()">Iniciar nueva partida</button>
    <br>
    <br>
    
    <button onclick="ctrl_irAMenuPrincipal()">Regresar a menu principal</button>
    `;
}

function ctrl_iniciarPartida() {
  modelo.preguntas.sort(() => Math.random() - 0.5);
  view_iniciarPartida();
}

function ctrl_irAMenuPrincipal() {
  view_menuPrincipal();
}

function ctrl_dioClickEnRespuesta(respuesta) {
  if (respuesta !== 4) {
    console.log(respuesta);
    view_partidaPerdida();
    return;
  }

  if (modelo.preguntaActual <= 3) {
    console.log("correcto");
    console.log("preguntaActual" + modelo.preguntaActual);
    modelo.preguntaActual += 1;
    modelo.acumulado += 100;
    view_iniciarPartida();
  } else {
    view_partidaGanada();
  }
}
