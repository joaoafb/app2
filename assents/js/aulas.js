document.querySelector("a img").style.display = "none"

function segunda() {
    localStorage.setItem("dia", "Segunda")
    var docRef = db.collection("admin").doc(localStorage.getItem("nome"));

    docRef.get().then((doc) => {

        if (doc.data().curso == "SEG" && doc.data().ano == "1") {
            primeiroanoseg()
           

        }

        if (doc.data().curso == "SEG" && doc.data().ano == "2") {
            segundoanoseg()
           
        }

        if (doc.data().curso == "SEG" && doc.data().ano == "3") {
            terceiroanoseg()
           
        }

        if (doc.data().curso == "ADM" && doc.data().ano == "1") {
            primeiroanoadm()
           
        } else {
            if (doc.data().curso == "ADM" && doc.data().ano == "2") {
                segundoanoadm()
                
            } else {
                if (doc.data().curso == "ADM" && doc.data().ano == "3") {
                    terceiroanoadm()
                   
                }
            }
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });




    divmsg.style.display = "none"
    document.querySelector("#proximo").style.display = "block"
    divaulas.style.display = "Block"
    divdias.style.display = "none"
    document.querySelector("#titulodia").innerText = "Segunda-Feira"
    curso.style.display = "none"
    document.querySelector("#anterior").style.display = "none"
    document.querySelector("#proximo").onclick = function() {
        terca()
    }
    aulaum()
    
}


function terca() {
    localStorage.setItem("dia", "Terca")
    var docRef = db.collection("admin").doc(localStorage.getItem("nome"));

    docRef.get().then((doc) => {

        if (doc.data().curso == "SEG" && doc.data().ano == "1") {
            primeiroanoseg()
           
        }

        if (doc.data().curso == "SEG" && doc.data().ano == "2") {
            segundoanoseg()
           
        }

        if (doc.data().curso == "SEG" && doc.data().ano == "3") {
            terceiroanoseg()
           
        }

        if (doc.data().curso == "ADM" && doc.data().ano == "1") {
            primeiroanoadm()
           
        } else {
            if (doc.data().curso == "ADM" && doc.data().ano == "2") {
                segundoanoadm()
              
            } else {
                if (doc.data().curso == "ADM" && doc.data().ano == "3") {
                    terceiroanoadm()
                   
                }
            }
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });





    divmsg.style.display = "none"
    document.querySelector("#proximo").style.display = "block"
    document.querySelector("#anterior").style.display = "block"
    divaulas.style.display = "Block"
    divdias.style.display = "none"
    document.querySelector("#titulodia").innerText = "Terca-Feira"
    curso.style.display = "none"
    document.querySelector("#anterior").onclick = function() {
        segunda()
    }
    document.querySelector("#proximo").onclick = function() {
        quarta()
    }
    aulaum()
 
}


function quarta() {
    localStorage.setItem("dia", "Quarta")
    var docRef = db.collection("admin").doc(localStorage.getItem("nome"));

    docRef.get().then((doc) => {

        if (doc.data().curso == "SEG" && doc.data().ano == "1") {
            primeiroanoseg()
           
        }

        if (doc.data().curso == "SEG" && doc.data().ano == "2") {
            segundoanoseg()
           
        }

        if (doc.data().curso == "SEG" && doc.data().ano == "3") {
            terceiroanoseg()
           
        }

        if (doc.data().curso == "ADM" && doc.data().ano == "1") {
            primeiroanoadm()
           
        } else {
            if (doc.data().curso == "ADM" && doc.data().ano == "2") {
                segundoanoadm()
              
            } else {
                if (doc.data().curso == "ADM" && doc.data().ano == "3") {
                    terceiroanoadm()
                   
                }
            }
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });


    divmsg.style.display = "none"
    document.querySelector("#proximo").style.display = "block"
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
    aulaum()
   
}


function quinta() {




    localStorage.setItem("dia", "Quinta")
    var docRef = db.collection("admin").doc(localStorage.getItem("nome"));

    docRef.get().then((doc) => {

        if (doc.data().curso == "SEG" && doc.data().ano == "1") {
            primeiroanoseg()
           
        }

        if (doc.data().curso == "SEG" && doc.data().ano == "2") {
            segundoanoseg()
           
        }

        if (doc.data().curso == "SEG" && doc.data().ano == "3") {
            terceiroanoseg()
           
        }

        if (doc.data().curso == "ADM" && doc.data().ano == "1") {
            primeiroanoadm()
           
        } else {
            if (doc.data().curso == "ADM" && doc.data().ano == "2") {
                segundoanoadm()
              
            } else {
                if (doc.data().curso == "ADM" && doc.data().ano == "3") {
                    terceiroanoadm()
                  
                }
            }
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });



    divmsg.style.display = "none"
    document.querySelector("#proximo").style.display = "block"
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
    aulaum()
   
}

function sexta() {


    localStorage.setItem("dia", "Sexta")
    var docRef = db.collection("usuarios").doc(localStorage.getItem("nome"));

    docRef.get().then((doc) => {

        if (doc.data().curso == "SEG" && doc.data().ano == "1") {
            mostrarprimeiroanoseg()
           
        }

        if (doc.data().curso == "SEG" && doc.data().ano == "2") {
            mostrarsegundoanoseg()
           
        }

        if (doc.data().curso == "SEG" && doc.data().ano == "3") {
            mostrarterceiroanoseg()
          
        }

        if (doc.data().curso == "ADM" && doc.data().ano == "1") {
            mostrarprimeiroanoadm()
         
        }

        if (doc.data().curso == "ADM" && doc.data().ano == "2") {
            mostrarsegundoanoadm()
          
        }

        if (doc.data().curso == "ADM" && doc.data().ano == "3") {
            mostrarterceiroanoadm()
           
        }

    }).catch((error) => {
        console.log("ERRO:", error);
    });




    divmsg.style.display = "none"
    document.querySelector("#anterior").style.display = "block"
    divaulas.style.display = "Block"
    divdias.style.display = "none"
    document.querySelector("#titulodia").innerText = "Sexta-Feira"
    curso.style.display = "none"
    document.querySelector("#proximo").style.display = "None"
    aulaum()
}
document.querySelector("#anterior").onclick = function() {
    quinta()
} 










function mostrarprimeiroanoadm() {





    db.collection(localStorage.getItem("dia") + "primeiroanoadm").

    doc("1").get().then((doc) => {
        if (doc.exists) {
            document.querySelector("#nomedaaula").innerText = doc.data().materia
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






}






function mostrasegundoanoadm() {





    db.collection(localStorage.getItem("dia") + "primeiroanoadm").

    doc("1").get().then((doc) => {
        if (doc.exists) {
            document.querySelector("#nomedaaula").innerText = doc.data().materia
            document.querySelector("#horarioaula").innerText = doc.data().primeiraaula + "  " + doc.data().segundaaula

            document.querySelector("#profaula").innerText = doc.data().prof

            document.querySelector("#entrar").onclick = function() {
                location.href = doc.data().link
             
            }







        } else {
            // doc.data() will be undefined in this case
            console.log("Aula não Encontrada!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });






}