

/*
    imp-note : after event , all callbacks always executes async

    ------------------------------------------------------


    Async API

    1. Promise API
    2. RxJS ( Reactive eXtension for javaScript )


*/

// 1. Promise API

// Hotel module (service)
//----------------------------------------------------

let hotel = {
    getFood: function () {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                //console.log('rejecting hotel promise...');
                //reject("d-boys r busy"); return;
                setTimeout(() => {
                    console.log('resolving hotel promise...');
                    resolve("biryani");
                }, 5000)
            }, 3000);
        });
        return promise;
    }
};

//----------------------------------------------------


// Bar module (service)
//----------------------------------------------------

let bar = {
    getDrink: function () {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('resolving bar promise...');
                resolve('BEER');
            }, 3000);
        });
        return promise;
    }
};

//----------------------------------------------------


// Peron module  ( UI )
//----------------------------------------------------

let person = {
    doWork: function () {
        console.log('person working....');
        console.log('feels hungry, requesting food on hotel');
        let promise1 = hotel.getFood();
        let promise2 = bar.getDrink();
        console.log('got promise, defering actions to future');
        Promise.race([promise1,promise2]).then(
            (result) => { console.log('yummy ' + result); },
            (error) => { console.log('oops ' + error); }
        );
        console.log('can cont with other work....');
    }
};
person.doWork()

//----------------------------------------------------