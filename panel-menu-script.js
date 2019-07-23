$(function(){
//add event listener on the element that got clicked on
$(".panel-tab .panel-menu li").on("click", function () {
  //find the closest element to the one that got clicked on
  let $panel = $(this).closest(".panel-tab");
  //find the element that has class active and remove the class
  $panel.find(".panel-menu li.active").removeClass("active");
  //add any element that got clicked on the class active
  $(this).addClass("active");
  //assign variable to the panel we want to be shown
  let panelToShow = $(this).attr("rel");
//find the panel with the class active and slide it up
  $panel.find(".panel-content-container.active").slideUp(400, showNewPanel);
//call back function to wait for the slide up to finish
  function showNewPanel()
  {
    //any panel with class active got class remove
    $(this).removeClass("active");
    //find the id of the panel to show and show it
    $("#"+panelToShow).slideDown(300, function () {
      //add the class active to the panel to show
      $(this).addClass("active");

    });

  }
})
  //figure which panel to show

  //hide old panel

  //show new panel

});