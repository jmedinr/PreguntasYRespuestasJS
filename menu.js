view_menuPrincipal();

// vistas: encargadas de pintar en el dom
function view_menuPrincipal() {
  document.getElementById("root").innerHTML = `
    <h1>Bienvenido al juego de preguntas</h1>
    <h2>Menu principal</h2>
    <h4>Tienes las siguientes opciones:</h4>
    <button onclick="ctrl_iniciarJuego()">1. Iniciar juego</button>
    <br>
    <br>
    <button onclick="ctrl_verHistorico()">2. Ver historico </button>
    
    `;
}

// controladores: solo ellos pueden cambiar el modelo y las vistas

function ctrl_iniciarJuego() {
  view_iniciar_juego();
}

function ctrl_irAMenuPrincipal() {
  view_menuPrincipal();
}

function ctrl_verHistorico() {
  view_historico();
}