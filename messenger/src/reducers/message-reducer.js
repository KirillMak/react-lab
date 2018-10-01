import { ACTIONS } from '../constants/ActionTypes';

const initialState = {
    messages: []
}

export default (state = initialState, action) => {
    //console.log("текущий state", state);
    switch (action.type){
        case ACTIONS.TOGGLE_MESSAGE:
            //let chat = state.chats.filter((chat,idx) => chat.id = action.id);
            //chat.messages.concat(action.text);
            return {...state, messages: state.messages.concat({ chat_id: action.chat_id, user_id: action.user_id, text: action.text}) }
        default: 
            return state;
    }
}