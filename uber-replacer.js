var image = document.querySelectorAll("img");
var l = image.length

for (let i = 0; i < l; i++) {
  image[i].src= "https://i.kym-cdn.com/photos/images/newsfeed/001/931/959/2e4.gif"
  image[i].srcset= "https://i.kym-cdn.com/photos/images/newsfeed/001/931/959/2e4.gif"
}

console.log("POPPING PLUGIN INITIATED");
function replacepop() {
    var image = document.querySelectorAll("img")
    var l = image.length
    console.log("REPLACINGGGGG")
    for (let i = 0; i < l; i++) {
        image[i].src= "https://i.kym-cdn.com/photos/images/newsfeed/001/931/959/2e4.gif"
        image[i].srcset= "https://i.kym-cdn.com/photos/images/newsfeed/001/931/959/2e4.gif"
    }
}

setInterval("replacepop()",500);