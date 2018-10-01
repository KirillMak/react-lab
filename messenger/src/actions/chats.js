import { ACTIONS } from '../constants/ActionTypes';

let nextChatId = 1;

export const addChat = () => ({
    type: ACTIONS.ADD_CHAT,
    messages: [],
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