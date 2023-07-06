
/*  Callbacks are functions that are passed as arguments to 
other functions and are executed after the main 
function has finished its execution  */

function asyncOperation(callback) {
    console.log("Start");
    setTimeout(() => {
      console.log("Delayed message");
      callback();
    }, 2000);
  }
  
  function callbackFunction() {
    console.log("End");
  }
  
  asyncOperation(callbackFunction);