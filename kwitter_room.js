
function adduser() {
     
username = document.getElementById("user_name").value;

localStorage.setItem("username" , username);

      window.location = "Kwitter_room.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("RoomName-" + Room_names)
      row = "<div class='room_name' id="+Room_names+" onclick=></div>"
      //End code
      });});}
getData();




function addRoom() 
{
      room_name =document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      });

      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
}



function Logout() {
localStorage.removeItem("user_name");
locationbar.removeItem("room_name");
      window.location = "kwitter.html";
}

function send() {
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).plus({
      name:user_name,
      message:msg,
      like:0
})
}