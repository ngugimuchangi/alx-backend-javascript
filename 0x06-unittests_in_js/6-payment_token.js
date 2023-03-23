/**
 * Checks state of payment token
 * @param   {boolean} success
 * @returns {promise}
 */
function getPaymentTokenFromAPI(success) {
  return new Promise((resolve) => {
    if (success) resolve({ data: 'Successful response from the API' });
  });
}

module.exports = getPaymentTokenFromAPI;
