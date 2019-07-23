$(function(){
let button = $("#button");
button.on("click", showContent);

function showContent() {
  $.ajax({url: "../text-data/text1.txt", success: function (content) {
      $("#content").html(content)}} );
}

});