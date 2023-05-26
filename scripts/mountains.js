function listMountains() {
  let outputList = document.querySelector("#mountains");
  let theOption = document.createElement("option");
  theOption.value = "";
  theOption.textContent = "Choose a mountain...";

  outputList.appendChild(theOption);

  for (let i = 0; i < mountainsArray.length; i++) {
    let theOption = document.createElement("option");
    theOption.value = i;
    theOption.textContent = mountainsArray[i].name;

    outputList.appendChild(theOption);
  }
}
listMountains();

function displayMountain(arrayValue) {
  let output = document.querySelector("#output");

  output.innerHTML = "";
  console.log(arrayValue);

  let title = document.createElement("h2");
  title.textContent = mountainsArray[arrayValue].name;
  output.appendChild(title);

  let description = document.createElement("p");
  description.textContent = mountainsArray[arrayValue].desc;
  output.appendChild(description);

  let elevationHead = document.createElement("h5");
  elevationHead.textContent = "Elevation:";
  output.appendChild(elevationHead);

  let elevation = document.createElement("p");
  elevation.textContent = `${mountainsArray[arrayValue].elevation} feet`;
  output.appendChild(elevation);

  let difficultyHead = document.createElement("h5");
  difficultyHead.innerText = "Climbing Difficulty: ";
  output.appendChild(difficultyHead);

  let difficulty = document.createElement("p");
  difficulty.innerText = mountainsArray[arrayValue].effort;
  output.appendChild(difficulty);

  let mountainImage = document.createElement("img");
  mountainImage.src = `images/${mountainsArray[arrayValue].img}`;
  mountainImage.alt = `An image of ${mountainsArray[arrayValue].name}`;
  output.appendChild(mountainImage);
}
