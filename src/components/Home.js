import React, { Component } from "react";
import ODrawer from './Drawer';
const typeformEmbed = require('@typeform/embed')


export default class Home extends Component {
  constructor(props) {
    super(props);
    let container = null;
    
  }
  componentDidMount(){
      this.renderWidget();
  }
  renderWidget() {
    const embedElement = this.container;
    console.log(typeformEmbed);
    typeformEmbed.makeWidget(
      embedElement,
      "https://opportunityhub.typeform.com/to/M9BHln", // NOTE: Replace with your typeform URL
      {
        hideHeaders: false,
        hideFooter: false,
        opacity: 100,
        buttonText: "Take the survey!",
        onSubmit: function() {
          console.log("Typeform successfully submitted");
        }
      }
    );
  }

  render() {
    return (
     <div
        ref={div => {
          this.container = div;
        }}
        className='form-container'
        
      >
      </div>
    );
  }
}
