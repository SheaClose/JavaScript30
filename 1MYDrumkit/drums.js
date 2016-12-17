function playSound(e) {
	const key = e.keyCode
			, audio = document.querySelector(`audio[id="${key}"]`)
			, keyDiv = document.getElementById(key)
			if (!audio) {
				return;
			}
			audio.currentTime = 0;
			audio.play();
			keyDiv.classList.add("keyshadow")
			setTimeout(()=>{keyDiv.classList.remove("keyshadow")},100)
			console.log(keyDiv);
}
window.addEventListener("keydown", playSound)
