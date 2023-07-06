
  async function asyncFunction() {
    console.log("Start");
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Delayed message after 2s");
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log("End");
  }
  
  asyncFunction();