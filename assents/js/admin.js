function logar() {
    if (document.getElementById("inputpass").value == "") {
        alert("DIGITE A SENHA!")
    }
    if (document.getElementById("inputpass").value == "applinksadmin") {

        // Add a new document in collection "cities"
        db.collection("admin").doc(document.querySelector("#inputnomeadmin").value).set({
                admin: document.querySelector("#inputnomeadmin").value
            })
            .then(() => {
                localStorage.setItem("nomeadmin", document.querySelector("#inputnomeadmin").value)
                console.log("Admin Cadastrado!");
                location.href = "admin/index.html"
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });



    } else {
        alert("SENHA INCORRETA!")
    }
}