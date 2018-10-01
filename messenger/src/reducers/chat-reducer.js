import { ACTIONS } from '../constants/ActionTypes';

const initialState = {
    chats: [],
    messages: []
}

export default (state = initialState, action) => {
    //console.log("текущий state", state);
    switch (action.type){
        case ACTIONS.ADD_CHAT:
            return {...state, chats: state.chats.concat({id:action.id, messages: []}), messages: state.messages }
        case ACTIONS.SHOW_CHATS:
            return {...state, chats: action.chats}
        default: 
            return state;
    }
}