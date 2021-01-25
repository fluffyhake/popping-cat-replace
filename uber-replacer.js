// var image = document.querySelectorAll("img");
// var l = image.length

var poppingGif = chrome.runtime.getURL("popping.gif");
// console.log(poppingGif)

// for (let i = 0; i < l; i++) {
//   image[i].src= poppingGif
//   image[i].srcset= poppingGif
// }
console.log("POPPING PLUGIN INITIATED");
function replacepop() {
  if (activate = null && activate != False) {
    activate = True
  }
  if (activate = true) {
    
 
    var image = document.querySelectorAll("img")
    var l = image.length
    console.log("REPLACINGGGGG")
    for (let i = 0; i < l; i++) {
        image[i].src= poppingGif
        image[i].srcset= poppingGif
    }
}else{
  console.log("Not activated yet!")
}}

var enabled = document.querySelectorAll("enabler")

// chrome.runtime.onMessage.addListener(request,sender, sendResponse => {
//   console.log(request.sender)
//   sendResponse({ recieved: "Messege Recieved "+ request.greeting})
//   if (request.greeting === 'Checked') {
//       console.log('received a Checked message');

//   }else if (request.greeting === "Unchecked"){ 
//       console.log('recieved a Unchecked messege')

//     }
//   }
//   )
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "Checked"){
      sendResponse({ack: "recieved "+request.greeting});
      var activate = "True"
  }else if (request.greeting == "Unchecked") {
      sendResponse({ack: "recieved "+request.greeting})
      var activate = "False"
      
  }}
)




setInterval("replacepop()",500)