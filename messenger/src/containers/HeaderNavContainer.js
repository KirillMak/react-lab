import { connect } from 'react-redux';
import HeaderNav from '../components/HeaderNav';
import { addCurrentUser, setUsers } from '../actions/users';


const mapStateToProps = state => ({
    current_user: state.current_user,
    users:state.users
  });

const mapDispatchToProps = dispatch => ({
   onAddCurrentUser: (user) => {
     dispatch(addCurrentUser(user));
   },
   onSetUsers: (users) => {
    dispatch(setUsers(users));
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderNav);