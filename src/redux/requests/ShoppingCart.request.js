import axiosProducts from '../../utils/apiClient';

export const getStoreProducts = async () => {
  const [error, data] = await axiosProducts.get('/store/products')
    .then((response) => [null, response.data])
    .catch((err) => [err, err]);

  return [error, data];
};
