import { connect } from 'react-redux';
import MenuLeft from '../components/MenuLeft';
import { addChat } from '../actions/chats';
import { setChatBodyVisibility } from '../actions/chats';
import UsersMenu from '../components/UsersMenu';

const mapStateToProps = state => ({
    chats: state.chats,
    users:state.users,
    current_user:state.current_user,
    visible_chat_id: state.visible_chat_id
  });

const mapDispatchToProps = dispatch => ({
   onAddChatClick: (user_id1, user_id2) => {
      dispatch(addChat(user_id1, user_id2));
   },
   onSetChatVisibility: (id) => {
     dispatch(setChatBodyVisibility(id));
   }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersMenu);