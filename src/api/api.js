import {
  instanceFirebase,
  instanceSheets,
  instanceTelegramBot,
} from "./instances";

// API google sheets
export const sheetsAPI = {
  // Get product list from google sheets
  getProduct() {
    return instanceSheets
      .get(
        "feeds/list/1NVHcPwl7wVG1E87jVy0w-Q6HL7OcUfq3E674tEj7vw0/od6/public/values?alt=json"
      )
      .then((response) => response.data);
  },
};

// API telegram bot
export const telegramBotAPI = {
  // Send message to telegram bot
  sendOrderTelegramBot(message) {
    const token = "1846676872:AAHxkuehchRZKGuoDCfqp0Y8-CmyJSWr_vs";

    const chatIds = ["435055029"];

    const nstr = "%0A";

    const textMassage = `
      New order from *${message.name}* ${nstr} ${nstr} 1) Phone: ${message.tel} ${nstr} 2) Email: ${message.email}
    `;

    for (let i = 0; i <= chatIds.length; i++) {
      return instanceTelegramBot
        .get(
          `bot${token}/sendMessage?chat_id=${chatIds[i]}&text=${textMassage}&parse_mode=markdown`
        )
        .then((response) => response.data);
    }
  },
};

// API firebase auth marager
export const firebaseAuthAPI = {
  authManager(email, password) {
    const apiKey = "AIzaSyCQFmGuGH3BwNBocQvDPvrDhIAthNlWmx8";

    return instanceFirebase
      .post(`accounts:signInWithPassword?key=${apiKey}`, {
        email,
        password,
        returnSecureToken: "true",
      })
      .then((response) => response.data);
  },
};
