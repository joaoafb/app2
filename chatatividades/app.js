let myName = localStorage.getItem("nome")



const sendMessage = () => {


    let message = document.getElementById("message").value
    firebase.database().ref("msgatividades").push().set({
        "sender": myName,
        "message": message
    });
    let message1 = document.getElementById("message")
    message1.value = ""
    document.querySelector("#chatbox").scrollTop = document.querySelector("#chatbox").scrollHeight






    return false;
}