window.addEventListener("keydown", function(e){
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
			, key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
	if (!audio) {
		return
	}

	key.classList.add("playing")
	audio.currentTime = 0; // stops audio and restarts from zero
	audio.play(); // play's the audo file associated with the keycode

})
function removeTransition(e){
	if (e.propertyName !== 'transform'){return}
	this.classList.remove("playing")
}
const keys =
document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
