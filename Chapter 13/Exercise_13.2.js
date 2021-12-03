const myPromise = new Promise((resolve, reject) => {
    resolve("Start Counting");
});

function counter(val){
    console.log(val);
}

myPromise
  .then(value => {counter(value); return "one"})
  .then(value => {counter(value); return "two"})
  .then(value => {counter(value); return "three"})
  .then(value => {counter(value);});
