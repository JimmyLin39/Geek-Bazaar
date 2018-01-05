import * as actions from './actions';
import * as getters from './getters';

const initialState = {
  email: '',
  password: '',
  errors: '',
  cookies: false,
}

// mutations:
const mutations = {
}

export default {
  state: { ...initialState },
  actions,
}
