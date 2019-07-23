const typeArray = ["Makeup Remover", "Cleanser", "Toner", "Moisturizer", "Sunscreen"];

function addRow(){
  let table = document.getElementById("myTable"),
      newRow = table.insertRow(1),
      cellCount = table.rows[0].cells.length,
      currencyArray = ["EUR", "VND", "PLN"],
      productType = document.createElement("select"),
      currencyType = document.createElement("select");


  for (let i = 0; i < typeArray.length; i++)
  {
    let option = document.createElement("option");
    option.value = typeArray[i];
    option.text = typeArray[i];
    productType.appendChild(option);
  }

  for (let i = 0; i < currencyArray.length; i++)
  {
    let option = document.createElement("option");
    option.value = currencyArray[i];
    option.text = currencyArray[i];
    currencyType.append(option);
  }
  for (let i = 0; i < cellCount; i++){
  if (i===0)
    {
      let checkBox = newRow.insertCell(i),
        select = document.createElement("input");
      select.type = "checkbox";
      checkBox.appendChild(select);
    }
    else if (i===1){
      let newCell = newRow.insertCell(i);
      newCell.appendChild(productType);
    }
    else if (i === 5){
      let newCell = newRow.insertCell(i);
      newCell.append(currencyType);
    }
    else if (i===3)
    {
      let newCell = newRow.insertCell(i),
          quantityBox = document.createElement("input");
      quantityBox.type = "number";
      quantityBox.max = "10";
      quantityBox.min = "1";
      quantityBox.id = "quantity";
      newCell.appendChild(quantityBox);
    }
    else if (i === 6)
    {
    }
    else
    {
      let newCell = newRow.insertCell(i),
        typeBox = document.createElement("input");
      typeBox.setAttribute("type", "text");
      newCell.appendChild(typeBox);
    }
  }
  function showValue()
  {
    let showQuantity = document.getElementById("quantity").value,
      showPrice = document.getElementById("price").value;
    document.getElementById("sum").innerHTML = showQuantity * showPrice;
  }
}
function deleteRow()
{
  let table = document.getElementById("myTable"),
      rowCount = table.rows.length;
//to start from the next line after heading
  for (let i = 1; i < rowCount; i++)
  {
    //want to leave the first row alone
if (rowCount > 2)
{
  let row = table.rows[i],
    //cell 0 is where the checkbox is
    checkedBox = row.cells[0].getElementsByTagName('input')[0];
  if ("checkbox" === checkedBox.type && true === checkedBox.checked)
  {
    table.deleteRow(i);
  }
}
    }
}
function showValue()
{
  let quantity = document.getElementById("quantity").value,
      price = document.getElementById("price").value;
  document.getElementById("sum").innerHTML = +quantity * +price;
}

function displayRoutine()
{
let routineTable = document.createElement("table"),
  tableRow = routineTable.insertRow(-1);
  routineTable.id = "routineTable";
for (let i = 0; i < typeArray.length; i++)
{
  let routineHeading = document.createElement("th");
  routineHeading.innerHTML = typeArray[i];
  tableRow.appendChild(routineHeading);
}
