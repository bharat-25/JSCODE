function delay(){
    console.log("Hii");
    setTimeout(function(){
        console.log("this is asynchronous");
    },2000);
    console.log("Bharat");
}

delay();