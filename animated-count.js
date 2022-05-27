(function (doc) {
	doc.querySelectorAll('.counter.animated').forEach(function (e,i) {
		e.counting = setInterval(function () {
			const start = parseInt(e.dataset['count-start']);
			let target = parseInt(e.dataset['count-end']);
			let current;
			let steps = e.getAttribute('data-count-steps');

			// first run
			if (e.dataset['count-end'] === undefined) {
				e.setAttribute('data-count-end', e.textContent);
				target = e.textContent;
				e.setAttribute('data-count-current', e.textContent);
				current = start;
				e.textContent = start;
			}

			current = current || parseInt(e.getAttribute('data-count-current'));

			// randomize step size
			if (steps === null) {
				steps = Math.floor(Math.random() * (50 - 20 + 1) + 20);
				e.setAttribute('data-count-steps', steps);
			}

			// exit condition
			if (current >= target) {
				clearInterval(e.counting);
				e.removeAttribute('data-counting');
				return;
			}

			let increase = Math.floor((target - start) / parseInt(steps));
			
			// prevent overshoot
			if (current + increase > target) {
				increase = target - current;
			}

			// set value
			e.setAttribute('data-count-current', (current + increase));
			if (e.classList.contains('compact')) {
				const formatter = Intl.NumberFormat(undefined, {
					'notation': 'compact',
					'maximumFractionDigits': 2
				});
				e.textContent = formatter.format((current + increase));
			} else {
				e.textContent = (current + increase);
			}
		}, 50, e);
	});
})(document);
