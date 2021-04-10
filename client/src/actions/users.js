import * as api from '../utils/api';

export const FETCH_USER = 'FETCH_USER';
export const CREATE_USER = 'CREATE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';

export const getUser = (id) => async (dispatch) => {
    try {
        const { user } = await api.fetchUser(id);
        dispatch({ type: FETCH_USER, payload: user});
    } catch (error) {
        console.log(error.message);
    }
};

export const createUser = (newUser) => async (dispatch) => {
    try {
        const { user } = await api.createUser(newUser);
        dispatch({ type: CREATE_USER, payload: user });
    } catch (error) {
        console.log(error.message);
    }
};

export const updateUser = (id, updatedUser) => async (dispatch) => {
    try {
      const { user } = await api.updateUser(id, updatedUser);
  
      dispatch({ type: UPDATE_USER, payload: user });
    } catch (error) {
      console.log(error.message);
    }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await api.deleteUser(id);

    dispatch({ type: DELETE_USER, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};