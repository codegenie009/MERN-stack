import apisauce from 'apisauce';
import qs from 'qs';

export default token => {
  const api = apisauce.create({
    baseURL: `${process.env.REACT_APP_BACKEND_URL}/spaces`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    responseType: 'json',
    paramsSerializer: params => {
      return qs.stringify(params, { arrayFormat: 'brackets' });
    }
  });

  const list = params => api.get('', params);
  const get = id => api.get(id);
  const create = space => api.post('', space);
  const update = (id, space) => api.put(id, space);
  const remove = id => api.delete(id);

  return {
    list,
    get,
    create,
    update,
    remove
  };
};
