import React,  { Component } from 'react';
import socketIOClient from "socket.io-client";
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

    sendMessage = () => {
        const socket = socketIOClient("localhost:3000");
        socket.emit('send_message', this.state.mdeValue);
      }
    setColor = (color) => {
        this.setState({ color })
      }

    handleKeyPress = (event, visible_chat_id) => {
        let mde = this.state.mdeValue;
        let { current_user, chats } = this.props;
        console.log(this.props)
        if(event.key == 'Enter'){
            this.props.onSendMessageClick(visible_chat_id, current_user.current_user.id, chats.chats[visible_chat_id].user_id2, mde)
        }
      }

    handleChange = value => {
            this.setState({ mdeValue: value });
      };

    renderWelcomeMessage = () => (
        <span>Conversation is empty. Write a message to start the conversation!</span>
    )

    renderChatConversation = (messages) => {
        const current_user = this.props.current_user.current_user;

        return(
            <div>
            { messages.map((message, idx) => {
                if (message.from === current_user.id) {
                    return (<div key = {idx} className = "from_current_user">{message.text}</div>)
                } else {
                    return (<div key = {idx} className = "to_current_user">{message.text}</div>)
                } 
                })
            }
            </div>
    )}

    render(){
        let { chats } = this.props.chats;
        let { messages } = this.props.messages;
        let { visible_chat_id } = this.props.visible_chat_id;
        let { current_user } = this.props.current_user;
        
        const socket = socketIOClient("localhost:3000");
        socket.on('send_message', (message) => {
            this.props.onSendMessageClick(visible_chat_id, 1, message);
        })
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
                        <Button variant="contained" color="primary" onClick = { ()=> this.props.onSendMessageClick(visible_chat_id, current_user.id, chats[visible_chat_id].user_id2, this.state.mdeValue)}>
                            Send message
                        </Button>
                    </form>
                </div>
            </main>
        )
    }
}