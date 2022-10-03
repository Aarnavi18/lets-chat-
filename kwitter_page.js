//YOUR FIREBASE LINKS
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
      roomname=localStorage.getItem("roomname");

      function send()
      {
            msg=document.getElementById("msg").value;
            firebase.database().ref(roomname).push({
                  name:username,
                  message:msg,
                  like:0
            });
      }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data["name"];
message=message_data["message"];
like=message_data["like"];

namewithtag="<h4>"+name+"</h4>"+"<img class='user_tick' src='tick.png'>";
messagewithtag="<h4 class='message_h4'>"+message+"</h4>";
likewithtag="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>"
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like: "+like+"</span></button><hr>";

row=namewithtag+messagewithtag+likewithtag+span_with_tag;
document.getElementById("output").innerHTML=row;
//End code
      } });  }); }
getData();
function updatelike(message_id)
{
console.log("click on the like button"+ message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
updatelikes=Number(likes)+1;
console.log(updated_likes);

firebase.database().ref(room_name).child(message_id).update({
      like:updated_likes
});
}


function logout()
{
      localStorage.removeItem("roomname");
      localStorage.removeItem("username");
      window.location="index.html"
}