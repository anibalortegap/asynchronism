const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Do Something Async!'), 3000)
            : reject(new Error('Test Error'))
    });
}

//create an async function for the promise resolve
const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('Before');
doSomething();
console.log('After');

//create an async function for error handling
const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something);

    } catch (error) {
        console.log(error)
    }
}

console.log('Before 1');
anotherFunction();
console.log('After 1');