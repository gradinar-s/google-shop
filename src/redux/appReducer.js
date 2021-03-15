// MDW - modal window
const OPEN_MDW_CART = "app/OPEN_MDW_CART";
const CLOSE_MDW_CART = "app/CLOSE_MDW_CART";

const OPEN_MDW_CHECKOUT = "app/OPEN_MDW_CHECKOUT";
const CLOSE_MDW_CHECKOUT = "app/CLOSE_MDW_CHECKOUT";

const SET_WINDOW_CLOSING_PROCESS = "app/SET_WINDOW_CLOSING_PROCESS";

const SET_COORDINATE_ELEMENT = "app/SET_COORDINATE_ELEMENT";
const SET_COORDINATES_ICON_CART = "app/SET_COORDINATES_ICON_CART";

const initialState = {
  // modal cart
  isOpenCart: false,
  // modal place order
  isOpenCheckout: false,
  // To animate when the modal window is closed
  windowClosingProcess: false,
  //
  coordinateElement: {},
  coordinatesIconCart: {},
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MDW_CART:
      return { ...state, isOpenCart: true };
    case CLOSE_MDW_CART:
      return { ...state, isOpenCart: false };
    // place order
    case OPEN_MDW_CHECKOUT:
      return { ...state, isOpenCheckout: true };
    case CLOSE_MDW_CHECKOUT:
      return { ...state, isOpenCheckout: false };
    //
    case SET_WINDOW_CLOSING_PROCESS:
      return { ...state, windowClosingProcess: action.value };
    //
    case SET_COORDINATE_ELEMENT:
      return { ...state, coordinateElement: action.coordinates };
    case SET_COORDINATES_ICON_CART:
      return { ...state, coordinatesIconCart: action.coordinates };
    default:
      return state;
  }
};

export const openCart = () => ({ type: OPEN_MDW_CART });
export const closeCart = () => ({ type: CLOSE_MDW_CART });
// modal window checkout
export const openWindowCheckout = () => ({ type: OPEN_MDW_CHECKOUT });
export const closeWindowCheckout = () => ({ type: CLOSE_MDW_CHECKOUT });

export const setWindowClosingProcess = (value) => ({
  type: SET_WINDOW_CLOSING_PROCESS,
  value,
});

// get coordinate
export const setCoordinateElement = (coordinates) => ({
  type: SET_COORDINATE_ELEMENT,
  coordinates,
});
export const setCoordinatesIconCart = (coordinates) => ({
  type: SET_COORDINATES_ICON_CART,
  coordinates,
});
