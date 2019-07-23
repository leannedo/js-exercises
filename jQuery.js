$(function(){

  // $("li#one.hot").addClass("complete");
  $("li:lt(2)").addClass("complete");
  $("li").on("click", function(){
    $(this).fadeOut(1000)
  });

  let buttonOne = $("#btn1");
  buttonOne.html("My button 1");
  $("#btn2").html("My button 2");
  $("#btn3").html("My button 3");

  buttonOne.on("click", function () {
    $("#one").fadeOut(1000);
  });

  $("#btn2").on("click", function () {
    $("#two").fadeOut(1000);
  });

  $("#btn3").on("click", function () {
    $("#three").fadeOut(1000);
  });

  let $newProductForm, $newProductButton, $inputText;
  $newProductForm = $("#new-product-form");
  $newProductButton = $("#new-product-button");


  $newProductForm.hide();

  $newProductButton.on("click", function () {
    $newProductButton.hide();
    $newProductForm.show();
  });

  $newProductForm.on("submit", function (e) {
    e.preventDefault();
    $inputText = $("#product-name:text").val();
    if ($inputText){
      let $input = "<li class='hot'>"+$inputText+"</li>";
      $("#products").append($input);
      $newProductForm.hide();
      $newProductButton.show();
      $("input:text").val("");
    }

  })


});
