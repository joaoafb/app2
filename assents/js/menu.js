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
var chat = document.querySelector("#chat")

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
chat.style.display = "none"


           
     
        function aviso(){
            db.collection("mensagem").doc("1").get().then((doc) => {
                if (doc.exists) {
                  document.querySelector("#divmsg span").innerHTML = doc.data().msg 
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
        }


   

document.getElementById("btnvoltar").style.display = "none"

divaulas.style.display = "None"



function pageadm() {
    chat.style.display = "none"
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
    var docRef = db.collection("usuarios").doc(localStorage.getItem("nome"));

    docRef.get().then((doc) => {
        if (doc.exists) {
            document.querySelector("#divcurso span").innerText = doc.data().curso + " " + doc.data().ano + "º "

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    chat.style.display = "none"
    menu.style.display = "block"
    divamenuinicial.style.display = "none"
    divadm.style.display = "none"

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
    chat.style.display = "block"
    menu.style.display = "block"
    divamenuinicial.style.display = "none"
    divadm.style.display = "none"
    divdias.style.display = "None"
    document.getElementById("btnvoltar").style.display = "none"
    divlista.style.display = "none"
    divaulas.style.display = "None"
    curso.style.display = "None"
    divmsg.style.display = "None"
    title.innerText = "Chat"
    config.style.display = "None"
}

function pageconfig() {
    chat.style.display = "none"


    db.collection("usuarios").doc(localStorage.getItem("nome"))
        .get().then((doc) => {
            if (doc.exists) {
                id.innerHTML = doc.data().id
                mostrarnome.innerHTML = doc.data().nome;
                mostrarcurso.innerHTML = doc.data().ano + "° " + doc.data().curso;
            } else {
                // doc.data() will be undefined in this case
                id.innerHTML = "Você Não Adicionou!"
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });





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
    title.innerText = "Configuracões"

}


function backmenu() {
    chat.style.display = "none"

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

// Guarda cada pedaco em uma variável
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

    document.getElementById("btnvoltar").style.display = "block"
}

function voltar() {
    divlista.style.display = "none"
    divmsg.style.display = "block"
    divaulas.style.display = "block"
    curso.style.display = "block"

    document.getElementById("btnvoltar").style.display = "none"
}



function auladois() {
    var docRef = db.collection(localStorage.getItem("dia") + localStorage.getItem("ano")).doc("2");

    docRef.get().then((doc) => {
        if (doc.exists) {
            document.querySelector("#nomedaaula2").innerText = "#2 " + doc.data().materia
            document.querySelector("#horarioaula2").innerText = doc.data().primeiraaula + "  " + doc.data().segundaaula

            document.querySelector("#profaula2").innerText = doc.data().prof

            document.querySelector("#entrar2").onclick = function() {
                location.href = doc.data().link
            }

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    document.querySelector("#aulaquatro").style.display = "none"
    document.querySelector("#aulatres").style.display = "none"
    document.querySelector("#aulaum").style.display = "none"
    document.querySelector("#auladois").style.display = "block"

}

function aulaum() {

    var docRef = db.collection(localStorage.getItem("dia") + localStorage.getItem("ano")).doc("1");

    docRef.get().then((doc) => {
        if (doc.exists) {
            document.querySelector("#nomedaaula").innerText = "#1 " + doc.data().materia
            document.querySelector("#horarioaula").innerText = doc.data().primeiraaula + "  " + doc.data().segundaaula

            document.querySelector("#profaula").innerText = doc.data().prof

            document.querySelector("#entrar").onclick = function() {
                location.href = doc.data().link
            }

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    document.querySelector("#aulaquatro").style.display = "none"
    document.querySelector("#aulatres").style.display = "none"
    document.querySelector("#aulaum").style.display = "block"
    document.querySelector("#auladois").style.display = "none"


}

function aulatres() {
    var docRef = db.collection(localStorage.getItem("dia") + localStorage.getItem("ano")).doc("3");

    docRef.get().then((doc) => {
        if (doc.exists) {
            document.querySelector("#nomedaaula3").innerText = '#3 ' + doc.data().materia
            document.querySelector("#horarioaula3").innerText = doc.data().primeiraaula + "  " + doc.data().segundaaula

            document.querySelector("#profaula3").innerText = doc.data().prof

            document.querySelector("#entrar3").onclick = function() {
                location.href = doc.data().link
            }

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    document.querySelector("#aulaum").style.display = "none"
    document.querySelector("#aulatres").style.display = "block"
    document.querySelector("#auladois").style.display = "none"
    document.querySelector("#aulaquatro").style.display = "none"
}

function aulaquatro() {
    var docRef = db.collection(localStorage.getItem("dia") + localStorage.getItem("ano")).doc("4");

    docRef.get().then((doc) => {
        if (doc.exists) {
            document.querySelector("#nomedaaula4").innerText = "#4 " + doc.data().materia
            document.querySelector("#horarioaula4").innerText = doc.data().primeiraaula + "  " + doc.data().segundaaula

            document.querySelector("#profaula4").innerText = doc.data().prof

            document.querySelector("#entrar4").onclick = function() {
                location.href = doc.data().link
            }

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    document.querySelector("#aulaum").style.display = "none"
    document.querySelector("#aulatres").style.display = "none"
    document.querySelector("#auladois").style.display = "none"
    document.querySelector("#aulaquatro").style.display = "block"
}

function resetar() {
    localStorage.nome = ""
    localStorage.cadastrado = "nao"
    document.querySelector("#btnresetar").style.display = "none"
    window.location.reload()
    window.onload = function log() {



        if (localStorage.getItem("cadastrado") == "sim") {

            divcad.style.display = "none"
            divamenuinicial.style.display = "block"
            divmsg.style.display = "block"

        } else {

            divcad.style.display = "block"
            divamenuinicial.style.display = "none"
            divmsg.style.display = "none"

        }

    }
}

window.onload = function log() {



    if (localStorage.getItem("cadastrado") == "sim") {

        divcad.style.display = "none"
        divamenuinicial.style.display = "block"
        divmsg.style.display = "block"

    } else {

        divcad.style.display = "block"
        divamenuinicial.style.display = "none"
        divmsg.style.display = "none"

    }

}

function entrar() {


}

function cadastrado() {
    divsucesso.style.display = "none"
    divcad.style.display = "none"
    divamenuinicial.style.display = "block"
    divmsg.style.display = "block"
}

function cadastrar() {

    var nome = document.querySelector("#inputnome")
    var id = document.querySelector("#inputid")
    var inputcurso = document.querySelector("#inputcurso")
    var ano = document.querySelector("#inputano")



    if (ano.value == "3" || ano.value == "2" || ano.value == "1"

        &&
        inputcurso.value == "adm" ||
        inputcurso.value == "seg" ||
        inputcurso.value == "ADM" ||
        inputcurso.value == "SEG" ||
        inputcurso.value == "Adm" || 
        inputcurso.value == "Seg") {
        caduser()

    } else {
        document.getElementById("alert").style.display = "block"

        document.getElementById("alert").innerHTML =
            'No Campo Ano: Digite 1, 2 ou 3!<br> e No Campo De Curso Digite ADM ou SEG'
        setInterval(function() {
            document.getElementById("alert").style.display = "none"
        }, 2000);
    }


}

function caduser() {
    var nome = document.querySelector("#inputnome")
    var id = document.querySelector("#inputid")
    var inputcurso = document.querySelector("#inputcurso")
    var ano = document.querySelector("#inputano")

    localStorage.setItem("nome", nome.value)
    db.collection("usuarios").doc(nome.value).set({
            nome: nome.value,
            id: id.value,
            curso: inputcurso.value.toUpperCase(),
            ano: ano.value,
            horario: firebase.firestore.FieldValue.serverTimestamp()

        })
        .then(() => {
            if (ano.value == "1") {
                localStorage.setItem("ano", "primeiroano" + inputcurso.value.toLowerCase())
            }

            if (ano.value == "2") {
                localStorage.setItem("ano", "segundoano" + inputcurso.value.toLowerCase())
            }

            if (ano.value == "3") {
                localStorage.setItem("ano", "terceiroano" + inputcurso.value.toLowerCase())
            }
            divcad.style.display = "none"
            divsucesso.style.display = "block"
            localStorage.cadastrado = "sim"
            document.getElementById("alert").style.display = "block"
            console.log("Cadastrado Com Sucesso!")
            document.getElementById("alert").innerHTML = "Cadastrado Com Sucesso!"
            setInterval(function() {
                document.getElementById("alert").style.display = "none"
            }, 4000);
        })
        .catch((error) => {
            localStorage.setItem("cadastrado", "nao")
            document.getElementById("alert").style.display = "block"
            console.log("Erro ao Cadastrar!")
            document.getElementById("alert").innerHTML = "Erro ao Cadastrar! Contate o Criador!"
            setInterval(function() {
                document.getElementById("alert").style.display = "none"
            }, 4000);
        });
}

function errolinks() {
    location.href = "chaterrolinks/index.html"
}

function bugs() {
    location.href = "chatbugs/index.html"

}

function chatatividades() {
    location.href = "chatatividades/index.html"
}