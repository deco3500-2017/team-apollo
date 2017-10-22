$("document").ready(function () {
  $("#signupButton").bind("click", signUp);
});

function signUp() {
  var username = $("#signupUsernameInput").val();
  var password = $("#signupPasswordInput").val();

  console.log("ABOUT TO SEND : " + username + ", " + password);

  $.post("https://deco3500-venu.uqcloud.net/luke/server/signup.php", { user: username, pass: password }, (data => {
    if (JSON.parse(data).success == 1) {
      console.log("SUCCESSFULLY REGISTERED USER");
    } else {
      console.log("NOT SUCCESSFULLY REGISTERED USER");
    }
  }));
}
