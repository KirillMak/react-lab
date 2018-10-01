import React,  { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuLeftContainer from '../../containers/MenuLeftContainer';
import ChatContainer from '../../containers/ChatContainer';
import './MainScreen.css';

export default class MainScreen extends Component {
    constructor(props){
        super(props)
    }


    render(){
        return (
            <div className = "MainScreen">
                <Grid  container spacing={24} 
                       className = "main-screen-layout" 
                >
                    <Grid item xs={3}>
                        <Paper>
                            <MenuLeftContainer/>
                        </Paper>
                    </Grid>
                    <Grid item xs={9}>
                        <ChatContainer/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}