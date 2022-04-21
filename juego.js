// modelo: aqui van solo datos, no funciones
var respuestas=['R1','R2','R3','R4'];
var preguntas=[0,1,2,3,4];
var preguntas_c1 = []
var preguntas_c2 = []
var preguntas_c3 = []
var preguntas_c4 = []
var preguntas_c5 = []
var correcta="";
var iterator=0;
var listTemp = [];

function view_iniciar_juego() {
  document.getElementById("root").innerHTML = `
    <h1>Bienvenido al juego de preguntas</h1>
    <h3>Vamos a jugar:</h3>
    <h4>Juego de preguntas y respuestas</h4>
    <a>Ingresa por favor un Nickname</a>
    <input type="text" placeholder="NICKNAME"name="nickname" id="nickname">
    <br>
    <br>
    <button onclick="ctrl_nuevaPartida()">Iniciar partida</button>
    <br>
    <br>
    <button onclick="ctrl_irAMenuPrincipal()">Regresar a menu principal</button>
    `;
}

function view_partidaPerdida() {
  document.getElementById("root").innerHTML = `
    <h3>Perdiste:</h3>
    <button onclick="ctrl_iniciarPartida()">Iniciar nueva partida</button>
    <br>
    <br>
    
    <button onclick="ctrl_irAMenuPrincipalPerdedor()">Regresar a menu principal</button>
    `;
}

function view_partidaGanada() {
  document.getElementById("root").innerHTML = `
    <h3>Felicidades: Ganaste</h3> 
    <button onclick="ctrl_iniciarPartida()">Iniciar nueva partida</button>
    <br>
    <br>
    
    <button onclick="ctrl_irAMenuPrincipalGanador()">Regresar a menu principal</button>
    `;
}

// controladores: solo ellos pueden cambiar el modelo y las vistas

function view_iniciarPartida() {
  document.getElementById("root").innerHTML = `
  
  <section id="pregunta"></section>
  <section id="resp1" class="respuesta rizq" onclick="ctrl_dioClickEnRespuesta('R1')">A)<span id="R1"></span></section>
	<section id="resp2" class="respuesta rder" onclick="ctrl_dioClickEnRespuesta('R2')">B)<span id="R2"></span></section>
	<section id="resp3" class="respuesta rizq" onclick="ctrl_dioClickEnRespuesta('R3')">C)<span id="R3"></span></section>
	<section id="resp4" class="respuesta rder" onclick="ctrl_dioClickEnRespuesta('R4')">D)<span id="R4"></span></section>
	<button id="iniciar" class="panel_sup" onclick="menuPrincipal()" >Salir</button>
	<div id="wrap_premio" class="panel_sup">$<span id="premio">${
    modelo.acumulado
  }</span></div>
  
    `;
  if(modelo.preguntaActual<5){

    switch(modelo.preguntaActual){
      case 0:
        shuffle();
        document.getElementById("pregunta").innerHTML = `${preguntas_c1[0]}`;
        document.getElementById("R1").innerHTML = `${preguntas_c1[listTemp[0]]}`;
        document.getElementById("R2").innerHTML = `${preguntas_c1[listTemp[1]]}`;
        document.getElementById("R3").innerHTML = `${preguntas_c1[listTemp[2]]}`;
        document.getElementById("R4").innerHTML = `${preguntas_c1[listTemp[3]]}`;
        validarCorrecta();
        listTemp.splice(0, listTemp.length);
        break
      case 1:
        shuffle();
        document.getElementById("pregunta").innerHTML = `${preguntas_c2[0]}`;
        document.getElementById("R1").innerHTML = `${preguntas_c2[listTemp[0]]}`;
        document.getElementById("R2").innerHTML = `${preguntas_c2[listTemp[1]]}`;
        document.getElementById("R3").innerHTML = `${preguntas_c2[listTemp[2]]}`;
        document.getElementById("R4").innerHTML = `${preguntas_c2[listTemp[3]]}`;
        validarCorrecta();
        listTemp.splice(0, listTemp.length);
        break
      case 2:
        shuffle();
        document.getElementById("pregunta").innerHTML = `${preguntas_c3[0]}`;
        document.getElementById("R1").innerHTML = `${preguntas_c3[listTemp[0]]}`;
        document.getElementById("R2").innerHTML = `${preguntas_c3[listTemp[1]]}`;
        document.getElementById("R3").innerHTML = `${preguntas_c3[listTemp[2]]}`;
        document.getElementById("R4").innerHTML = `${preguntas_c3[listTemp[3]]}`;
        validarCorrecta();
        listTemp.splice(0, listTemp.length);
        break
      case 3:
        shuffle();
        document.getElementById("pregunta").innerHTML = `${preguntas_c4[0]}`;
        document.getElementById("R1").innerHTML = `${preguntas_c4[listTemp[0]]}`;
        document.getElementById("R2").innerHTML = `${preguntas_c4[listTemp[1]]}`;
        document.getElementById("R3").innerHTML = `${preguntas_c4[listTemp[2]]}`;
        document.getElementById("R4").innerHTML = `${preguntas_c4[listTemp[3]]}`;
        validarCorrecta();
        listTemp.splice(0, listTemp.length);
        break
      case 4:
        shuffle();
        document.getElementById("pregunta").innerHTML = `${preguntas_c5[0]}`;
        document.getElementById("R1").innerHTML = `${preguntas_c5[listTemp[0]]}`;
        document.getElementById("R2").innerHTML = `${preguntas_c5[listTemp[1]]}`;
        document.getElementById("R3").innerHTML = `${preguntas_c5[listTemp[2]]}`;
        document.getElementById("R4").innerHTML = `${preguntas_c5[listTemp[3]]}`;
        validarCorrecta();
        listTemp.splice(0, listTemp.length);
        break
    }
    console.log("correcta"+correcta)
  }
}

