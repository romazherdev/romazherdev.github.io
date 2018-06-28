$(function () {

	fadePreload();

	initparticles();

	function initparticles() {
		bubbles();
	}

	function bubbles() {
		$.each($(".bubbles"), function () {
			var bubblecount = ($(this).width() / 50) * 10;
			for (var i = 0; i <= bubblecount; i++) {
				var size = (rnd(30, 70) / 10);
				$(this).append('<span class="particle" style="top:' + rnd(20, 80) + '%; left:' + rnd(0, 95) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + (rnd(0, 30) / 10) + 's;"></span>');
			}
		});
	}

	function  rnd(m, n) {
		m = parseInt(m);
		n = parseInt(n);
		return Math.floor(Math.random() * (n - m + 1)) + m;
	}

	function fadePreload() {
		$('#loader').delay(500).fadeOut(1000);
		$('#preloader').delay(1500).fadeOut();
	}
});