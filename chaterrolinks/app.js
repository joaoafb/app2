let myName = localStorage.getItem("nome")





function teclado() {
    document.querySelector(".campo").style.opacity = "100%"

    document.querySelector("#wrapper").scrollTop = document.querySelector("#chatbox").scrollHeight

    document.querySelector("#chatbox").style.opacity = "10%"
}

var data = new Date();

// Guarda cada pedaço em uma variável
var dia = data.getDate(); // 1-31
var dia_sem = data.getDay(); // 0-6 (zero=domingo)
var mes = data.getMonth(); // 0-11 (zero=janeiro)
var ano2 = data.getYear(); // 2 dígitos
var ano4 = data.getFullYear(); // 4 dígitos
var hora = data.getHours(); // 0-23
var min = data.getMinutes(); // 0-59
var seg = data.getSeconds(); // 0-59
var mseg = data.getMilliseconds(); // 0-999
var tz = data.getTimezoneOffset(); // em minutos

// Formata a data e a hora (note o mês + 1)
var str_data = dia + '/' + (mes + 1);
var str_hora = hora + ':' + min;

function chatboxnormal() {
    document.querySelector(".campo").style.opacity = "60%"
    document.querySelector("#chatbox").style.opacity = "100%"
}

const sendMessage = () => {


    let message = document.getElementById("message").value
    firebase.database().ref("msgerrolinks").push().set({
        "sender": myName,
        "message": message,
        "hora": str_hora
    });
    let message1 = document.getElementById("message")
    message1.value = ""
    document.querySelector("#wrapper").scrollTop = document.querySelector("#chatbox").scrollHeight


    document.querySelector("#chatbox").style.opacity = "100%"



    return false;
}