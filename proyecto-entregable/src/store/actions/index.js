import products from '../../apis/products';
import { 
    ADD_PRODUCT, 
    FETCH_PRODUCTS, 
    FETCH_PRODUCT, 
    EDIT_PRODUCT, 
    DELETE_PRODUCT
} from './types';

// Action creators for each REST method
export const addProduct = formValues => async dispatch => {
    const response = await products.post('/products', formValues);

    dispatch ({ type: ADD_PRODUCT, payload: response.data });
};

export const fetchProducts = () => async dispatch => { 
    const response = await products.get('/products');

    dispatch ({ type: FETCH_PRODUCTS, payload: response.data });
};

export const fetchProduct = id => async dispatch => { 
    const response = await products.get(`/products/${id}`);

    dispatch ({ type: FETCH_PRODUCT, payload: response.data });
};

export const editProduct = (id, formValues) => async dispatch => { 
    const response = await products.put(`/products/${id}`, formValues);

    dispatch ({ type: EDIT_PRODUCT, payload: response.data });
};

export const deleteProduct = id => async dispatch => { 
    await products.delete(`/products/${id}`);

    dispatch ({ type: DELETE_PRODUCT, payload: id });
};

