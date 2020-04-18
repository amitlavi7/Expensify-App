const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'amit',
            age: 25
        });
        reject('errorrr');
    }, 1500);
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
    return 'yes';
}).then((str) => {
    console.log('does this run? ', str)
}).catch((error) => {
    console.log('error: ', error)
});

console.log('after');