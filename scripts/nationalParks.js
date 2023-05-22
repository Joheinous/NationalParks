const outputTable = document.querySelector("#outputTable");
const fullTable = document.querySelector("#fullTable");
function tableBuilder(tbody, array) {
  let row = tbody.insertRow(-1);

  if (array.LocationName === 0) {
    array.LocationName = "";
  }
  let cell1 = row.insertCell(0);
  cell1.innerText = array.LocationName;

  if (array.ZipCode === 0) {
    array.ZipCode = " ";
  }
  if (array.State === 0) {
    array.State = " ";
  }
  if (array.City === 0) {
    array.City = " ";
  }
  if (array.Address === 0) {
    array.Address = " ";
  }
  let cell2 = row.insertCell(1);
  cell2.innerText =
    array.Address + " " + array.City + ", " + array.State + " " + array.ZipCode;

  if (array.Phone === 0) {
    array.Phone = "";
  }
  let cell3 = row.insertCell(2);
  cell3.innerText = array.Phone;

  if (array.Visit == null) {
    array.Visit = "";
  }

  let cell4 = row.insertCell(3);
  cell4.innerHTML = `<a href="${array.Visit}"> ${array.Visit} </a>`;
}

function displaySelectedPark(search) {
  let valueValue = document.querySelector('input[name="search"]:checked').value;

  fullTable.style.display = "block";

  if (valueValue == 2) {
    outputTable.innerHTML = " ";
    let searchArray = nationalParksArray.filter((s) => s.State == search);

    for (let i = 0; i < searchArray.length; i++) {
      tableBuilder(outputTable, searchArray[i]);
    }
  } else if (valueValue == 1) {
    outputTable.innerHTML = " ";

    let searchArray = nationalParksArray.filter((s) =>
      s.LocationName.includes(search)
    );

    for (let i = 0; i < searchArray.length; i++) {
      tableBuilder(outputTable, searchArray[i]);
    }
  }
}

function loadParkType(value) {
  const outputSearch = document.querySelector("#search");

  outputTable.innerHTML = " ";

  outputSearch.style.display = "block";

  if (value == 1) {
    outputSearch.innerHTML = " ";

    for (let i = 0; i < parkTypesArray.length; i++) {
      let theOption = document.createElement("option");

      theOption.textContent = parkTypesArray[i];
      theOption.value = parkTypesArray[i];

      outputSearch.appendChild(theOption);
    }
  } else if (value == 2) {
    outputSearch.innerHTML = " ";

    for (let i = 0; i < locationsArray.length; i++) {
      let theOption = document.createElement("option");

      theOption.textContent = locationsArray[i];
      theOption.value = locationsArray[i];

      outputSearch.appendChild(theOption);
    }
  }
}
