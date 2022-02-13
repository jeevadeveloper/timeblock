import * as types from "./../types/authTypes";

//auth actions

const setUser = (data) => ({
    type:types.SET_USER,
    payload:data
});

//auth actioncreators

export const loginUser = (data) => (dispatch) => {
    dispatch(setUser(data));
}