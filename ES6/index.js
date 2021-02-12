

// VANILLA JS


// ES6

const promise = new Promise( (resolve, reject)  => {
    // Here is a sync
    setTimeout( () => {
        reject( new Error("Something went wrong"));

    }), 2000;
});

promise.then( (data) => {
    console.log(data);
})
.catch( (err) => console.log(err));