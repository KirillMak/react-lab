import React,  { Component } from 'react';
import MenuLeft from '../MenuLeft';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Chat.css';
import { Paper } from '@material-ui/core';
import SimpleMDE from 'react-simplemde-editor';
import "simplemde/dist/simplemde.min.css";
 

export default class Chat extends Component {
    constructor(props){
        super(props)

        this.state = {
            mdeValue: ''
        }
    }

    handleKeyPress = (event, visible_chat_id) => {
        console.log(visible_chat_id);
        console.log(event.key);
        console.log(this.state.mdeValue);
        let mde = this.state.mdeValue;
        if(event.key == 'Enter'){
            //this.setState({ mdeValue: 'test' }, this.forceUpdate() );
            this.props.onSendMessageClick(visible_chat_id, 1, mde);
        }
      }

    handleChange = value => {
        //if (value instanceof String){
            this.setState({ mdeValue: value });
        //};
      };

    renderWelcomeMessage = () => (
        <span>Conversation is empty. Write a message to start the conversation!</span>
    )

    renderChatConversation = (messages) => (
        <span>
           { messages.map((message, idx) => (<div key = {idx}>{message.text}</div>)) }
        </span>
    )

    render(){
        console.log(this.props);
        let { messages } = this.props.messages;
        let { visible_chat_id } = this.props.visible_chat_id;
        //console.log(visible_chat_id);
        console.log(messages);
        //console.log("mde: ",this.state.mdeValue);
        return (
            <main className = "chat-layout">
                <div className = "conversation">
                    { visible_chat_id == -1 ? this.renderWelcomeMessage() : this.renderChatConversation(messages.filter(item => item.chat_id == visible_chat_id ))}
                </div>
                <div className = "editor">
                    <form onKeyDown={(event) => this.handleKeyPress(event, visible_chat_id)}>
                        <SimpleMDE
                            onChange={this.handleChange}
                            value = {this.state.mdeValue}
                        />
                        <Button variant="contained" color="primary" onClick = { ()=> this.props.onSendMessageClick(visible_chat_id, 1, this.state.mdeValue)}>
                            Send message
                        </Button>
                    </form>
                </div>
            </main>
        )
    }
}