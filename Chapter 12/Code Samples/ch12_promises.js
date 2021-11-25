let promise = new Promise(function (resolve, reject) {
    // do something that might take a while
    // let's just set x instead for this example  
    let x = 20;
    if (x > 10) {
        resolve(x); // on success
    } else {
        reject("Too low");  // on error
    }
});

promise.then(
    function (value) {
        console.log("Success:", value)
    },
    function (error) {
        console.log("Error:", error)
    }
);