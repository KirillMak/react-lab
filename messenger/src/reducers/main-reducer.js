import chats from './chat-reducer';
import messages from './message-reducer';
import visible_chat_id from './visibility-reducer';
import current_user from './current_user-reducer';
import users from './user-reducer';
import { combineReducers } from 'redux';
//console.log(chatsReducer);

export default combineReducers({
    chats, 
    messages,
    visible_chat_id,
    current_user,
    users
});
