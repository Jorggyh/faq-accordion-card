const questions = document.querySelectorAll('.question span')

questions.forEach((question) => {
	question.addEventListener('click', () => {
		removeActive()
		question.classList.toggle('active')
	})
})

// to allow more than one question active at the same time remove this function
function removeActive() {
	questions.forEach((question) => {
		question.classList.remove('active')
	})
}
