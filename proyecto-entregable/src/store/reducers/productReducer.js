import {
    ADD_PRODUCT,
    FETCH_PRODUCTS,
    FETCH_PRODUCT,
    EDIT_PRODUCT,
    DELETE_PRODUCT,
    CHANGE_PAGE
  } from "../actions/types";
  
  const initialState = {
    all: [],
    selected: null,
    currentPage: 1
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PRODUCTS:
        return { ...state, all: action.payload };
  
      case FETCH_PRODUCT:
        return { ...state, selected: action.payload };
  
      case ADD_PRODUCT:
        return { ...state, all: [...state.all, action.payload] };
  
      case EDIT_PRODUCT:
        return {
          ...state,
          all: state.all.map((p) =>
            p.id === action.payload.id ? action.payload : p
          ),
          selected:
            state.selected?.id === action.payload.id ? action.payload : state.selected,
        };
  
      case DELETE_PRODUCT:
        return {
          ...state,
          all: state.all.filter((p) => p.id !== action.payload),
          selected:
            state.selected?.id === action.payload ? null : state.selected,
        };

      case CHANGE_PAGE:
        return { ...state, currentPage: action.payload }
      
      default:
        return state;
    }
  };