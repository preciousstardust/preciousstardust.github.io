var labelBefore = document.querySelector('#labelBefore');
		var labelAfter = document.querySelector('#labelAfter');
		var indicator = document.querySelector('#indicator');
		var imgBefore = document.querySelector('.image__img--before');
		var imgAfter = document.querySelector('.image__img--after');

		labelBefore.addEventListener("click", function () {
			indicator.classList.remove('image__nav-item__right');
			imgBefore.classList.remove('image__img--hide');
		});

		labelAfter.addEventListener("click", function () {
			indicator.classList.add('image__nav-item__right');
			imgBefore.classList.add('image__img--hide');
		});
