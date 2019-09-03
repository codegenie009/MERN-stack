import createProfileAPi from './ProfileApi';

import { getStore } from '../redux/store';
import MainActions from '../redux/MainRedux';

const API_MAP = {
  profile: createProfileAPi
};

export default async function request(apiName, func, params = [], apiOptions) {
  const store = getStore();
  const createApi = API_MAP[apiName];

  if (!createApi) {
    throw new Error(`API ${apiName} not found`);
  }

  const api = createApi(apiOptions);
  store.dispatch(MainActions.setLoading(true));
  const resp = await api[func](...params);
  store.dispatch(MainActions.setLoading(false));
  return resp;
}
