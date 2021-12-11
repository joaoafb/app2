var config = document.getElementById("config")
var title = document.getElementById("title")
var divmsg = document.getElementById("divmsg")
var curso = document.getElementById("divcurso")
var divlista = document.getElementById("divlista")
var divdias = document.getElementById("divdias")
var divaulas = document.querySelector("#divaulas")
var divsucesso = document.querySelector("#divsucesso")
var divcad = document.querySelector("#divcadastro")
var divadm = document.querySelector("#divadm")
var menu = document.querySelector("#menu")
var divamenuinicial = document.querySelector("#menuinicial")
document.querySelector("#auladois").style.display = "none"
document.querySelector("#aulatres").style.display = "none"
document.querySelector("#aulaquatro").style.display = "none"
curso.style.display = "None"
config.style.display = "None"
menu.style.display = "None"
divlista.style.display = "None"
divamenuinicial.style.display = "block"
divdias.style.display = "None"
divsucesso.style.display = "none"
divcad.style.display = "none"
divadm.style.display = "none"

document.getElementById("btnvoltar").style.display = "none"

divaulas.style.display = "None"

function pageadm() {
    menu.style.display = "block"
    divamenuinicial.style.display = "none"
    divadm.style.display = "block"
    divdias.style.display = "None"
    document.getElementById("btnvoltar").style.display = "none"
    divlista.style.display = "none"
    divaulas.style.display = "None"
    curso.style.display = "None"
    divmsg.style.display = "None"
    config.style.display = "None"
    title.innerText = "Administrador"

}

function pageaulas() {
    menu.style.display = "block"
    divamenuinicial.style.display = "none"
    divadm.style.display = "none"
    document.getElementById("btnmais").style.display = "block"
    document.getElementById("btnvoltar").style.display = "none"
    divlista.style.display = "none"
    divaulas.style.display = "None"
    divdias.style.display = "block"
    curso.style.display = "block"
    divmsg.style.display = "block"
    title.innerText = "Aulas"
    config.style.display = "None"
}

function pagehelp() {
    menu.style.display = "block"
    divamenuinicial.style.display = "none"
    divadm.style.display = "none"
    divdias.style.display = "None"
    document.getElementById("btnvoltar").style.display = "none"
    divlista.style.display = "none"
    divaulas.style.display = "None"
    curso.style.display = "None"
    divmsg.style.display = "None"
    title.innerText = "Ajuda"
    config.style.display = "None"
}

function pageconfig() {
    menu.style.display = "block"
    divamenuinicial.style.display = "none"
    divadm.style.display = "none"
    divdias.style.display = "None"
    document.getElementById("btnvoltar").style.display = "none"
    divlista.style.display = "none"
    divaulas.style.display = "None"
    curso.style.display = "None"
    divmsg.style.display = "None"
    config.style.display = "block"
    title.innerText = "Configurações"

}


function backmenu() {
    curso.style.display = "None"
    title.innerText = "App Links"
    divamenuinicial.style.display = "block"
    divlista.style.display = "none"
    divadm.style.display = "none"
    divdias.style.display = "None"
    divaulas.style.display = "None"
    divmsg.style.display = "block"
    config.style.display = "none"
    menu.style.display = "none"
}
// Obtém a data/hora atual
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



function mais() {
    divmsg.style.display = "None"
    curso.style.display = "None"
    divaulas.style.display = "None"
    divlista.style.display = "block"
    document.getElementById("btnmais").style.display = "none"
    document.getElementById("btnvoltar").style.display = "block"
}

function voltar() {
    divlista.style.display = "none"
    divmsg.style.display = "block"
    divaulas.style.display = "block"
    curso.style.display = "block"
    document.getElementById("btnmais").style.display = "block"
    document.getElementById("btnvoltar").style.display = "none"
}



function auladois() {
    document.querySelector("#aulaquatro").style.display = "none"
    document.querySelector("#aulatres").style.display = "none"
    document.querySelector("#aulaum").style.display = "none"
    document.querySelector("#auladois").style.display = "block"
}

function aulaum() {
    document.querySelector("#aulaquatro").style.display = "none"
    document.querySelector("#aulatres").style.display = "none"
    document.querySelector("#aulaum").style.display = "block"
    document.querySelector("#auladois").style.display = "none"
}

function aulatres() {
    document.querySelector("#aulaum").style.display = "none"
    document.querySelector("#aulatres").style.display = "block"
    document.querySelector("#auladois").style.display = "none"
    document.querySelector("#aulaquatro").style.display = "none"
}

function aulaquatro() {
    document.querySelector("#aulaum").style.display = "none"
    document.querySelector("#aulatres").style.display = "none"
    document.querySelector("#auladois").style.display = "none"
    document.querySelector("#aulaquatro").style.display = "block"
}

function entrar() {
    divadm.style.display = "None"
}