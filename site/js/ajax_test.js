$(document).ready(function() {
  console.log("ajax_test is ready");

  $.post("../server/ajax_test.php", {
      name: "Luke Steyn",
    },
    function(data, status) {
      console.log("Data: " + data + "\nStatus: " + status);
    }
  );
});
