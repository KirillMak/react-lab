import { ACTIONS } from '../constants/ActionTypes';

export const addChat = (id) => {
    type: ACTIONS.ADD_CHAT,
    id
}

export const showChats = (chats) => {
    type: ACTIONS.SHOW_CHATS,
    chats
}