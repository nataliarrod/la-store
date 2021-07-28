import axios from 'axios';

export const getProductList = async () => {
  const [error, data] = await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/products/list`)
    .then((response) => [null, response.data.data])
    .catch((err) => [err, err]);

  return [error, data];
};