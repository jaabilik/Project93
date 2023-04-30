function addUser() {
  localStorage.setItem("user_name", user_name);
   window.location = "chatroom.html";
   console.log("username is: " + user_name);
}