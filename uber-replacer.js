
var image = document.querySelectorAll("img");
var l = image.length

var poppingGif = chrome.runtime.getURL("popping.gif");
console.log(poppingGif)

for (let i = 0; i < l; i++) {
  image[i].src= poppingGif
  image[i].srcset= poppingGif
}

console.log("POPPING PLUGIN INITIATED");
function replacepop() {
    var image = document.querySelectorAll("img")
    var l = image.length
    console.log("REPLACINGGGGG")
    for (let i = 0; i < l; i++) {
        image[i].src= poppingGif
        image[i].srcset= poppingGif
    }
}

var enabled = document.querySelectorAll("enabler")

chrome.runtime.onMessage.addListener(function (request){
  var 
})



setInterval("replacepop()",500);