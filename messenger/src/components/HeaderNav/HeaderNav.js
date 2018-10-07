import React,  { Component, Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import './HeaderNav.css';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';


export default class HeaderNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
          };
    }
    

    handleOpen = () => {
        this.setState({ open: true });
      };
    
    handleClose = () => {
        this.setState({ open: false });
      };

    handleSubmit = (current_user) => {
        /*fetch("/login").then(
            
        )
        .catch((err) => {
            console.log(err);
        })*/
        const { id, username, password } = current_user;
        this.props.onAddCurrentUser({id,username, password});
        this.props.onSetUsers();
        this.setState({ open: false });
    }
    handleNameInput = (e, value) => {

    }

    renderModalForm = () => ( 
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
        >
            <div className = "login">
                <Typography variant="title" id="modal-title">
                Log in
                </Typography>
                <Typography variant="subheading" id="simple-modal-description">
                  Write down you login and password!
                </Typography>
                <form>
                    <TextField
                        id="standard-name"
                        label="Name"
                        margin="normal"
                        ref="name"
                    />
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                    />
                </form>
                <div>
                    <Button variant="contained" color="primary" onClick = {() => this.handleSubmit({id:1,username:"Petr",password:"7777"})} className = "btn-login">
                        Log in
                    </Button>
                    <Button variant="contained" color="secondary" onClick = {this.handleClose} className = "btn-close">
                        Close
                    </Button>
                </div>
            </div>
        </Modal>)

    render() {
        return(
            <Fragment>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <IconButton color="inherit" aria-label="Menu">
                        
                        </IconButton>
                        <Typography variant="title" color="inherit">
                            Keep in touch!
                        </Typography>
                        <Button color="inherit" onClick = {() => this.handleOpen()}> Log in
                        </Button>
                    </Toolbar>
                </AppBar>
                { this.renderModalForm()}
            </Fragment>
        )
    }
}