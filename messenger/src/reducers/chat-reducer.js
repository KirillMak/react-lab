import { ACTIONS } from '../constants/ActionTypes';

const initialState = {
    chats: [],
    messages: []
}

export default (state = initialState, action) => {
    switch (action.type){
        case ACTIONS.ADD_CHAT:
            return {...state, chats: state.chats.concat({id:action.id, user_id1: action.user_id1, user_id2: action.user_id2, messages: []}), messages: state.messages }
        case ACTIONS.SHOW_CHATS:
            return {...state, chats: action.chats}
        default: 
            return state;
    }
}