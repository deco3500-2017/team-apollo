// console.log("coordSplit.js going");
//
// var file = new File("./coords.txt", {
//   type: "text/plain",
// });
//
// var reader = new FileReader();
//
// reader.onload = function(event) {
//   console.log(event.target.result);
// }
//
// reader.readAsText(file);


var request = new XMLHttpRequest();
request.open('GET', "./coords.txt", true);
request.responseType = 'blob';
request.onload = function() {
  var reader = new FileReader();
  reader.readAsDataURL(request.response);
  reader.onload = function(e) {
    var arr = e.target.result.split(',');
    console.log(atob(arr[1]));
    console.log("");
    console.log("");

    var arr2 = (atob(arr[1]).split('\n'));

    var arr4 = new String();
    arr2.forEach(function(a) {
      var arr3 = a.split(',');
      arr4 += "{lat : " + arr3[0] + ", lng: " + arr3[1] + "},\n";
      // arr4.push("{lat : " + arr3[0] + ", lng: " + arr3[1] + "}");
      // console.log("{lat : " + arr3[0] + ", lng: " + arr3[1] + "}");
    });
    console.log(arr4);
  };
};
request.send();
