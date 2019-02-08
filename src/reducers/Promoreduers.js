import {PROMO} from '../actions/type';

const initialstate={
    value:'', open:false
}
export const reducerName = (state = initialstate, action) => {
    switch (action.type) {
        case PROMO:
            return {...state,value: action.payload}
        default:
            return state
    }
}