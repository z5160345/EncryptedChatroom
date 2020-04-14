import {Component} from "react";
import React from "react";
import {rsaDecrypt, caesarDecrypt, CTRDecrypt, CBCDecrypt} from "./Decryptions"

class Messages extends Component {
  render() {
    const {messages} = this.props;
    return (
      <ul className="Messages-list">
        {messages.map(m => this.renderMessage(m))}
      </ul>
    );
  }

  renderMessage(message) {
    const {encryption} = this.props;
    let {member, text} = message;
    if (encryption == "rsa") {
      text = rsaDecrypt(text, 7, 1889837)
    } else if (encryption == "caesar") {
      text = caesarDecrypt(text, 2)
    } else if (encryption == "CTR") {
      text = CTRDecrypt(text)
    } else if (encryption == "CBC") {
      text = CBCDecrypt(text)
    }
    
    const {currentMember} = this.props;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe ?
      "Messages-message currentMember" : "Messages-message";
    return (
      <li className={className}>
      <span
        className="avatar"
        style={{backgroundColor: member.clientData.color}}
      />
        <div className="Message-content">
          <div className="username">
            {member.clientData.username}
          </div>
          <div className="text">{text}</div>
        </div>
      </li>
    );
  }
}

export default Messages;