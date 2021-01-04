import { getProduct } from "../api/api";

const SET_PRODUCT_CARD_DATA = "cardProduct/SET_PRODUCT_CARD_DATA";
const SET_PRODUCT_TO_CART = "cardProduct/SET_PRODUCT_TO_CART";
const INCREMENT_GOODS = "cardProduct/INCREMENT_GOODS";
const DECREMENT_GOODS = "cartProduct/DECREMENT_GOODS";
const REMOVE_FROM_CART = "cartProduct/REMOVE_FROM_CART";
const SET_TOTAL_COST = "cartProduct/SET_TOTAL_COST";

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
      };
    }
    case INCREMENT_GOODS: {
      const currentGoodsId = state.cart.findIndex((item) => item.id === action.id);
      const newStateCart = [...state.cart];
      newStateCart[currentGoodsId].counter++;
      return {
        ...state,
        cart: [...newStateCart],
      };
    }
    case DECREMENT_GOODS: {
      const currentGoodsId = state.cart.findIndex((item) => item.id === action.id);
      const newStateCart = [...state.cart];
      newStateCart[currentGoodsId].counter--;
      return {
        ...state,
        cart: [...newStateCart],
      };
    }
    case REMOVE_FROM_CART: {
      const currentGoodsId = state.cart.findIndex((item) => item.id === action.id);

      // Удаляет всё из массива, кроме элемента на который я нажал
      // const newStateCart = [...state.cart.splice(currentGoodsId, 1)];
      // Я говорю => Добавь в массив newStateCart то что удаляешь... Массив перезатирается, и там остаётся только 1 элемент (удалённый)

      let newStateCart = [...state.cart]; // В переменную newStateCart делаю копию массива cart
      newStateCart.splice(currentGoodsId, 1); // Удаляю из нового массива элемент начиная с индекса который определяю в currentGoodsId, 1 элемент
      return {
        ...state,
        cart: [...newStateCart],
      };
    }
    case SET_TOTAL_COST: {
      const newStateCart = [...state.cart];
      const totalCost = newStateCart.map((item) => item.cost * item.counter);
      const sum = totalCost.length ? totalCost.reduce((result, num) => result + num) : 0;
      return {
        ...state,
        cart: [...newStateCart],
        totalCost: [...totalCost],
        sum: sum,
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
export const setTotalCostAC = (id) => ({
  type: SET_TOTAL_COST,
  id,
});

export const getProductCardDataTC = () => async (dispatch) => {
  const response = await getProduct;
  const data = response.feed.entry.map((item) => {
    return {
      id: item.gsx$id.$t,
      cost: item.gsx$cost.$t,
      img: item.gsx$image.$t,
      name: item.gsx$name.$t,
      counter: 1,
    };
  });
  dispatch(setProductCardDataAC(data));
};
