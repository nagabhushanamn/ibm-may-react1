
import { BUY } from '../constants'

export function cartReducer(state = {}, action) {
    let item = action.item;
    let qty = action.qty;
    switch (action.type) {
        case BUY: {
            let line = state[item.code]
            if (!line) {
                line = { [item.code]: { item, qty } }
            } else {
                line = { [item.code]: { item, qty: line.qty + qty } }
            }
            return Object.assign({}, state, line)
        }
        default:
            return state;
    }
}