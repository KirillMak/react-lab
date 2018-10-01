import { ACTIONS } from '../constants/ActionTypes';

const initialState = {
    visible_chat_id: -1
}

export default (state = initialState, action) => {
    switch (action.type){
        case ACTIONS.CHAT_BODY_VISIBILITY:
            return {...state, visible_chat_id: action.id }
        default: 
            return state;
    }
}