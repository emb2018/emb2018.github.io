// Your JavaScript code goes in this file


let changeColors=function(color) {
  jQuery(".lead").css("background-color", color)
}


let stopGoingToApple=function(event){
  event.preventDefault()
  window.alert("wazzzzzup!")
}
let removesection=functions(event){
  jQuery(this).parent().hide();
}

jQuery(".lead").on("click", removesection)

jQuery("#apple").on("click",stopGoingToApple)
