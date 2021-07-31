import axiosProducts from '../../utils/apiClient';

export const getStoreProducts = async () => {
  const [error, data] = await axiosProducts.get('/products')
    .then((response) => [null, response])
    .catch((err) => [err, err]);

  return [error, data];
};
