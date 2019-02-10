import React, { Component } from 'react';
import './../style/header.css';
import fire from '../fire';

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {message:[]};
    }

    componentWillMount(){
        let messagesRef = 
        fire.database().ref('data_asset').orderByKey().limitToLast(100);
        messagesRef.on('child_added', snapshot => {
            let message = {text: snapshot.val(), id: snapshot.key};
            this.setState({messages: [message].concat(this.state.messages)});
        })
    }

    addMessage(e){
        e.preventDefault();
        fire.database().ref('data_asset').push(this.inputEl.value);
        this.inputEl.value= '';
    }

    render() {
        return (

            <div>
                <h1>Ini Header untuk memasukkan data</h1>
                <form onSubmit = {this.addMessage.bind(this)}>
                <input type = "text" ref={ el => this.inputEl = el} />
                <input type = "submit"/>
                <ul>
                    {
                        this.state.messages.map(message => <li
                            key={message.id}>{message.text}</li>)
                    }
                </ul>
                
                </form>
            </div>
        );
    }
}

export default Header;