export const getProduct = fetch(
  "https://spreadsheets.google.com/feeds/list/1NVHcPwl7wVG1E87jVy0w-Q6HL7OcUfq3E674tEj7vw0/od6/public/values?alt=json"
)
  .then((response) => response.json())
  .then((json) => json);

// Send message to telegram bot
export const sendOrderTelegramBot = (message) => {
  const token = "1846676872:AAHxkuehchRZKGuoDCfqp0Y8-CmyJSWr_vs";
  const chatId = "435055029";

  const nstr = "%0A";

  const textMassage = `
    New order from *${message.name}* ${nstr} ${nstr} 1) Phone: ${message.tel} ${nstr} 2) Email: ${message.email}
  `;

  return fetch(
    `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${textMassage}&parse_mode=markdown`
  )
    .then((response) => response.json())
    .then((json) => json);
};
