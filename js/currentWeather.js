$(document).ready(function() {
	var url = "https://samples.openweathermap.org/data/2.5/weather?id=1673820&appid=b1b15e88fa797225412429c1c50c122a1";
	$.get( url, function( data ) {
        //console.log(data);
 	 	displayWeatherData(data);
	});
})


function displayWeatherData(data){
    appendWeatherData(data);
}

function appendWeatherData(data){
    var weatherIcon = '"http://openweathermap.org/img/w/'+data.weather[0].icon+'.png"';
	var appendWeather = '<div class="panel panel-default">'+		
                '<div class = "panel-heading panelWeather">Weather in Kaohsiung</div>'+
                '<div class = "panel-body weatherField">'+
                    '<div class="col-sm-12 col-lg-12 col-md-12"><center>'+formatDate(data.dt)+'</center></div>'+
                    '<div class="col-sm-12 col-lg-12 col-md-12"><center><img src='+weatherIcon+'></img>&nbsp;'+data.main.temp+'</center></div>'+
                    '<div class="col-sm-12 col-lg-12 col-md-12"><center>'+data.weather[0].description+'</center></div>'+
                    '<div class="col-12 col-md-12 col-sm-12 col-lg-12"><center>Sunrise:&nbsp;'+getHMFormat(data.sys.sunrise)+'</center></div>'+
                    '<div class="col-12 col-sm-12 col-md-12 col-lg-12"><center>Sunset:&nbsp;'+getHMFormat(data.sys.sunset)+'</center></div>'+
                    '<div class="col-12 col-sm-12 col-md-12 col-lg-12 col-md-12"><center>Wind:&nbsp;'+data.wind.speed+'m/s</center></div>'+
                    '<div class="col-12 col-sm-12 col-lg-12 col-md-12"><center>Pressure:&nbsp;'+data.main.pressure+'hpa</center></div>'+
                    '<div class="col-12 col-sm-12 col-lg-12 col-md-12 button-line"><center>Humidity:&nbsp;'+data.main.humidity+'%</center></div>'+
                '</div></div>';
	$('#WeatherData').append(appendWeather);
}

function getHMFormat(time){
    var sysT = new Date(time*1000);
    var h = (sysT.getHours()<10)?'0'+sysT.getHours():sysT.getHours();
    var m = (sysT.getMinutes()<10)?'0'+sysT.getMinutes():sysT.getMinutes();
    console.log(sysT.getHours());
    return h +':'+m;
}

function formatDate(date) {
    var d = new Date(date*1000),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('/');
}



