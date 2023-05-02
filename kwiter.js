var firebaseConfig = {
    apiKey: "AIzaSyBnWwYD9n8DVksmsDYWmJniDp_9NWocjVI",
    authDomain: "kwitter-d0b11.firebaseapp.com",
    databaseURL: "https://kwitter-d0b11-default-rtdb.firebaseio.com",
    projectId: "kwitter-d0b11",
    storageBucket: "kwitter-d0b11.appspot.com",
    messagingSenderId: "356449182429",
    appId: "1:356449182429:web:c0aa256751ac85e0c77134"
  };
  
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome to Kwitter " + user_name + "!";
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