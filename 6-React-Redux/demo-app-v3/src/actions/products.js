
import { LOAD_PRODUCTS } from '../constants'

let apiURL = "http://localhost:8080/api/products";

// export function loadProducts() {
//     return { type: LOAD_PRODUCTS, products: [] };
// }

// Async Action
export function loadProducts() {
    return function (dispatch) {
        dispatch({ type: 'REQUEST_BEGIN', message: 'loading all products' })
        fetch(apiURL)
            .then(response => response.json())
            .then(products => {
                dispatch({ type: 'REQUEST_FINISHED', message: 'loading all products' })
                dispatch({ type: LOAD_PRODUCTS, products });
            })
    }
}