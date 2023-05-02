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

  function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();
