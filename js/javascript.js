				var link = document.querySelector(".contact-link");
				var popup = document.querySelector(".contact-form");
				var close = document.querySelector(".form-close");
				var firstButton = document.querySelector(".js-first-button");
				var secondButton = document.querySelector(".js-second-button");
				var thirdButton = document.querySelector(".js-third-button");
				var firstSlider = document.querySelector(".features-slider-one");
				var secondSlider = document.querySelector(".features-slider-two");
				var thirdSlider = document.querySelector(".features-slider-three");

				link.addEventListener("click", function (evt) {
					evt.preventDefault();
					popup.classList.add ("modal-show");
					});

				close.addEventListener("click", function (evt){
					evt.preventDefault();
					popup.classList.remove ("modal-show");
				});

				firstButton.addEventListener("click", function (evt) {
					evt.preventDefault();
					firstButton.classList.add ("slider-button-current");
					secondButton.classList.remove ("slider-button-current");
					thirdButton.classList.remove ("slider-button-current");
					firstSlider.classList.add ("slider-show");
					firstSlider.classList.remove ("slider-hide");
					secondSlider.classList.remove ("slider-show");
					thirdSlider.classList.remove ("slider-show");
				});

				secondButton.addEventListener("click", function (evt) {
					evt.preventDefault();
					firstButton.classList.remove ("slider-button-current");
					secondButton.classList.add ("slider-button-current");
					thirdButton.classList.remove ("slider-button-current");
					firstSlider.classList.remove ("slider-show");
					firstSlider.classList.add ("slider-hide");
					secondSlider.classList.add ("slider-show");
					thirdSlider.classList.remove ("slider-show");
				});

				thirdButton.addEventListener("click", function (evt) {
					evt.preventDefault();
					firstButton.classList.remove ("slider-button-current");
					secondButton.classList.remove ("slider-button-current");
					thirdButton.classList.add ("slider-button-current");
					firstSlider.classList.remove ("slider-show");
					firstSlider.classList.add ("slider-hide");

					secondSlider.classList.remove ("slider-show");
					thirdSlider.classList.add ("slider-show");
				});