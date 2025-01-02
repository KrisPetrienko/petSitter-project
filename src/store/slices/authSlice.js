import { loginStart, loginSuccess, loginFailure } from './userSlice';
import axios from 'axios';

export const login = (credentials) => async (dispatch) => {
  dispatch(loginStart());

  try {
    const response = await axios.post('https://yourapi.com/login', credentials);
    const { user, token } = response.data;

    dispatch(loginSuccess({ user, token }));
  } catch (error) {
    dispatch(loginFailure({ error: error.message }));
  }
};