function ctrl_iniciarPartida() {
  limpiarPreguntas()
  crearPreguntas();
  modelo.acumulado = 100;
  modelo.preguntaActual = 0;
  view_iniciarPartida();
}

function ctrl_nuevaPartida() {
  modelo.nickname = document.getElementById("nickname").value;
  modelo.acumulado = 100;
  modelo.preguntaActual = 0;
  limpiarPreguntas()
  crearPreguntas();
  view_iniciarPartida();
}

//borrar
function menuPrincipal() {
  var premio = calculaPremioAcumulado(modelo.preguntaActual)
  if (modelo.nickname === "") {
    modelo.nickname = "Anonimo";
  }
  modelo.historico.push({
    nickname: modelo.nickname,
    totalAcumulado: premio,
  });
  view_menuPrincipal();
}

function ctrl_irAMenuPrincipalGanador() {
  if (modelo.nickname === "") {
    modelo.nickname = "Anonimo";
  }
  modelo.historico.push({
    nickname: modelo.nickname,
    totalAcumulado: modelo.acumulado,
  });
  view_menuPrincipal();
}

function ctrl_irAMenuPrincipalPerdedor() {
  view_menuPrincipal();
}

function ctrl_dioClickEnRespuesta(respuesta) {
  if (modelo.preguntaActual >= 4) {
    view_partidaGanada();
    return;
  }
  if (respuesta==correcta) {
    modelo.preguntaActual += 1;
    modelo.acumulado += 100;
    correcta=""
    crearPreguntas();
  } else {
    correcta=""
    if (modelo.nickname === "") {
      modelo.nickname = "Anonimo";
    }
    modelo.historico.push({
      nickname: modelo.nickname,
      totalAcumulado: 0,
    });
    crearPreguntas();
    view_partidaPerdida();
    return;
  }
  view_iniciarPartida();
}

