$("document").ready(function () {
  $("#loginSubmit").bind("click", loginClick);
  $("#signUpButton").bind("click", signUpClick);
});

function loginClick() {
  var username = $("#loginUsernameInput").val();
  var password = $("#loginPasswordInput").val();

  console.log("ABOUT TO TRY LOGIN WITH : " + username + ", " + password);

  $.post("https://deco3500-venu.uqcloud.net/luke/server/login.php", { user: username, pass: password }, (data => {
    if (JSON.parse(data).success == 1) {
      console.log("SUCCESSFULLY LOGGED IN");
      $("#login").hide();
    } else {
      console.log("NOT SUCCESSFULLY LOGGED IN");
    }
  }));
}

function signUpClick() {
  console.log("going to sign up page");
  $("#login").hide();
  $("#signUp").show();
}
