$(function() {
	$("#SFslider").slider({
		range: true,
		min: 0,
		max: 60000,
		step: 100,
		values: [1000, 9000],
		change: function(event, ui) {
			$("#minSF").html(ui.values[0]);
			$("#maxSF").html(ui.values[1]);
		}
	});
});

