"use strict";function stickNavigation(){$("#description").addClass("fixed").removeClass("absolute"),$("#navigation").addClass("hidden"),$("#sticky-navigation").removeClass("hidden")}function unStickNavigation(){}function isInBottom(){var n=$("#description"),t=n.height();return $(window).scrollTop()>$(window).height()-t}var sticky=!1,currentPosition=0,imageCounter=$("[data-name='image-counter']").attr("content");console.log(imageCounter),setInterval(function(){imageCounter>currentPosition?currentPosition++:currentPosition=0,$("#gallery .inner").css({left:"-"+100*currentPosition+"%"})},3e3),$("#menu-opener").on("click",function(){$("#responsive-nav ul").toggleClass("active")}),$(window).scroll(function(){var n=isInBottom();n&&!sticky?(sticky=!0,stickNavigation()):sticky&&(sticky=!1,unStickNavigation())});