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

$(function() {
	$("#LPslider").slider({
		range: true,
		min: 0,
		max: 30,
		step: 1,
		values: [10, 20],
		change: function(event, ui) {
			$("#minLP").html(ui.values[0]);
			$("#maxLP").html(ui.values[1]);
		}
	});
});