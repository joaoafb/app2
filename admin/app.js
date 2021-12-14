document.querySelector("a img").style.display = "none"
document.querySelector("#mostrarcurso").style.display = "none"
document.querySelector("#menu").style.display = "none"
document.querySelector("#addaula").style.display = "none"

function cursoadm() {

    db.collection("admin").doc(localStorage.getItem("nomeadmin")).update({
            curso: "adm"
        })
        .then(() => {
            console.log("Dado Inserido! ");
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Erro ao Inserir o Campo: ", error);
        });

    document.querySelector("#divcurso").style.display = "none"
    document.querySelector("#divano").style.display = "block"
}


function cursoseg() {

    db.collection("admin").doc(localStorage.getItem("nomeadmin")).update({
            curso: "seg"
        })
        .then(() => {
            console.log("Dado Inserido! ");
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Erro ao Inserir o Campo: ", error);
        });
    document.querySelector("#divcurso").style.display = "none"
    document.querySelector("#divano").style.display = "block"
}

function pano() {

    db.collection("admin").doc(localStorage.getItem("nomeadmin")).update({
            ano: "1"
        })
        .then(() => {
            console.log("Dado Inserido! ");
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Erro ao Inserir o Campo: ", error);
        });
    document.querySelector("#divano").style.display = "none"
    abriradmin()

}

function sano() {
    db.collection("admin").doc(localStorage.getItem("nomeadmin")).update({
            ano: "2"
        })
        .then(() => {
            console.log("Dado Inserido! ");
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Erro ao Inserir o Campo: ", error);
        });
    document.querySelector("#divano").style.display = "none"
    abriradmin()
}

function tano() {
    db.collection("admin").doc(localStorage.getItem("nomeadmin")).update({
            ano: "3"
        })
        .then(() => {
            console.log("Dado Inserido! ");
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Erro ao Inserir o Campo: ", error);
        });
    document.querySelector("#divano").style.display = "none"
    abriradmin()

}

