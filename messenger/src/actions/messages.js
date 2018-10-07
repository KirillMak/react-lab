import { ACTIONS } from '../constants/ActionTypes';

export const toggleMessage = (chat_id, user_id_from, user_id_to, text) => ({
    type: ACTIONS.TOGGLE_MESSAGE,
    chat_id,
    user_id_from,
    user_id_to,
    text
})