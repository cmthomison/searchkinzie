var geocoder;
var map;
var marker;
var layers = [];
var tableId = '1qPHquuaRZKvDsHvRfa6p5FpKBBLjDyXKjXghUlM';
var locationColumn = 'Address';
var fusionLayer = new 	
	google.maps.FusionTablesLayer({
		query: {
		select: 'Address',
		from: tableId
	}
	});

fusionLayer.setMap(null);

function initialize () {
	geocoder = new google.maps.Geocoder();
	var latlng = new google.maps.LatLng (41.887434,-87.677173);
	var myOptions = {
		zoom: 14,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		map = new google.maps.Map(document.getElementById("map_canvas"),
			myOptions);
		marker = new google.maps.Marker({map:map});
	
	layers[0] = new
	google.maps.KmlLayer('http://googledrive.com/host/0B_HUQDSgQA4ARTJleTRobktSUU0',
	{preserveViewport: true});
				
	layers[1] = new
	google.maps.KmlLayer('http://googledrive.com/host/0B_HUQDSgQA4AdTRWUDM1aDZuaFk',
	{preserveViewport: true});
	
	layers[2]= new
	google.maps.KmlLayer('http://googledrive.com/host/0B_HUQDSgQA4AdnRzLTBQM085eEE',
	{preserveViewport: true});
	
	layers[3] = new
	google.maps.KmlLayer('http://googledrive.com/host/0B_HUQDSgQA4AdG1WRUplYWQ1ek0',
	{preserveViewport: true});
	
	layers[4] = new
	google.maps.KmlLayer('http://googledrive.com/host/0B_HUQDSgQA4AdG1WRUplYWQ1ek0',
	{preserveViewport: true});
	
	for (var i = 0; i < layers.length; i++) {
		layers[i].setMap(null);
	}
}

function toggleLayer(i) {
	if(layers[i].getMap() === null) {
		layers[i].setMap(map);
	} else {
		layers[i].setMap(null);
	}
}

function toggleFusion() {
	if(fusionLayer.getMap() === null) {
		fusionLayer.setMap(map);
	} else {
		fusionLayer.setMap(null);
	}
}


function codeAddress() {
	var address = document.getElementById('address').value + ", Chicago";
	geocoder.geocode( { 'address':address}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			map.setCenter(results[0].geometry.location);
			var marker = new google.maps.Marker({
				map: map,
				position: results [0].geometry.location
			});
		} else {
			alert('Search was not successful for the following reason: ' + status);
		}
	});
}

function qLayer() {
	var grabTerms = document.getElementById("terms");
	var selTerms = grabTerms.options[grabTerms.selectedIndex].text;
	var grabType = document.getElementById("propType");
	var selType = grabType.options[grabType.selectedIndex].text;
	var selSfLow = document.getElementById("minSF").innerHTML;
	var selSfHigh = document.getElementById("maxSF").innerHTML;
	//var selPriceLow = document.getElementById("minLP").innerHTML;
	//var selPriceHigh = document.getElementById("maxLP").innerHTML;
	var tLayer = new
		google.maps.FusionTablesLayer({
			query: {
				select: locationColumn,
				from: tableId,
				where: "terms = '" + selTerms + "' AND SF >= '" + selSfLow + "' AND SF <= '" + selSfHigh + "' AND type = '" + selType + "'"
			}
		});
	tLayer.setMap(map);
	alert("The selected SF range is " + selSfLow + " TO " + selSfHigh + ".");
}	

google.maps.event.addDomListener(window, 'load', initialize);


