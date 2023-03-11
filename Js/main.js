

  async function getWeatherData(location) {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=${location}&aqi=no`
    )
      .then(function (res) {
        return res.json();
      })
      .catch((err) => {
        console.log(err);
      });
      
    if (response.error) {
      alert(response.error.message);
    } else {
      var image = document.getElementById("weatherImg");
      if (["Mist","Clear","Cloudy","Overcast","Partly cloudy","Rainy","Sunny"].includes(response.current.condition.text)){
        image.src= `images/${response.current.condition.text}.svg`
      }
      else {
        image.src= "images/icon.png"
      }
      
      document.getElementById("feelslike").innerHTML =
        "Feels like " + response.current.feelslike_c + "°";
      document.getElementById("temperature").innerHTML =
        response.current.temp_c + "°";
      
    }
  }
  
  document.addEventListener("change", (e) => {
      var loc = document.getElementById("place-select").value;
      if (loc == null || loc == "") {
        document.getElementById("temperature").innerHTML = "0°";
        document.getElementById("feelslike").innerHTML = "Feels like " + response.current.feelslike_c + "°";;
      } else {
        getWeatherData(loc);
      }
  });
  
  var select = document.getElementById("place-select");
  var elmts = [
    "Kolkata",
    "London",
    "San Francisco",
    "Mumbai",
    "Chennai",
    "Paris",
    "Agra",
    "Bangalore",
    "Gujarat",
    "Hyderabad",
  ];
  for (var i = 0; i < elmts.length; i++) {
    var optn = elmts[i];
    var el = document.createElement("option");
    el.textContent = optn;
    el.value = optn;
    select.appendChild(el);
  }
