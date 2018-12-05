var requestURL = "http://api.openweathermap.org/data/2.5/weather?q=Seattle&APPID=04d3244ad67b8088a3ddf5746a5ac0de";
var request = new XMLHttpRequest();

request.open("GET", requestURL);
request.responseType = 'json';
request.send();

request.onload = function(){
	var data = request.response;
	console.log(data);

	var icon = "http://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png"
	console.log(icon);
}