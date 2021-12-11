function segunda() {
    divaulas.style.display = "Block"
    divdias.style.display = "none"
    document.querySelector("#titulodia").innerText = "Segunda-Feira"
    curso.style.display = "none"
    document.querySelector("#anterior").style.display = "none"
    document.querySelector("#proximo").onclick = function() {
        terca()
    }

}


function terca() {
    document.querySelector("#anterior").style.display = "block"
    divaulas.style.display = "Block"
    divdias.style.display = "none"
    document.querySelector("#titulodia").innerText = "Terça-Feira"
    curso.style.display = "none"
    document.querySelector("#anterior").onclick = function() {
        segunda()
    }
    document.querySelector("#proximo").onclick = function() {
        quarta()
    }
}


function quarta() {
    document.querySelector("#anterior").style.display = "block"
    divaulas.style.display = "Block"
    divdias.style.display = "none"
    document.querySelector("#titulodia").innerText = "Quarta-Feira"
    curso.style.display = "none"
    document.querySelector("#anterior").onclick = function() {
        terca()
    }
    document.querySelector("#proximo").onclick = function() {
        quinta()
    }
}


function quinta() {
    document.querySelector("#anterior").style.display = "block"
    divaulas.style.display = "Block"
    divdias.style.display = "none"
    document.querySelector("#titulodia").innerText = "Quinta-Feira"
    curso.style.display = "none"
    document.querySelector("#proximo").onclick = function() {
        sexta()
    }
    document.querySelector("#anterior").onclick = function() {
        quarta()
    }
}

function sexta() {
    document.querySelector("#anterior").style.display = "block"
    divaulas.style.display = "Block"
    divdias.style.display = "none"
    document.querySelector("#titulodia").innerText = "Sexta-Feira"
    curso.style.display = "none"
    document.querySelector("#proximo").onclick = function() {
        segunda()
    }
    document.querySelector("#anterior").onclick = function() {
        quinta()
    }
}