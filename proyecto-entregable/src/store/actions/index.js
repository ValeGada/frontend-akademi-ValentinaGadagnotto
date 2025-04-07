import products from '../../apis/products';
import { 
    ADD_PRODUCT, 
    FETCH_PRODUCTS, 
    FETCH_PRODUCT, 
    EDIT_PRODUCT, 
    DELETE_PRODUCT,
    CHANGE_PAGE,
    SET_MESSAGE,
    SET_IS_LOADING
} from './types';

// Action creators for each REST method
export const addProduct = values => async dispatch => {
    const response = await products.post('/products', values);

    dispatch ({ type: ADD_PRODUCT, payload: response.data });
};

export const fetchProducts = () => async dispatch => { 
    const response = await products.get('/products');

    dispatch ({ type: FETCH_PRODUCTS, payload: response.data });
};

export const fetchProduct = id => async dispatch => { 
    dispatch ({ type: SET_IS_LOADING, payload: true})
    const response = await products.get(`/products/${id}`);
    console.log("Fetched product:", response.data);

    dispatch ({ type: FETCH_PRODUCT, payload: response.data });
    dispatch ({ type: SET_IS_LOADING, payload: false})
};

export const editProduct = (id, values) => async dispatch => { 
    const response = await products.put(`/products/${id}`, values);

    dispatch ({ type: EDIT_PRODUCT, payload: response.data });

    setMessage('Producto editado correctamente');
};

export const deleteProduct = id => async dispatch => { 
    await products.delete(`/products/${id}`);

    dispatch ({ type: DELETE_PRODUCT, payload: id });

    setMessage('Producto eliminado correctamente');
};

export const changePage = page => {
    return { type: CHANGE_PAGE, payload: page};
}

export const setMessage = message => dispatch => {
    dispatch({ type: SET_MESSAGE, payload: message });

    setTimeout(() => {
        dispatch({ type: SET_MESSAGE, payload: null });
    }, 1800);
}

// Puede llegar a usarse
export const setIsLoading = value => {
    return { type: SET_IS_LOADING, payload: value };
};