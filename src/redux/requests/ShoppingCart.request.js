import axiosProducts from '../../utils/apiClient';

export const getStoreProducts = async () => {
  const [error, data] = await axiosProducts.get('/product/list')
    .then((response) => [null, response.data])
    .catch((err) => [err, err]);

  return [error, data];
};
