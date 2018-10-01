import { connect } from 'react-redux';
import { toggleMessage } from '../actions/messages';
import Chat from '../components/Chat';

const mapStateToProps = state => ({
    chats: state.chats,
    messages: state.messages,
    visible_chat_id: state.visible_chat_id
  });

const mapDispatchToProps = dispatch => ({
   onSendMessageClick: (chat_id, user_id, text) => {
      dispatch(toggleMessage(chat_id, user_id, text))
   }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);