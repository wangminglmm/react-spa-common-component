import { combineReducers } from 'redux';
import { SET_USER, SIGN_OUT } from './action';
const initUser = {
  userName: 'wangming'
};
export function user(state = initUser, action){
  switch(action.type){
    case SET_USER:
    return {
      ...state,
      ...action.payload
    }
    case SIGN_OUT:
    return {}
    default:
    return state
  }
}
export default combineReducers({
  user
})