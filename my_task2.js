
setTimeout(function(){
postMessage("I\'m working before postMessage(\'ali\').");

}, 2000);

setTimeout(function(){

onmessage = function (oEvent) {
  postMessage("Hi " + oEvent.data);
};

}, 2000);