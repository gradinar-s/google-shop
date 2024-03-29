import { telegramBotAPI } from "../api/api";
import { readCookie } from "../helpers/functions/common";
import { setAuthManager } from "./authReducer";
import { getProductCardDataTC } from "./cardProductReducer";

const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS";
// *** MDW - modal window
// modal window cart
const OPEN_MDW_CART = "app/OPEN_MDW_CART";
const CLOSE_MDW_CART = "app/CLOSE_MDW_CART";
// modal window place order
const OPEN_MDW_CHECKOUT = "app/OPEN_MDW_CHECKOUT";
const CLOSE_MDW_CHECKOUT = "app/CLOSE_MDW_CHECKOUT";
// modal window auth
const OPEN_MDW_AUTH = "app/OPEN_MDW_AUTH";
const CLOSE_MDW_AUTH = "app/CLOSE_MDW_AUTH";
// window closing process
const SET_WINDOW_CLOSING_PROCESS = "app/SET_WINDOW_CLOSING_PROCESS";
// coordinates
const SET_COORDINATE_ELEMENT = "app/SET_COORDINATE_ELEMENT";
const SET_COORDINATES_ICON_CART = "app/SET_COORDINATES_ICON_CART";
// set message sending status
const SET_MESSAGE_SEND_STATUS = "app/SET_MESSAGE_SEND_STATUS";

const initialState = {
  initializedApp: false,
  // modal window cart
  isOpenCart: false,
  // modal window place order
  isOpenCheckout: false,
  // modal window auth
  isOpenAuth: false,
  // To animate when the modal window is closed
  windowClosingProcess: false,
  // coordinates
  coordinateElement: {},
  coordinatesIconCart: {},
  // check send order tg bot
  isMessageSentSuccess: null,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return { ...state, initializedApp: true };
    // modal window cart
    case OPEN_MDW_CART:
      return { ...state, isOpenCart: true };
    case CLOSE_MDW_CART:
      return { ...state, isOpenCart: false };
    // modal window place order
    case OPEN_MDW_CHECKOUT:
      return { ...state, isOpenCheckout: true };
    case CLOSE_MDW_CHECKOUT:
      return { ...state, isOpenCheckout: false };
    // modal window auth
    case OPEN_MDW_AUTH:
      return { ...state, isOpenAuth: true };
    case CLOSE_MDW_AUTH:
      return { ...state, isOpenAuth: false };
    // window closing process
    case SET_WINDOW_CLOSING_PROCESS:
      return { ...state, windowClosingProcess: action.value };
    // coordinates
    case SET_COORDINATE_ELEMENT:
      return { ...state, coordinateElement: action.coordinates };
    case SET_COORDINATES_ICON_CART:
      return { ...state, coordinatesIconCart: action.coordinates };
    // set message sending status
    case SET_MESSAGE_SEND_STATUS:
      return { ...state, isMessageSentSuccess: action.status };
    default:
      return state;
  }
};

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });
// modal window cart
export const openCart = () => ({ type: OPEN_MDW_CART });
export const closeCart = () => ({ type: CLOSE_MDW_CART });
// modal window place order
export const openWindowCheckout = () => ({ type: OPEN_MDW_CHECKOUT });
export const closeWindowCheckout = () => ({ type: CLOSE_MDW_CHECKOUT });
// modal window auth
export const openWindowAuth = () => ({ type: OPEN_MDW_AUTH });
export const closeWindowAuth = () => ({ type: CLOSE_MDW_AUTH });
// window closing process (for animation)
export const setWindowClosingProcess = (value) => ({
  type: SET_WINDOW_CLOSING_PROCESS,
  value,
});
// get the coordinates of an element on the page
export const setCoordinateElement = (coordinates) => ({
  type: SET_COORDINATE_ELEMENT,
  coordinates,
});
export const setCoordinatesIconCart = (coordinates) => ({
  type: SET_COORDINATES_ICON_CART,
  coordinates,
});
// set message sending status
export const setMessageSendStatus = (status) => ({
  type: SET_MESSAGE_SEND_STATUS,
  status,
});

// Smoothly closing a modal window
export const smoothlyCloseModalWindow =
  (closeAction, ...otherActions) =>
  async (dispatch) => {
    const ANIMATION_TIME = 210;
    dispatch(setWindowClosingProcess(true));
    setTimeout(() => {
      dispatch(closeAction());
      dispatch(setWindowClosingProcess(false));
      // Additional actions are performed here if they were specified
      if (otherActions.length) {
        otherActions.forEach((action) => {
          dispatch(action());
        });
      }
    }, ANIMATION_TIME);
  };

// initialization of the application
export const initializeApp = () => async (dispatch) => {
  const initialized = dispatch(getProductCardDataTC());

  // If a cookie exists "rememberManager" install an authorized manager
  const rememberManager = readCookie("rememberManager");
  if (rememberManager) {
    dispatch(setAuthManager());
  }

  // After all promises are executed, initialization is successful
  await Promise.all([initialized]);
  dispatch(initializedSuccess());
};

// send message to telegram bot
export const sendMessageTelegramBot = (message) => async (dispatch) => {
  const data = await telegramBotAPI.sendOrderTelegramBot(message);
  dispatch(setMessageSendStatus(data.ok));
};
