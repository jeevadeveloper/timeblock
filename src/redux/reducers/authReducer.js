import * as types from "./../types/authTypes";
const initialState = {
    isLoggedIn: false,
    user:null,
    user_id:null
}

const authReducer = (state=initialState,{type,payload}) => {
      switch(type) {
          case types.SET_USER:
              state = [{isLoggedIn:true,user:payload.user,user_id:payload.id}];
              return state;
          case types.RESET_USER:
              state = initialState;
              return state;
          default:
              return state;
      }
}

export default authReducer;