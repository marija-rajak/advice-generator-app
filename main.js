//Page elements
const number = document.getElementById('number').children[0];
const text = document.getElementById('text');
const divider = document.getElementById('separator');
const dice = document.getElementById('dice');
var adviceSiteURL = 'https://api.adviceslip.com/advice';

//set media query to respond to screen size changes
const mediaQuery = window.matchMedia('(max-width: 375px)');


mediaQuery.addEventListener('change', setDivider);

//Change divider depending on screen size
function setDivider() {
	if (mediaQuery.matches) {
		divider.src = 'images/pattern-divider-mobile.svg';
	} else {
		divider.src = 'images/pattern-divider-desktop.svg';
	}
}
//Fetch random advice
function getAdvice() {
	fetch(adviceSiteURL)
		.then(function (response) {
			return response.json();
		})
		.then(function (advice) {
			number.innerText = advice.slip.id;
			text.innerText = advice.slip.advice;
		});
}

//Get new advice on dice click
dice.addEventListener('click', getAdvice);

//Get advice on page load and set corresponding divider
getAdvice();
setDivider();