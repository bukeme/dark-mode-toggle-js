const checkbox = document.querySelector('.checkbox')
const htmlEl = document.documentElement

checkbox.addEventListener('click', function() {
	const state = htmlEl.getAttribute('data-theme')
	state == 'light' ? htmlEl.setAttribute('data-theme', 'dark') : htmlEl.setAttribute('data-theme', 'light')
}) 