function abriradmin() {
    document.querySelector("#menu").style.display = "block"

    setInterval(function() {


        var docRef = db.collection("admin").doc(localStorage.getItem("nomeadmin"));

        docRef.get().then((doc) => {
            if (doc.exists) {
                document.querySelector("#mostrarcurso").style.display = "block"
                document.querySelector("#mostrarcurso span").innerHTML = '<span> Curso: </span>' +
                    ' <strong> ' + doc.data().curso.toUpperCase() + ' </strong>' + '<span>Ano: </span>' + '<strong> Ano: </strong>' + doc.data().ano.toUpperCase()


            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });


    }, 100);













}

function voltaradmin() {
    document.querySelector("#menu").style.display = "block"
    document.querySelector("#addaula").style.display = "none"
}


function addaula() {
    document.querySelector("#menu").style.display = "none"
    document.querySelector("#addaula").style.display = "block"
    document.querySelector("#admin").value = localStorage.getItem("nomeadmin")








}

function add() {
    var docRef = db.collection("admin").doc(localStorage.getItem("nomeadmin"));

    docRef.get().then((doc) => {

        if (doc.data().curso == "seg" && doc.data().ano == "1") {
            primeiroanoseg()

        }

        if (doc.data().curso == "seg" && doc.data().ano == "2") {
            segundoanoseg()

        }

        if (doc.data().curso == "seg" && doc.data().ano == "3") {
            terceiroanoseg()

        }

        if (doc.data().curso == "adm" && doc.data().ano == "1") {
            primeiroanoadm()

        } else {
            if (doc.data().curso == "adm" && doc.data().ano == "2") {
                segundoanoadm()

            } else {
                if (doc.data().curso == "adm" && doc.data().ano == "3") {
                    terceiroanoadm()

                }
            }
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

function primeiroanoadm() {

    db.collection(document.querySelector("#dia").value + "primeiroanoadm").doc(document.querySelector("#sequencia").value).set({
            dia: document.querySelector("#dia").value,
            sequencia: document.querySelector("#sequencia").value,
            materia: document.querySelector("#materia").value,
            link: document.querySelector("#link").value,
            primeiraaula: document.querySelector("#paula").value,
            segundaaula: document.querySelector("#saula").value,
            prof: document.querySelector("#prof").value,
            admin: localStorage.getItem("nomeadmin"),
            horario: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(() => {
            alert("Aula Adicionada Com Sucesso!")
            voltaradmin()
        })
        .catch((error) => {
            console.error("Erro ao Adicionar a Aula ", error);
        });
}





function segundoanoadm() {
    db.collection(document.querySelector("#dia").value + "segundoanoadm").doc(document.querySelector("#sequencia").value).set({
            dia: document.querySelector("#dia").value,
            sequencia: document.querySelector("#sequencia").value,
            materia: document.querySelector("#materia").value,
            link: document.querySelector("#link").value,
            primeiraaula: document.querySelector("#paula").value,
            segundaaula: document.querySelector("#saula").value,
            prof: document.querySelector("#prof").value,
            admin: localStorage.getItem("nomeadmin"),
            horario: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(() => {
            alert("Aula Adicionada Com Sucesso!")
            voltaradmin()
        })
        .catch((error) => {
            console.error("Erro ao Adicionar a Aula ", error);
        });
}



function terceiroanoadm() {
    db.collection(document.querySelector("#dia").value + "terceiroanoadm").doc(document.querySelector("#sequencia").value).set({
            dia: document.querySelector("#dia").value,
            sequencia: document.querySelector("#sequencia").value,
            materia: document.querySelector("#materia").value,
            link: document.querySelector("#link").value,
            primeiraaula: document.querySelector("#paula").value,
            segundaaula: document.querySelector("#saula").value,
            prof: document.querySelector("#prof").value,
            admin: localStorage.getItem("nomeadmin"),
            horario: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(() => {
            alert("Aula Adicionada Com Sucesso!")
            voltaradmin()
        })
        .catch((error) => {
            console.error("Erro ao Adicionar a Aula ", error);
        });
}











function primeiroanoseg() {

    db.collection(document.querySelector("#dia").value + "primeiroanoseg").doc(document.querySelector("#sequencia").value).set({
            dia: document.querySelector("#dia").value,
            sequencia: document.querySelector("#sequencia").value,
            materia: document.querySelector("#materia").value,
            link: document.querySelector("#link").value,
            primeiraaula: document.querySelector("#paula").value,
            segundaaula: document.querySelector("#saula").value,
            prof: document.querySelector("#prof").value,
            admin: localStorage.getItem("nomeadmin"),
            horario: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(() => {
            alert("Aula Adicionada Com Sucesso!")
            voltaradmin()
        })
        .catch((error) => {
            console.error("Erro ao Adicionar a Aula ", error);
        });
}





function segundoanoseg() {
    db.collection(document.querySelector("#dia").value + "segundoanoseg").doc(document.querySelector("#sequencia").value).set({
            dia: document.querySelector("#dia").value,
            sequencia: document.querySelector("#sequencia").value,
            materia: document.querySelector("#materia").value,
            link: document.querySelector("#link").value,
            primeiraaula: document.querySelector("#paula").value,
            segundaaula: document.querySelector("#saula").value,
            prof: document.querySelector("#prof").value,
            admin: localStorage.getItem("nomeadmin"),
            horario: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(() => {
            alert("Aula Adicionada Com Sucesso!")
            voltaradmin()
        })
        .catch((error) => {
            console.error("Erro ao Adicionar a Aula ", error);
        });
}



function terceiroanoseg() {
    db.collection(document.querySelector("#dia").value + "terceiroanoseg").doc(document.querySelector("#sequencia").value).set({
            dia: document.querySelector("#dia").value,
            sequencia: document.querySelector("#sequencia").value,
            materia: document.querySelector("#materia").value,
            link: document.querySelector("#link").value,
            primeiraaula: document.querySelector("#paula").value,
            segundaaula: document.querySelector("#saula").value,
            prof: document.querySelector("#prof").value,
            admin: localStorage.getItem("nomeadmin"),
            horario: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(() => {
            alert("Aula Adicionada Com Sucesso!")
            voltaradmin()
        })
        .catch((error) => {
            console.error("Erro ao Adicionar a Aula ", error);
        });
}