import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export function responseData(userWords) {
  const requestParams = {
    key: `49291442-2080f69002eb1568626ca7c49`,
    q: userWords,
    image_type: `photo`,
    orientation: `horizontal`,
    safesearch: true,
  };
  return axios
    .get(``, {
      params: requestParams,
    })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}
