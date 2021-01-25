document.addEventListener('DOMContentLoaded', function () {

     var checkbox = document.querySelector("input[id=enabler-slider]");
     //const port = chrome.runtime.connect({ name: 'poppingport' });

     checkbox.addEventListener('change', function() {
         if (this.checked) {
             var message = "Checked"
             console.log(message);
      } else {
        var message = "Unchecked"
        console.log(message);
      }
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {greeting: message}, function(response) {
            console.log(response.ack)})});
     })
  


},false)
