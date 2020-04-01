const somethingWillHappen = (boolean) => {
    return new Promise((resolve, reject) => {
        if(boolean) {
            resolve('Hey!');
        } else {
            reject('Whoops!');
        }
    });
};

somethingWillHappen(true)
    .then(response => console.log(response))
    .catch(err => console.log(err))

somethingWillHappen(false)
    .then(response => console.log(response))
    .catch(err => console.log(err))

const somethingWillHappen2 = (boolean) => {
    return new Promise((resolve, reject) => {
        if(boolean) {
            setTimeout(() => {
                resolve('Hey!');
            }, 5000);
        } else {
            const error = new Error('Whoops!');
            reject(error);
        }
    });
};


somethingWillHappen2(true)
    .then(response => console.log(response))
    .catch(err => console.log(err))

somethingWillHappen2(true)
    .then(response => console.log(response))
    .catch(err => console.log(err))

//run multiples promises
Promise.all([somethingWillHappen(true), somethingWillHappen2(true)])
    .then(response => {
        //return array of promises
        console.log('Array of results: ', response);
    })
    .catch(err => {
        console.error(err)
    })