var firebaseConfig = {
      apiKey: "AIzaSyBDNWuhFyp0u90xrqCZ-Wsb5EvCi0xqUYE",
      authDomain: "kwitter-dc6ba.firebaseapp.com",
      databaseURL: "https://kwitter-dc6ba-default-rtdb.firebaseio.com",
      projectId: "kwitter-dc6ba",
      storageBucket: "kwitter-dc6ba.appspot.com",
      messagingSenderId: "408867441329",
      appId: "1:408867441329:web:e904bcf85bf61f0ffbf090",
      measurementId: "G-D0702KNK56"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     username=localStorage.getItem("username");
     document.getElementById("username").innerHTML="welcome "+username;

     getData();

function add()
{
      roomname=document.getElementById("roomname").value;
      localStorage.setItem("roomname",roomname)
      firebase.database().ref("/").child(roomname).update({
            purpose:"adding roomname"
      });
      window.location="kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='roomname' id="+Room_names+"onclick='redirect(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row
      //End code
      });});}


function redirect(name)
{
      localStorage.setItem("roomname",name);
      window.location="kwitter_page.html"
}
function logout()
{
      localStorage.removeItem("roomname");
      localStorage.removeItem("username");
      window.location="index.html"
}