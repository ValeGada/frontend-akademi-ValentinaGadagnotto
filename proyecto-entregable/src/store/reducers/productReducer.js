import { 
    ADD_PRODUCT, 
    FETCH_PRODUCTS, 
    FETCH_PRODUCT, 
    EDIT_PRODUCT, 
    DELETE_PRODUCT 
} from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type){
        case FETCH_PRODUCTS: 
            return action.payload;
        case FETCH_PRODUCT:
            return action.payload.id;
        case ADD_PRODUCT:
            return [...state, action.payload];
        case EDIT_PRODUCT:
            return state.map(product =>
                    product.id === action.payload.id ? action.payload : product
                );
        case DELETE_PRODUCT:
            return state.filter(product => product.id !== action.payload);
        default:
            return state;
    }
};