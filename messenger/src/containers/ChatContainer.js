import { connect } from 'react-redux';
import { toggleMessage } from '../actions/messages';
import Chat from '../components/Chat';

import socketIOClient from "socket.io-client";


const mapStateToProps = state => ({
    chats: state.chats,
    messages: state.messages,
    current_user:state.current_user,
    visible_chat_id: state.visible_chat_id
  });

const mapDispatchToProps = dispatch => ({
   onSendMessageClick: (chat_id, user_id_from, user_id_to, text) => {
      dispatch(toggleMessage(chat_id, user_id_from, user_id_to, text))
   }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);