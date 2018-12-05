var wImg = document.getElementById("icon");
var wWeather = document.getElementById("weather");
var wTemp = document.getElementById("temp");

var requestURL = "http://api.openweathermap.org/data/2.5/weather?q=Seattle&units=imperial&&APPID=04d3244ad67b8088a3ddf5746a5ac0de";
var request = new XMLHttpRequest();

request.open("GET", requestURL);
request.responseType = 'json';
request.send();

request.onload = function(){
	var data = request.response;
	console.log(data);

	var icon = "http://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png"
	wImg.setAttribute("src", icon);

	var temp = Math.floor(data.main.temp);
	console.log(temp);
	wTemp.innerHTML = temp + " F";
}