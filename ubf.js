$(document).ready(function() {
	var $header = $(".l-header-container.l-header-container--refresh");
	$header.append($('<button id="dash-toggle">Toggle Dash</button>'));
	$("#dash-toggle").on("click", function() {
		toggleDash();
	});
});

function toggleDash() {
	if ($(".l-content.clearfix").css("display") != "none") {
		$(".l-content.clearfix").hide();
	} else {
		$(".l-content.clearfix").show();
	}	
};
