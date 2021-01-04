export const getProduct = fetch(
  "https://spreadsheets.google.com/feeds/list/1NVHcPwl7wVG1E87jVy0w-Q6HL7OcUfq3E674tEj7vw0/od6/public/values?alt=json"
)
  .then((response) => response.json())
  .then((json) => json);
