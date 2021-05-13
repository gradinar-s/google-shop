import { sheetsAPI } from "../api/api";

// set data goods to state app
const SET_PRODUCT_CARD_DATA = "cardProduct/SET_PRODUCT_CARD_DATA";
// set goods to cart
const SET_PRODUCT_TO_CART = "cardProduct/SET_PRODUCT_TO_CART";
const SET_ADD_PRODUCT_TO_CART = "cartProduct/SET_ADD_PRODUCT_TO_CART";
// math
const INCREMENT_GOODS = "cardProduct/INCREMENT_GOODS";
const DECREMENT_GOODS = "cartProduct/DECREMENT_GOODS";
const REMOVE_FROM_CART = "cartProduct/REMOVE_FROM_CART";
// product already in cart (for styling)
const SET_ALREADY_IN_CART = "cartProduct/SET_ALREADY_IN_CART";
// set selected size
const SET_SELECT_SIZE = "cartProduct/SET_SELECT_SIZE";

const initialState = {
  products: [],
  cart: [],
  totalCost: [],
  sum: 0,
  isAlreadyInCart: false,
  isAddProduct: false,
  // page loading (render preloader)
  isLoaded: false,
};
export const cardProductReducer = (state = initialState, action) => {
  switch (action.type) {
    // set data in state
    case SET_PRODUCT_CARD_DATA: {
      return { ...state, products: action.data };
    }
    // set goods to cart
    case SET_PRODUCT_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.product],
        sum: state.sum + action.product.cost,
      };
    }
    // math
    case INCREMENT_GOODS: {
      const currentGoodsId = state.cart.findIndex(
        (item) => item.id === action.id
      );
      const newStateCart = [...state.cart];
      newStateCart[currentGoodsId].counter++;
      return {
        ...state,
        cart: [...newStateCart],
        sum: state.sum + state.cart[currentGoodsId].cost,
      };
    }
    case DECREMENT_GOODS: {
      const currentGoodsId = state.cart.findIndex(
        (item) => item.id === action.id
      );
      const newStateCart = [...state.cart];
      newStateCart[currentGoodsId].counter--;
      return {
        ...state,
        cart: [...newStateCart],
        sum: state.sum - state.cart[currentGoodsId].cost,
      };
    }
    case REMOVE_FROM_CART: {
      const currentGoodsId = state.cart.findIndex(
        (item) => item.id === action.id
      );

      let newStateCart = [...state.cart];
      const summa =
        newStateCart[currentGoodsId].cost *
        newStateCart[currentGoodsId].counter;

      newStateCart[currentGoodsId].counter = 1;
      newStateCart[currentGoodsId].selectSize = "";
      newStateCart.splice(currentGoodsId, 1);
      return {
        ...state,
        cart: [...newStateCart],
        sum: state.sum - summa,
        isAlreadyInCart: false,
      };
    }
    // validation add to cart
    case SET_ALREADY_IN_CART: {
      return { ...state, isAlreadyInCart: action.data };
    }
    case SET_ADD_PRODUCT_TO_CART: {
      return { ...state, isAddProduct: action.value };
    }
    // set selected size
    case SET_SELECT_SIZE: {
      let newStateCart = state.cart.map((product) => {
        product.selectSize = action.size;
        return product;
      });
      return { ...state, cart: [...newStateCart] };
    }
    default: {
      return state;
    }
  }
};

// set data in state
export const setProductCardDataAC = (data) => ({
  type: SET_PRODUCT_CARD_DATA,
  data,
});
// set goods to cart
export const setProductToCartAC = (product) => ({
  type: SET_PRODUCT_TO_CART,
  product,
});
// math
export const incrementGoodsAC = (id) => ({ type: INCREMENT_GOODS, id });
export const decrementGoodsAC = (id) => ({ type: DECREMENT_GOODS, id });
export const removeFromCartAC = (id) => ({ type: REMOVE_FROM_CART, id });
// validation add to cart
export const setAlreadyInCartAC = (data) => ({
  type: SET_ALREADY_IN_CART,
  data,
});
export const setAddProductToCart = (value) => ({
  type: SET_ADD_PRODUCT_TO_CART,
  value,
});
// set selected size
export const setSelectSize = (size) => ({
  type: SET_SELECT_SIZE,
  size,
});

// get and set goods
export const getProductCardDataTC = () => async (dispatch) => {
  const response = await sheetsAPI.getProduct();

  const data = response.feed.entry.map((item) => {
    return {
      id: item.gsx$id.$t,
      cost: Number(item.gsx$cost.$t),
      img: item.gsx$image.$t,
      name: item.gsx$name.$t,
      description: item.gsx$description.$t,
      quantity: Number(item.gsx$quantity.$t),
      availableSizes: item.gsx$size.$t.split(", "),
      counter: 1,
      selectSize: "",
    };
  });
  dispatch(setProductCardDataAC(data));
};
