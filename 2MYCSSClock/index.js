const secondHand = document.querySelector(".sec")
const minuteHand = document.querySelector(".min")
const hourHand = document.querySelector(".hr")
function setDate () {
	const now = new Date()
			, secs = now.getSeconds()
			, mins = now.getMinutes()
			, hrs = now.getHours()
			, secondsDegrees = ((secs / 60) * 360)+90
			, minutesDegrees = ((mins / 60) * 360)+90
			, hoursDegrees = ((hrs / 12) * 360)+90

	secondHand.style.transform = `rotate(${secondsDegrees}deg)`
	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`
}

setInterval(setDate, 1000)
