var id = document.querySelector("#id")
var mostrarnome = document.querySelector("#mostrarnome")
var mostrarcurso = document.querySelector("#mostrarcurso")

function copy() {
    navigator.clipboard.writeText(document.getElementById("id").textContent);
    document.getElementById("alert").style.display = "block"
    document.getElementById("alert").innerHTML = "ID: " + document.getElementById("id").textContent + " Copiado!"

    setInterval(function() { document.getElementById("alert").style.display = "none" }, 2000);
}