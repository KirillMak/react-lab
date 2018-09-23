import { ACTIONS } from '../constants/ActionTypes';

const initialState = {
    chats: []
}

export default (state = initialState, action) => {
    switch (action.type){
        case ACTIONS.SHOW_CHATS:
            return {...state, chats: action.chats}
        default: 
            return state;
    }
}