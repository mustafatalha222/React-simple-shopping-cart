import {PROMO} from './type';

export const handlerc=e =>dispatch=>{
dispatch({
    type: PROMO, payload: e.target.value
})
}

