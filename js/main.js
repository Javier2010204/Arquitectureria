let currentPosition = 0;
const imageCounter = $("[data-name='image-counter']").attr("content")
console.log(imageCounter)
setInterval(()=>{

	if (currentPosition < imageCounter) {
		currentPosition++;
	}else{
		currentPosition = 0;
	}

	$("#gallery .inner").css({
		left: "-"+currentPosition*100+"%"
	})
}, 3000)
