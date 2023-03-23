async function getWeatherData(location) {
  const response = await fetch(`http://localhost:200/${location.toLowerCase()}`)
    .then(function (res) {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });

  if (response.error) {
    alert(response.error.message);
  } else {
    console.log(response.weatherDatabase[0]);
    let image = document.getElementById("weather-img");

    if (
      [
        "mist",
        "clear",
        "cloudy",
        "overcast",
        "partly cloudy",
        "rainy",
        "sunny",
      ].includes(response.weatherDatabase[0].condition)
    ) {
      image.src = `images/${response.weatherDatabase[0].condition}.svg`;
    } else {
      image.src = "images/icon.png";
    }

    document.getElementById("feels-like").innerHTML =
      "Feels like " + response.weatherDatabase[0].feelsLike + "°";
    document.getElementById("temperature").innerHTML =
      response.weatherDatabase[0].tempC + "°";
  }
}

document.addEventListener("change", (e) => {
  let loc = document.getElementById("place-select").value;
  if (loc == null || loc == "") {
    document.getElementById("temperature").innerHTML = "0°";
    document.getElementById("feels-like").innerHTML =
      "Feels like " + response.weatherDatabase[0].feelsLike + "°";
  } else {
    getWeatherData(loc);
  }
});

let select = document.getElementById("place-select");

let elmts = [
  "Kolkata",
  "London",
  "Norway",
  "Mumbai",
  "Chennai",
  "Paris",
  "Amsterdam",
  "Bangalore",
  "Tripura",
  "Agra",
  "Gujarat",
  "Hyderabad",
];

for (let i = 0; i < elmts.length; i++) {
  let optn = elmts[i];
  let el = document.createElement("option");
  el.textContent = optn;
  el.value = optn;
  select.appendChild(el);
}
