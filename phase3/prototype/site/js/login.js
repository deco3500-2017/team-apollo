var userID;
var username;

$("document").ready(function () {
  $("#loginSubmit").bind("click", loginClick);
  $("#signUpButton").bind("click", signUpClick);
  $("#hideLogin").bind("click", hideLogin);
});

function loginClick() {
  var loginUsername = $("#loginUsernameInput").val();
  var loginPassword = $("#loginPasswordInput").val();

  console.log("ABOUT TO TRY LOGIN WITH : " + loginUsername + ", " + loginPassword);

  $.post("https://deco3500-venu.uqcloud.net/luke/server/login.php", { user: loginUsername, pass: loginPassword }, (data => {
    var parsedResult = JSON.parse(data);
    if (parsedResult.success == 1) {
      console.log("SUCCESSFULLY LOGGED IN : userID = " + parsedResult.userID);
      userID = parsedResult.userID;
      username = loginUsername;

      $('#username3').append("<h2>" + username + "</h2>");

      $("#loginBackground").addClass("hidden");
      $("#accessGrantHolder").removeClass("hidden");
      $("#accessGrant").removeClass("hidden");
      $("#map").removeClass("hidden");
      $("#searchField").removeClass("hidden");
    } else {
      console.log("NOT SUCCESSFULLY LOGGED IN");
    }
  }));
}

function signUpClick() {
  console.log("going to sign up page");
  $("#login").addClass("hidden");
  $("#signUp").removeClass("hidden");
}

function hideLogin() {
  console.log("hiding login");
  $("#login").hide();
}
