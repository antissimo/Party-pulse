document.addEventListener('DOMContentLoaded', async function () {

	// Handle the event on star icon click
	const starIcons = document.querySelectorAll('.star-icon');
	console.log("Sve: "+starIcons);
	for (let index = 0; index < starIcons.length; index++) {
		const starIcon = starIcons[index];

		starIcon.addEventListener('click', handleStarIconClick);
	}
});

// Toggle star icons
function handleStarIconClick(e) {
	const clickedStarIcon = e.currentTarget;

	const starContainer = clickedStarIcon.parentElement;
	const starSiblings = starContainer.children;

	let flag = false;
	console.log(starSiblings.length);
	for (let i = 0; i < starSiblings.length; i++) {
		const currentStarIcon = starSiblings[i];
		console.log(currentStarIcon.classList)
		if (!flag) {
			currentStarIcon.classList.remove('fa-star-o');
			currentStarIcon.classList.add('fa-star');
		} else {
			currentStarIcon.classList.remove('fa-star');
			currentStarIcon.classList.add('fa-star-o');
		}

		if (currentStarIcon == clickedStarIcon) {
			flag = true;
		}
	}
}