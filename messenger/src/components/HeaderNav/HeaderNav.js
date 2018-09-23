import React,  { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import './HeaderNav.scss';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';



export default class HeaderNav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <IconButton color="inherit" aria-label="Menu">
                        
                        </IconButton>
                        <Typography variant="title" color="inherit">
                            Photos
                        </Typography>
                    </Toolbar>
                </AppBar>
            
        )
    }
}