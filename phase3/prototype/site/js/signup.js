$("document").ready(function () {
  $("#signupButton").bind("click", signUp);
});

function signUp() {
  var username = $("#signupUsernameInput").val();
  var password = $("#signupPasswordInput").val();

  var dataArray = new Array(username, password);
  var jsonData = JSON.stringify();

  console.log("ABOUT TO SEND : " + username + ", " + password);

  $.ajax({
    type: 'POST',
    url: "https://deco3500-venu.uqcloud.net/luke/server/signup.php?user=" + username + "&pass=" + password,
    //need to uncomment the below line to create a user on local environment (note: response data doesn't work for unknown reason however backend php does run correctly when this fires)
    // dataType: 'jsonp',
    success: (response) => {
      console.log(response);
      // console.log(JSON.parse(response));
    },
    error: (response) => {
      console.log(response);
    }
  })
}
