/*
	Fractal by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

const counters = document.querySelectorAll(".custom-counter");

counters.forEach(counter => {
    let initialCount = 0;
    const finalCount = parseInt(counter.dataset.count);

    const updateCounting = () => {
        if (initialCount < finalCount) {
            if (initialCount < 1000) {
                initialCount += 5;
                counter.innerText = initialCount;
            } else if (initialCount < 10000) {
                initialCount += 100;
                counter.innerText = (initialCount / 1000).toFixed(1) + 'K+';
            } else if (initialCount < 1000000) {
                initialCount += 5000;
                counter.innerText = (initialCount / 1000).toFixed(1) + 'K+';
            } else {
                initialCount += 500000;
                counter.innerText = (initialCount / 1000000).toFixed(1) + 'M+';
            }

            if (initialCount >= finalCount) {
                counter.innerText = formatCount(finalCount);
                clearInterval(counting);
            }
        }
    };

    const formatCount = count => {
        if (count < 1000) return count;
        if (count < 1000000) return (count / 1000).toFixed(1) + 'K+';
        return (count / 1000000).toFixed(1) + 'M+';
    };

    const counting = setInterval(updateCounting,7);
});
(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500
			});

})(jQuery);
