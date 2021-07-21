import axios from "axios";

// Base instanse for google sheets
export const instanceSheets = axios.create({
  baseURL: "https://spreadsheets.google.com/",
});

// Base instanse for telegram bot
export const instanceTelegramBot = axios.create({
  baseURL: "https://api.telegram.org/",
});

// Base instanse for firebase
export const instanceFirebase = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/",
});

export const instanceDataBase = axios.create({
  baseURL: "https://shop-847de-default-rtdb.firebaseio.com/",
});
