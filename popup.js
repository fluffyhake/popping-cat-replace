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
  
// TESTING THE NEW BUTTON!
      $(function(){
        //default value is "start"
        var currentState = localStorage.currentState || "start";
        //cache button DOM element reference
        var $toggleBtn = $("#toggle-btn");

        //update button status
        if(currentState==="stop"){
            $toggleBtn.text("OFF");
        }

        //register button click handler
        $toggleBtn.click(function(){
            if(currentState==="start"){
                $toggleBtn.text("OFF");
                localStorage.currentState="stop";
            }
            if(currentState==="stop"){
                $toggleBtn.text("ON");
                localStorage.currentState="start";
            }
        });
      });




},false)


