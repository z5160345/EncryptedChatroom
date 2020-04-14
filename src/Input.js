import {Component} from "react";
import React from "react";
import {caesarCipher, rsa, CTR, CBC} from "./Encryptions"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      encryption: ""
    };
    this.setNone = this.setNone.bind(this);
    this.setRSA = this.setRSA.bind(this);
    this.setCaesarCiper = this.setCaesarCiper.bind(this);
    this.setCTR = this.setCTR.bind(this);
    this.setCBC = this.setCBC.bind(this);
  }
  
  onChange(e) {
    this.setState({text: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    let message = this.state.text
    if (this.state.encryption === "rsa"){
      message = rsa(message, 269563, 1889837)
    } else if (this.state.encryption === "caesar") {
      message = caesarCipher(message, 2)
    } else if (this.state.encryption === "CTR") {
      message = CTR(message, 2)
    } else if (this.state.encryption === "CBC") {
      message = CBC(message, 2)
    }
    
    this.setState({text: ""});
    this.props.onSendMessage(message);
  }

  setRSA() {
    this.setState({encryption: "rsa"})
    this.props.setEncryption("rsa")
  }



  setCaesarCiper() {
    this.setState({encryption: "caesar"})
    this.props.setEncryption("caesar")
  }

  setCTR() {
    this.setState({encryption: "CTR"})
    this.props.setEncryption("CTR")
  }

  setCBC() {
    this.setState({encryption: "CBC"})
    this.props.setEncryption("CBC")
  }
  
  setNone(){
    this.setState({encryption: "none"})
    this.props.setEncryption("none")
  }

  render() {
    return (
      <div className="Input">
        <DropdownButton id="dropdown-item-button" title="Choose Type of Encryption">
          <Dropdown.Item as="button" onClick={this.setNone}>None</Dropdown.Item>
          <Dropdown.Item as="button" onClick={this.setRSA}>RSA</Dropdown.Item>
          <Dropdown.Item as="button" onClick={this.setCaesarCiper}>CaesarCipher</Dropdown.Item>
          <Dropdown.Item as="button" onClick={this.setCTR}>AES - Counter </Dropdown.Item>
          <Dropdown.Item as="button" onClick={this.setCBC}>AES - Cipher Block Chaining</Dropdown.Item>
        </DropdownButton>
        <form onSubmit={e => this.onSubmit(e)}>
          <input
            onChange={e => this.onChange(e)}
            value={this.state.text}
            type="text"
            placeholder="Enter your message and press ENTER"
            autoFocus="true"
          />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default Input;