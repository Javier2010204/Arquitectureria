let sticky = false

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

$("#menu-opener").on("click", function(){
	$("#responsive-nav ul").toggleClass("active")
})

$(window).scroll(()=>{
	const inBottom = isInBottom()

	if(inBottom && !sticky){
		sticky = true
		stickNavigation()
	}else if(sticky){
		sticky = false
		unStickNavigation()
	}
})

function stickNavigation(){
	$("#description").addClass("fixed").removeClass("absolute")
	$("#navigation").addClass("hidden")
	$("#sticky-navigation").removeClass("hidden")
}

function unStickNavigation(){
	$("#description").removeClass("fixed").addClass("absolute")
	$("#navigation").removeClass("hidden")
	$("#sticky-navigation").addClass("hidden")
}

function isInBottom(){
	const $description = $('#description')
	const descriptionHeight = $description.height()

	return $(window).scrollTop() > $(window).height() - descriptionHeight
}
