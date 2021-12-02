const promise = new Promise((fulfill, reject) => {
    fulfill('success!');
    //reject('oops...');
})
    .then(value => {
        console.log(value);
        return 'we';
    })
    .then(value => {
        console.log(value);
        return 'can';
    })
    .then(value => {
        console.log(value);
        return 'chain';
    })
    .then(value => {
        console.log(value);
        return 'promises';
    })
    .then(value => {
        console.log(value);
    })
    .catch(value => {
        console.log(value);
    })
