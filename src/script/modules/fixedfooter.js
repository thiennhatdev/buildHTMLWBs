var fixedfooter = {
	setFooter: function(){
		var bodyHeight = $("body").outerHeight(),
		headerHeight = $("header").outerHeight(),
		footerHeight = $("footer").outerHeight(),
		mainHeight = $("main").outerHeight(),
		curentHeight = mainHeight + headerHeight + footerHeight,
		curentfixedHeight = mainHeight + footerHeight,
		newHeight = bodyHeight - (headerHeight + footerHeight),
		newfixedHeight = bodyHeight - footerHeight;
	if ($(window).width() > 600) {
		if ($(window).width() <= 991) {
			$("main").css('min-height', newfixedHeight + 'px');
		} else {
			if (!true) {
				$("main").css('min-height', newHeight + 'px');
			} else {
				$("main").css('min-height', newfixedHeight + 'px');
			}
		}
	} else {
		$("main").css('min-height', 'initial');
	}
	}
};
export default fixedfooter;