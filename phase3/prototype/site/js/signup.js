$("document").ready(function () {
  $("#signUpSubmit").bind("click", signUp);
  $("#loginButton").bind("click", navigateLogin);
  $("#signUpOK").bind("click", signUpOK);
});

function signUp() {
  var username = $("#signupUsernameInput").val();
  var password = $("#signupPasswordInput").val();

  console.log("ABOUT TO TRY SIGN UP WITH : " + username + ", " + password);

  $.post("https://deco3500-venu.uqcloud.net/server/signup.php", { user: username, pass: password }, (data => {
    if (JSON.parse(data).success == 1) {
      console.log("SUCCESSFULLY REGISTERED USER");
      showSuccess();
    } else {
      console.log("NOT SUCCESSFULLY REGISTERED USER");
    }
  }));
}

function navigateLogin() {
  console.log("going to login screen");

  $("#signUp").addClass("hidden");
  $("#login").removeClass("hidden");
}

function showSuccess() {
  $("#signUpSuccess").removeClass("hidden");
}

function signUpOK() {
  $("#signUpSuccess").addClass("hidden");
  // $("signUpOK").addClass("hidden");
  $("#signUp").addClass("hidden");
  $("#login").removeClass("hidden");
}