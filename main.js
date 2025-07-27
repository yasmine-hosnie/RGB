function updateRGB() {
  let red = document.getElementById("rSlider").value;
  let green = document.getElementById("gSlider").value;
  let blue = document.getElementById("bSlider").value;

  let mixedColor = `rgb(${red}, ${green}, ${blue})`;
  document.getElementById("resultText").style.color = mixedColor;

  document.getElementById("rValue").innerText = red;
  document.getElementById("gValue").innerText = green;
  document.getElementById("bValue").innerText = blue;
}

updateRGB();
