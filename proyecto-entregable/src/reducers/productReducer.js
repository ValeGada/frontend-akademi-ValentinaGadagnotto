import _, { mapKeys } from 'lodash';
import { 
    ADD_PRODUCT, 
    FETCH_PRODUCTS, 
    FETCH_PRODUCT, 
    EDIT_PRODUCT, 
    DELETE_PRODUCT 
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type){
        case FETCH_PRODUCTS: 
            return { ...state, ..._.mapKeys(action.payload, 'id') }; // _.mapKeys(array, 'key') --> turn array into object
        case FETCH_PRODUCT:
            return { ...state, [action.payload.id]: action.payload }; // Key interpolation syntax
        case ADD_PRODUCT:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_PRODUCT:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_PRODUCT:
            return _.omit(state, action.payload);
        default:
            return state;
    }
};