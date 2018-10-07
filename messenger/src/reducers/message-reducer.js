import { ACTIONS } from '../constants/ActionTypes';

const initialState = {
    messages: []
}

export default (state = initialState, action) => {
    switch (action.type){
        case ACTIONS.TOGGLE_MESSAGE:
            return {...state, messages: state.messages.concat({ chat_id: action.chat_id, from: action.user_id_from, to: action.user_id_to, text: action.text}) }
        default: 
            return state;
    }
}