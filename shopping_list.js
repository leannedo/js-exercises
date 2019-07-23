let foodList, firstAddedItem, firstAddedItemValue, secondAddedItem, secondAddedItemValue, thirdAddedItem, thirdAddedItemValue;
foodList = document.getElementById("food");

firstAddedItem = document.createElement("LI");
firstAddedItem.setAttribute("class", "hot");
firstAddedItemValue = document.createTextNode("Bread");

firstAddedItem.appendChild(firstAddedItemValue);
foodList.insertBefore(firstAddedItem, foodList.firstChild);


secondAddedItem = document.createElement("LI");
secondAddedItem.setAttribute("class", "hot");
secondAddedItemValue = document.createTextNode("Salt");

secondAddedItem.appendChild(secondAddedItemValue);
foodList.appendChild(secondAddedItem);

thirdAddedItem = document.createElement("LI");
thirdAddedItem.setAttribute("class", "hot");
thirdAddedItemValue = document.createTextNode("Ice-cream");

thirdAddedItem.appendChild(thirdAddedItemValue);
foodList.insertBefore(thirdAddedItem, foodList.childNodes[3]);

let food = document.querySelectorAll("ul")[0].children;

for (let i = 0; i < food.length; i++)
{
  food[i].className += " cool"; //it has to be a space before class name to amend the new class name without overwriting the old one
}

let foodLength = food.length;
total = document.getElementById("total");
total.textContent = " " + foodLength ;

foodList.addEventListener("click", function (event)
{
  if (event.target.tagName === "LI")
  {
    event.target.parentNode.removeChild(event.target);
    foodLength--;
    total.textContent = "  " + foodLength;
  }
}, false);

let addButton = document.getElementById("addButton");
addButton.addEventListener("click", function(event)
{
  event.preventDefault();
  let newItem, newItemValue;
  newItem = document.createElement("LI");
  newItem.setAttribute("class", "hot");
  newItemValue = document.createTextNode("New item");
  newItem.appendChild(newItemValue);
  foodList.appendChild(newItem);
  foodLength++;
  total.textContent = "  " + foodLength;
}, false);

let userShoppingItem, textEntered, triggerButton;
userShoppingItem = document.getElementById("user-shopping-item");
textEntered = document.getElementById("text-entered");
triggerButton = document.getElementById("trigger-button");

userShoppingItem.addEventListener("keyup", logKey);

function logKey()
{
  textEntered.innerHTML = userShoppingItem.value;
}

triggerButton.onclick = function () {
  userShoppingItem.value = "";
  textEntered.innerHTML = "";
};

