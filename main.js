const { tz } = require("moment-timezone");
var moment = require("moment");
var MicroModal = require("micromodal");
const dayjs = require("dayjs");
const fechaActual = dayjs();
let botonEnvio = document.getElementById("apply");
let hour = document.querySelector(".hour");
let lugar = document.getElementById("lugar");
let fechaaActual = document.getElementById("fechaActual");

let horalugar = "";

hour.innerHTML = "00:00:00 ";

const selectElement = document.getElementById("lang"); // Reemplaza "tuSelectId" con el ID real de tu elemento select

let selectedOption = "";
let selectedValue = "";
let selectedText = "";
let valorSeleccionado = "";
let prueba = "";

selectElement.addEventListener("change", function () {
  selectedOption = this.options[this.selectedIndex]; // Obtiene la opción seleccionada
  selectedValue = selectedOption.value; // Obtiene el valor de la opción seleccionada
  selectedText = selectedOption.textContent; // Obtiene el texto de la opción seleccionada

  // Guarda el valor seleccionado en una variable
  valorSeleccionado = selectedValue;
});

function obtenerHoraNy() {
  const fechaHora = moment();
  const fechaHoraNewYork = moment.tz(fechaHora, "America/New_York");
  horalugar = fechaHoraNewYork.format("HH:mm:ss");
  lugar.innerHTML = "New York, United States";
  fechaaActual.innerHTML = fechaHoraNewYork.format("YYYY-MM-DD");
  prueba = horalugar;
  hour.innerHTML = horalugar;
}

function obtenerHoraBsAs() {
  const fechaHora = moment();
  const fechaHoraBuenosAires = moment.tz(fechaHora, "America/Buenos_Aires");
  horalugar = fechaHoraBuenosAires.format("HH:mm:ss");
  lugar.innerHTML = "Buenos Aires, Argentina";
  fechaaActual.innerHTML = fechaHoraBuenosAires.format("YYYY-MM-DD");
  prueba = horalugar;
  hour.innerHTML = horalugar;
}

function obtenerHoraTokyo() {
  const fechaHora = moment();
  const fechaHoraTokio = moment.tz(fechaHora, "Asia/Tokyo");
  horalugar = fechaHoraTokio.format("HH:mm:ss");
  lugar.innerHTML = "Tokyo, Japan";
  fechaaActual.innerHTML = fechaHoraTokio.format("YYYY-MM-DD");
  prueba = horalugar;
  hour.innerHTML = horalugar;
}

function obtenerHoraMoscow() {
  const fechaHora = moment();
  const fechaHoraMoscu = moment.tz(fechaHora, "Europe/Moscow");
  horalugar = fechaHoraMoscu.format("HH:mm:ss");
  lugar.innerHTML = "Moscow, Russia";
  fechaaActual.innerHTML = fechaHoraMoscu.format("YYYY-MM-DD");
  prueba = horalugar;
  hour.innerHTML = horalugar;
}

function obtenerHoraLondon() {
  const fechaHora = moment();
  const fechaHoraLondon = moment.tz(fechaHora, "Europe/London");
  horalugar = fechaHoraLondon.format("HH:mm:ss");
  lugar.innerHTML = "London, England";
  fechaaActual.innerHTML = fechaHoraLondon.format("YYYY-MM-DD");
  prueba = horalugar;
  hour.innerHTML = horalugar;
}

botonEnvio.addEventListener("click", darValor);

function darValor() {
  if (valorSeleccionado === "moscu") {
    setInterval(obtenerHoraMoscow, 1000);
  } else if (valorSeleccionado === "tokio") {
    setInterval(obtenerHoraTokyo, 1000);
  } else if (valorSeleccionado === "buenosaires") {
    setInterval(obtenerHoraBsAs, 1000);
  } else if (valorSeleccionado === "newyork") {
    setInterval(obtenerHoraNy, 1000);
  } else if (valorSeleccionado === "london") {
    setInterval(obtenerHoraLondon, 1000);
  }
}

MicroModal.init({
  openTrigger: "data-custom-open",
  disableScroll: false,
  awaitCloseAnimation: true,
});

document
  .querySelector(".js-modal-trigger")
  .addEventListener("click", function (event) {
    MicroModal.show("modal-2", {
      debugMode: true,
      disableScroll: true,
      onShow: function (modal) {
        document.querySelector(".js-body").classList.add(modal.id);
      },
      onClose: function (modal) {
        document.querySelector(".js-body").classList.remove(modal.id);
      },
      closeTrigger: "data-custom-close",
      awaitCloseAnimation: true,
    });
  });

document
  .querySelector(".js-modal-close-trigger")
  .addEventListener("click", function (event) {
    event.preventDefault();
    MicroModal.close("modal-2");
  });

var myDate = new Date();
var myCoolDate = moment(myDate).format("LL");

console.log(myCoolDate);
