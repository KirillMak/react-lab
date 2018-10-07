import { ACTIONS } from '../constants/ActionTypes';

const initialState = {
   current_user: {}
}

export default (state = initialState, action) => {
    switch (action.type){
        case ACTIONS.ADD_CURRENT_USER:
            return {...state, current_user: action.user }
        default: 
            return state;
    }
}