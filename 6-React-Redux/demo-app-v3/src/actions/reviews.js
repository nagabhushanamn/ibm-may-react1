

import { LOAD_REVIEWS, ADD_NEW_REVIEW } from '../constants';

// export function loadReviews(productId) {
//     //..
//     let reviews = [
//         { stars: 4, author: 'who@email.com', body: 'sample review' }
//     ];
//     return { type: LOAD_REVIEWS, productId, reviews }
// }

// or

export function loadReviews(productId) {
    return function (dispatch) {
        let apiURL = `http://localhost:8080/api/products/${productId}/reviews`;
        dispatch({ type: 'REQUEST_BEGIN', message: 'loading reviews' });
        fetch(apiURL)
            .then(response => response.json())
            .then(reviews => {
                dispatch({ type: 'REQUEST_FINISHED', message: '' });
                dispatch({ type: LOAD_REVIEWS, productId, reviews });
            })
    }
}

// export function addNewReview(productId, review) {
//     //..
//     return { type: ADD_NEW_REVIEW, productId, review }
// }

// or


export function addNewReview(productId, review) {
    let apiURL = `http://localhost:8080/api/products/${productId}/reviews`;
    return function (dispatch) {
        fetch(apiURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review)
        })
            .then(response => response.json())
            .then(review => {
                dispatch({ type: ADD_NEW_REVIEW, productId, review });
            })
    }
}
