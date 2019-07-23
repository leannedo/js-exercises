var view = {
  displayMessage: function(msg)
  {
    var messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  },
  displayHit: function(location)
  {
    var hit = document.getElementById(location);
    hit.setAttribute("class", "hit");

  },
  displayMiss: function(location){
    var miss = document.getElementById(location);
    miss.setAttribute("class", "miss");
  }
};
view.displayHit("34");
view.displayMiss("00");
view.displayMessage("Are you there?");