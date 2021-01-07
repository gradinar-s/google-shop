import { getProduct } from "../api/api";

const SET_PRODUCT_CARD_DATA = "cardProduct/SET_PRODUCT_CARD_DATA";
const SET_PRODUCT_TO_CART = "cardProduct/SET_PRODUCT_TO_CART";
const INCREMENT_GOODS = "cardProduct/INCREMENT_GOODS";
const DECREMENT_GOODS = "cartProduct/DECREMENT_GOODS";
const REMOVE_FROM_CART = "cartProduct/REMOVE_FROM_CART";

const initialState = {
  products: [],
  cart: [],
  totalCost: [],
  sum: 0,
  isLoaded: false,
};
export const cardProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_CARD_DATA: {
      return {
        ...state,
        products: action.data,
      };
    }
    case SET_PRODUCT_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.product],
        sum: state.sum + action.product.cost,
      };
    }
    case INCREMENT_GOODS: {
      const currentGoodsId = state.cart.findIndex((item) => item.id === action.id);
      const newStateCart = [...state.cart];
      newStateCart[currentGoodsId].counter++;
      return {
        ...state,
        cart: [...newStateCart],
        sum: state.sum + state.cart[currentGoodsId].cost,
      };
    }
    case DECREMENT_GOODS: {
      const currentGoodsId = state.cart.findIndex((item) => item.id === action.id);
      const newStateCart = [...state.cart];
      newStateCart[currentGoodsId].counter--;
      return {
        ...state,
        cart: [...newStateCart],
        sum: state.sum - state.cart[currentGoodsId].cost,
      };
    }
    case REMOVE_FROM_CART: {
      const currentGoodsId = state.cart.findIndex((item) => item.id === action.id);
      let newStateCart = [...state.cart];
      const summa = newStateCart[currentGoodsId].cost * newStateCart[currentGoodsId].counter;
      newStateCart[currentGoodsId].counter = 1;
      newStateCart.splice(currentGoodsId, 1);
      return {
        ...state,
        cart: [...newStateCart],
        sum: state.sum - summa,
      };
    }
    default: {
      return state;
    }
  }
};

export const setProductCardDataAC = (data) => ({
  type: SET_PRODUCT_CARD_DATA,
  data,
});
export const setProductToCartAC = (product) => ({
  type: SET_PRODUCT_TO_CART,
  product,
});
export const incrementGoodsAC = (id) => ({
  type: INCREMENT_GOODS,
  id,
});
export const decrementGoodsAC = (id) => ({
  type: DECREMENT_GOODS,
  id,
});
export const removeFromCartAC = (id) => ({
  type: REMOVE_FROM_CART,
  id,
});

export const getProductCardDataTC = () => async (dispatch) => {
  const response = await getProduct;
  const data = response.feed.entry.map((item) => {
    return {
      id: item.gsx$id.$t,
      cost: Number(item.gsx$cost.$t),
      img: item.gsx$image.$t,
      name: item.gsx$name.$t,
      description: item.gsx$description.$t,
      quantity: Number(item.gsx$quantity.$t),
      size: item.gsx$size.$t.split(","),
      counter: 1,
    };
  });
  dispatch(setProductCardDataAC(data));
};
