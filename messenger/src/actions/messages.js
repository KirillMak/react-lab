import { ACTIONS } from '../constants/ActionTypes';

export const toggleMessage = (chat_id, user_id, text) => ({
    type: ACTIONS.TOGGLE_MESSAGE,
    chat_id,
    user_id,
    text
})