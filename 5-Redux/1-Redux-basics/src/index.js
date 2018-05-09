

console.log('-index.js-');
import 'bootstrap/dist/css/bootstrap.css';

import { combineReducers, createStore } from 'redux';

//--------------------------------------------------------------
//step-1 : action(s)
const INCREMENT = "increment";
const DECREMENT = "decrement";
const ADD_NEW_REVIEW = "add_new_review";
//--------------------------------------------------------------
// step-2 : action creator(s)
function increment(value) {
    return { type: INCREMENT, value };
}
function decrement(value) {
    return { type: DECREMENT, value };
}
function addNewReview(productId, newReview) {
    return { type: ADD_NEW_REVIEW, productId, newReview }
}
//--------------------------------------------------------------
// step-3: : reducer(s)
function counterReducer(state = { count: 0 }, action) {
    console.log('counterReducer()');
    switch (action.type) {
        case INCREMENT:
        case ADD_NEW_REVIEW:
            return Object.assign({}, { count: state.count + (action.value ? action.value : 1) });
        case DECREMENT:
            return Object.assign({}, { count: state.count - action.value });
        default:
            return state;
    }
}
function reviewsReducer(state = {}, action) {
    console.log('reviewsReducer()');
    switch (action.type) {
        case ADD_NEW_REVIEW: {
            let reviews = state[action.productId] || [];
            // existingReviews.concat(action.newReview);
            reviews = [...reviews, action.newReview];
            return Object.assign({}, state, { [action.productId]: reviews })
        }
        default:
            return state;
    }
}
//--------------------------------------------------------------

const rootReducer = combineReducers({
    counter: counterReducer,
    reviews: reviewsReducer
});

//--------------------------------------------------------------

// step-4 : store
const intialState = {
    counter: {
        count: 100
    },
    reviews: {
        "111": [
            { stars: 5, author: 'who@email.com', body: 'sample review' }
        ]
    }
};
const store = createStore(rootReducer, intialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//--------------------------------------------------------------

// plain-js view  / react  / angular

let incBtn = document.getElementById('incBtn');
let decBtn = document.getElementById('decBtn');
let lapReviewBtn = document.getElementById('lapReviewBtn');
let mobReviewBtn = document.getElementById('mobReviewBtn');

incBtn.addEventListener('click', () => {
    store.dispatch(increment(10));
});
decBtn.addEventListener('click', () => {
    store.dispatch(decrement(10));
});

lapReviewBtn.addEventListener('click', () => {
    store.dispatch(increment(10));
    store.dispatch(addNewReview('111', { stars: 2, author: 'nag@gmail.com', body: 'bla bla bla' }));
});
mobReviewBtn.addEventListener('click', () => {
    store.dispatch(addNewReview('222', { stars: 2, author: 'nag@gmail.com', body: 'bla bla bla' }));
});


let totalCountSpan = document.getElementById('totalCountSpan');

let state = store.getState()
let c = state.counter.count;
totalCountSpan.innerText = c;

store.subscribe(() => {
    console.log('subscribing counter state');
    let state = store.getState()
    let c = state.counter.count;
    totalCountSpan.innerText = c;
});

//--------------------------------------------------------------