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

/*function hey() {
	alert("Hello World!");
}*/
/*var fusionLayerSale = new 	
	google.maps.FusionTablesLayer({
		query: {
		select: 'Address',
		from: tableId,
		where: "'Terms' = 'Sale'", 
	}
	});

fusionLayer.setMap(null);

var fusionLayerLease = new 	
	google.maps.FusionTablesLayer({
		query: {
		select: 'Address',
		from: tableId,
		where:  "'Terms' = 'Lease'",
	}
	});

fusionLayer.setMap(null);

var fusionLayerEither = new 	
	google.maps.FusionTablesLayer({
		query: {
		select: 'Address',
		from: tableId,
		where:  "'Terms' = 'Sale or Lease'",
	}
	});

fusionLayer.setMap(null);*/
	
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

/*function qLayer = new 
		google.maps.FusionTablesLayer({
		query: {
			select: locationColumn,
			from: fusionLayer.tableId,
			wh
		}
	});*/

function qLayer() {
	var grabTerms = document.getElementById("terms");
	var selTerms = grabTerms.options[grabTerms.selectedIndex].text;
	var grabType = document.getElementById("propType");
	var selType = grabType.options[grabType.selectedIndex].text;
	var grabSfLow
	var selSfLow
	var grabSfHigh
	var selSfHigh
	var grabPriceLow
	var selPriceLow
	var grabPriceHigh
	var selPriceHigh
	var tLayer = new
		google.maps.FusionTablesLayer({
			query: {
				select: locationColumn,
				from: tableId,
				where: "terms = '" + selTerms + "' AND SF > 4000 AND type = '" + selType + "'"
				//where: "type = '" + grabType + "'"
			}
		});
	tLayer.setMap(map);
	alert(grabTerms.value + grabType.value + min1.value + max1.value + ui.values);
	//alert(ui.values);
}	

/*var selectedTerms = getElementById("terms").selectedIndex;
var tLayer = new
	google.maps.FusionTablesLayer({
		query: {
			select: locationColumn,
			from: tableId,
			where: "'terms' = selectedTerms"
			}
		});

function qLayer() {
	tLayer.setMap(map);
}*/


/*function qLayer = new google.maps.FusionTablesLayer({
	query: {
		select: locationColumn,
		from: tableId,
		where: "'terms' === document.getElementById("terms").value"
	}
});*/

/*function refreshFusion() {
	var Terms = document.getElementById("terms");
	if (terms.value=="Sale") {
		fusionLayerSale.setMap(null);
		fusionLayerLease.setMap(null);
		fusionLayerEither.setMap(null);
		fusionLayerSale.setMap(map);
		fusionLayerEither.setMap(map);
	}
	else if (terms.value=="Lease"){
		fusionLayerSale.setMap(null);
		fusionLayerLease.setMap(null);
		fusionLayerEither.setMap(null);
		fusionLayerLease.setMap(map);
		fusionLayerEither.setMap(map);
	}
	else if (terms.value=="Either"){
		fusionLayerSale.setMap(null);
		fusionLayerLease.setMap(null);
		fusionLayerEither.setMap(null);
		fusionLayerEither.setMap(map);
	} else {
		fusionLayerSale.setMap(null);
		fusionLayerLease.setMap(null);
		fusionLayerEither.setMap(null);
		fusionLayer.setMap(null);
	}
}*/

google.maps.event.addDomListener(window, 'load', initialize);


