/*
    To handle multiple asynchronous operations in JavaScript, we can use various techniques such as callbacks, 
    promises, and async/await. Here are some ways to handle multiple asynchronous operations:

    Using callbacks: We can use callbacks to handle multiple asynchronous operations by passing a callback 
    function to each asynchronous function and executing the callback function after all the asynchronous functions 
    have completed their execution
*/
function asyncOperation1(callback) {
    setTimeout(() => {
      console.log("Async operation 1 completed");
      callback();
    }, 2000);
  }
  
  function asyncOperation2(callback) {
    setTimeout(() => {
      console.log("Async operation 2 completed");
      callback();
    }, 1000);
  }
  
  function asyncOperation3(callback) {
    setTimeout(() => {
      console.log("Async operation 3 completed");
      callback();
    }, 3000);
  }
  
  function finalCallback() {
    console.log("All async operations completed");
  }
  
  asyncOperation1(() => {
    asyncOperation2(() => {
      asyncOperation3(() => {
        finalCallback();
      });
    });
  });