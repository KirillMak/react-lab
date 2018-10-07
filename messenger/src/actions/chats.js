import { ACTIONS } from '../constants/ActionTypes';

let nextChatId = 1;

export const addChat = (user_id1,user_id2) => ({
    type: ACTIONS.ADD_CHAT,
    messages: [],
    user_id1,
    user_id2,
    id: nextChatId++
})

export const toggleChat = (id) => ({
    type: ACTIONS.TOGGLE_CHAT,
    id
})

export const setChatBodyVisibility = (id) => ({
    type: ACTIONS.CHAT_BODY_VISIBILITY,
    id
})

export const showChatbyId = (id) => ({
    type: ACTIONS.SHOW_CHAT_BY_ID,
    id
})

export const showChats = (chats) => ({
    type: ACTIONS.SHOW_CHATS,
    chats
})