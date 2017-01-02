var mymap = L.map('mapid').setView([47.523287000000003, -122.41821], 14);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
	'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
	'Imagery © <a href="http://mapbox.com">Mapbox</a>',
	id: 'mapbox.streets'
}).addTo(mymap);
		



	var searchVoyage = L.control({position: 'bottomleft'});
	searchVoyage.onAdd = function(mymap){
	   var div = L.DomUtil.create('div', 'searchVoyage');
	   div.setAttribute("id", "slider-range-min");
	   div.setAttribute("style","height:10px;width:300px");
	 //  div.innerHTML =   "<select onchange='loadDestinationVoyage(this)'>" + destinationChk + "</select><br/>";
	   return div;
	};
	searchVoyage.addTo(mymap);
	
	var searchVoyage2 = L.control({position: 'bottomleft'});
	searchVoyage2.onAdd = function(mymap){
	   var div = L.DomUtil.create('div', 'searchVoyage2');
	   div.setAttribute("style","width:20px;color:red; font-weight:bold;");
	   div.setAttribute("id", "amount");
	 //  div.innerHTML =   '<input type="text" id="amount" readonly style="border:0; color:#f6931f; font-weight:bold;"><br/>';
	 //  div.innerHTML =   "<select onchange='loadDestinationVoyage(this)'>" + destinationChk + "</select><br/>";
	   return div;
	};
	searchVoyage2.addTo(mymap);
	
	$(function() {
		$( "#slider-range-min" ).slider({
			range: "min",
			value: 37,
			min: 1,
			max: 200,
			slide: function( event, ui ) {
				$( "#amount" ).text( "" + ui.value );
			}
		});
		$( "#amount" ).text( "" + $( "#slider-range-min" ).slider( "value" ) );
	});
//L.marker([47.523287000000003, -122.41821]).addTo(mymap);
	//.bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();

/*mymap.on('zoomstart', function () {
	console.log("Start" + mymap.getZoom());	   
	}); 
	
mymap.on('zoomend', function () {
	console.log("End" + mymap.getZoom());	   
	});
mymap.on('zoomlevelschange',function(){
	console.log("Zoomlevelschange fired");
});*/
/*mymap.on('viewreset',function(){
	console.log("View Reset fired");
});*/

