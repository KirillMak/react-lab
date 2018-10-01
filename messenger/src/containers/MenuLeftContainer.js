import { connect } from 'react-redux';
import MenuLeft from '../components/MenuLeft';
import { addChat } from '../actions/chats';
import { setChatBodyVisibility } from '../actions/chats';

const mapStateToProps = state => ({
    chats: state.chats,
    visible_chat_id: state.visible_chat_id
  });

const mapDispatchToProps = dispatch => ({
   onAddChatClick: () => {
      dispatch(addChat());
   },
   onSetChatVisibility: (id) => {
     dispatch(setChatBodyVisibility(id));
   }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuLeft);