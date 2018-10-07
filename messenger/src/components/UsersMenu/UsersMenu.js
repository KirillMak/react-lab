import React,  { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';

//import MenuLeftContainer from '../../containers/MenuLeftContainer';
import { connect } from 'react-redux';

export default class UsersMenu extends Component {
  state = {
    selectedIndex: 1,
  };

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };
  render() {
    
    let users  = [{id: 1, username: "Petr", surname: "Alexandrov" },{id: 2, username: "Ivan", surname: "Alexandrov" }];
    let { current_user } = this.props.current_user;
    return (
            <div className = "UsersMenu">
                <List component="nav" >
                    <ListItem>
                        <Typography variant="title" gutterBottom>
                            Users
                        </Typography>
                    </ListItem>
                    <Divider/>
                    { users.map((item, idx) => (
                        <ListItem 
                            key = {idx}
                            button
                            selected={this.state.selectedIndex === idx}
                            onClick={event =>  { 
                                                    this.handleListItemClick(event, idx);
                                                    this.props.onSetChatVisibility(idx);
                                                }
                                    }
                        >
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary={`${item.id} ${item.username} ${item.surname}`} />
                            <Button variant="fab" color="primary" aria-label="Add"  onClick = {() => this.props.onAddChatClick(Number(current_user.id), ++idx)}>
                                <AddIcon />
                            </Button>
                        </ListItem>
                    ))}
                </List>

        </div>
        )
    }
}



const mapStateToProps = state => ({
    users: state.users
  });
//console.log(MenuLeft);
connect(mapStateToProps)(UsersMenu);