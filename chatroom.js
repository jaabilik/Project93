var firebaseConfig = {
    apiKey: "AIzaSyDSuJXquI1n8PwqtTElKzc3HLulZQ6b2d0",
    authDomain: "lets-chat-5eb9c.firebaseapp.com",
    databaseURL: "https://lets-chat-5eb9c-default-rtdb.firebaseio.com",
    projectId: "lets-chat-5eb9c",
    storageBucket: "lets-chat-5eb9c.appspot.com",
    messagingSenderId: "795653391668",
    appId: "1:795653391668:web:932a9712beec0be8309161"
  };
  
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome to Kwitter, " + user_name + "!";
function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}