import React,  { Component } from 'react';
import './MenuLeft.css';

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

//import MenuLeftContainer from '../../containers/MenuLeftContainer';
import { connect } from 'react-redux';

export default class MenuLeft extends Component {
  state = {
    selectedIndex: 1,
  };

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };
  render() {
    console.log( this.props);
    let { chats } = this.props.chats;
    console.log(chats);
    return (
            <div className = "MenuLeft">

                <List component="nav" >
                    <ListItem>
                        <Button variant="fab" color="primary" aria-label="Add"  onClick = {() => this.props.onAddChatClick()}>
                            <AddIcon />
                        </Button>
                    </ListItem>

                    { chats.map((item, idx) => (
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
                            <ListItemText primary={"Chat " + item.id} />
                        </ListItem>
                    ))}
                </List>

        </div>
        )
    }
}



const mapStateToProps = state => ({
    chats: state.chats
  });
//console.log(MenuLeft);
connect(mapStateToProps)(MenuLeft);