function calculaPremioAcumulado(ronda) {
  var premioAcumulado = 0;
  switch (ronda) {
    case 1:
      premioAcumulado = 100;
      break;
    case 2:
      premioAcumulado = 200;
      break;

    case 3:
      premioAcumulado = 300;
      break;
    case 4:
      premioAcumulado = 400;
      break;
    case 5:
      premioAcumulado = 500;
      break;

    default:
      premioAcumulado = 0;
      break;
  }
  return premioAcumulado;
}

function limpiarPreguntas(){
  preguntas_c1.splice(0, preguntas_c1.length);
  preguntas_c2.splice(0, preguntas_c2.length);
  preguntas_c3.splice(0, preguntas_c3.length);
  preguntas_c4.splice(0, preguntas_c4.length);
  preguntas_c5.splice(0, preguntas_c5.length);
}

function crearPreguntas(){

  iterator = Math.floor(Math.random() * 5);

  preguntas_c1.push(modelo.preguntas[iterator].pregunta.pregunta)
  preguntas_c1.push(modelo.preguntas[iterator].pregunta.opcion1)
  preguntas_c1.push(modelo.preguntas[iterator].pregunta.opcion2)
  preguntas_c1.push(modelo.preguntas[iterator].pregunta.opcion3)
  preguntas_c1.push(modelo.preguntas[iterator].pregunta.opcionCorrecta)

  iterator = Math.floor(Math.random()*(9-5+1)+5);
  preguntas_c2.push(modelo.preguntas[iterator].pregunta.pregunta)
  preguntas_c2.push(modelo.preguntas[iterator].pregunta.opcion1)
  preguntas_c2.push(modelo.preguntas[iterator].pregunta.opcion2)
  preguntas_c2.push(modelo.preguntas[iterator].pregunta.opcion3)
  preguntas_c2.push(modelo.preguntas[iterator].pregunta.opcionCorrecta)

  iterator = Math.floor(Math.random()*(14-10+1)+10);
  preguntas_c3.push(modelo.preguntas[iterator].pregunta.pregunta)
  preguntas_c3.push(modelo.preguntas[iterator].pregunta.opcion1)
  preguntas_c3.push(modelo.preguntas[iterator].pregunta.opcion2)
  preguntas_c3.push(modelo.preguntas[iterator].pregunta.opcion3)
  preguntas_c3.push(modelo.preguntas[iterator].pregunta.opcionCorrecta)

  iterator = Math.floor(Math.random()*(19-15+1)+15);
  preguntas_c4.push(modelo.preguntas[iterator].pregunta.pregunta)
  preguntas_c4.push(modelo.preguntas[iterator].pregunta.opcion1)
  preguntas_c4.push(modelo.preguntas[iterator].pregunta.opcion2)
  preguntas_c4.push(modelo.preguntas[iterator].pregunta.opcion3)
  preguntas_c4.push(modelo.preguntas[iterator].pregunta.opcionCorrecta)

  iterator = Math.floor(Math.random()*(24-20+1)+20);
  preguntas_c5.push(modelo.preguntas[iterator].pregunta.pregunta)
  preguntas_c5.push(modelo.preguntas[iterator].pregunta.opcion1)
  preguntas_c5.push(modelo.preguntas[iterator].pregunta.opcion2)
  preguntas_c5.push(modelo.preguntas[iterator].pregunta.opcion3)
  preguntas_c5.push(modelo.preguntas[iterator].pregunta.opcionCorrecta)
};

function shuffle(){
      //"Shufflea" las respuestas
      while (listTemp.length<4){
        iterator = Math.floor(Math.random() * 5);
        var idx = listTemp.indexOf(iterator);
        if ((idx==-1)&&(iterator!=0)){
          listTemp.push(iterator);
        }
      }
}

function validarCorrecta(){
  var ind = 0;
  for (i=0;i<listTemp.length;i++){
    if(listTemp[i]==4){
      break;
    }
    ind++
  }
  switch (ind){
    case 0:
      correcta = "R1"
      break;
    case 1:
      correcta = "R2"
      break;
    case 2:
      correcta = "R3"
      break;
    case 3:
      correcta = "R4"
      break;
  }
}