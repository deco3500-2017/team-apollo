$("document").ready(function() {
  $("#loginButton").bind("click", loginClick);
});

function loginClick() {
  console.log("Login button clicked");
  $("#welcomeScreen").hide();
}
