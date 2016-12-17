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
}

const div65 = document.getElementById(65)
const div83 = document.getElementById(83)
const div68 = document.getElementById(68)
const div70 = document.getElementById(70)
const div71 = document.getElementById(71)
const div72 = document.getElementById(72)
const div74 = document.getElementById(74)
const div75 = document.getElementById(75)
const div76 = document.getElementById(76)

div65.addEventListener("click", function(e) {
	const key = this.id
	, audio = document.querySelector(`audio[id="${key}"]`)
	, keyDiv = document.getElementById(key)
	if (!audio) {
		return;
	}
	audio.currentTime = 0;
	audio.play();
	keyDiv.classList.add("keyshadow")
	setTimeout(()=>{keyDiv.classList.remove("keyshadow")},100)
});
div83.addEventListener("click", function() {
	const key = this.id
	, audio = document.querySelector(`audio[id="${key}"]`)
	, keyDiv = document.getElementById(key)
	if (!audio) {
		return;
	}
	audio.currentTime = 0;
	audio.play();
	keyDiv.classList.add("keyshadow")
	setTimeout(()=>{keyDiv.classList.remove("keyshadow")},100)
});
div68.addEventListener("click", function() {
	const key = this.id
	, audio = document.querySelector(`audio[id="${key}"]`)
	, keyDiv = document.getElementById(key)
	if (!audio) {
		return;
	}
	audio.currentTime = 0;
	audio.play();
	keyDiv.classList.add("keyshadow")
	setTimeout(()=>{keyDiv.classList.remove("keyshadow")},100)
});
div70.addEventListener("click", function() {
	const key = this.id
	, audio = document.querySelector(`audio[id="${key}"]`)
	, keyDiv = document.getElementById(key)
	if (!audio) {
		return;
	}
	audio.currentTime = 0;
	audio.play();
	keyDiv.classList.add("keyshadow")
	setTimeout(()=>{keyDiv.classList.remove("keyshadow")},100)
});
div71.addEventListener("click", function() {
	const key = this.id
	, audio = document.querySelector(`audio[id="${key}"]`)
	, keyDiv = document.getElementById(key)
	if (!audio) {
		return;
	}
	audio.currentTime = 0;
	audio.play();
	keyDiv.classList.add("keyshadow")
	setTimeout(()=>{keyDiv.classList.remove("keyshadow")},100)
});
div72.addEventListener("click", function() {
	const key = this.id
	, audio = document.querySelector(`audio[id="${key}"]`)
	, keyDiv = document.getElementById(key)
	if (!audio) {
		return;
	}
	audio.currentTime = 0;
	audio.play();
	keyDiv.classList.add("keyshadow")
	setTimeout(()=>{keyDiv.classList.remove("keyshadow")},100)
});
div74.addEventListener("click", function() {
	const key = this.id
	, audio = document.querySelector(`audio[id="${key}"]`)
	, keyDiv = document.getElementById(key)
	if (!audio) {
		return;
	}
	audio.currentTime = 0;
	audio.play();
	keyDiv.classList.add("keyshadow")
	setTimeout(()=>{keyDiv.classList.remove("keyshadow")},100)
});
div75.addEventListener("click", function() {
	const key = this.id
	, audio = document.querySelector(`audio[id="${key}"]`)
	, keyDiv = document.getElementById(key)
	if (!audio) {
		return;
	}
	audio.currentTime = 0;
	audio.play();
	keyDiv.classList.add("keyshadow")
	setTimeout(()=>{keyDiv.classList.remove("keyshadow")},100)
});
div76.addEventListener("click", function() {
	const key = this.id
	, audio = document.querySelector(`audio[id="${key}"]`)
	, keyDiv = document.getElementById(key)
	if (!audio) {
		return;
	}
	audio.currentTime = 0;
	audio.play();
	keyDiv.classList.add("keyshadow")
	setTimeout(()=>{keyDiv.classList.remove("keyshadow")},100)
});

window.addEventListener("keydown", playSound)
