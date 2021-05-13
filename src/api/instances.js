import axios from "axios";

// Base instanse for google sheets
export const instanceSheets = axios.create({
  baseURL: "https://spreadsheets.google.com/",
});

// Base instanse for telegram bot
export const instanceTelegramBot = axios.create({
  baseURL: "https://api.telegram.org/",
});
