import React, { Component } from "react";
import "./Form.scss";
import axios from 'axios';

class Form extends Component {
  form:any;
  state:any;

  constructor(public props:any){
    super(props);

    this.state = {name: '', email: 'mohamedraheem0444@gmail.com', msg: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event:any) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    console.log("handle change form event", event.target)
   // this.setState({value: event.target.value});
  }

  handleSubmit(event:any) {
    alert('A name was submitted: ' + this.state);
    console.log("Submitted form event", event, this.state)
    event.preventDefault();
  }



  render() {
    return (
      <div>
        <h4>{this.props.title}</h4>
        <form className="text-left p-4 border" data-testid="Form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Your Name</label>
          <input type="text" className="form-control" placeholder="Your name" name="name" value={this.state.name}  onChange={this.handleChange} />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange}
            readOnly
          />
          <small id="emailHelp" className="form-text text-muted">
            This email is cannot be change because it's verified email connected with AWS SES (Simple Email Service)
          </small>
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            className="form-control"
            placeholder="Your message here"
            name="msg"
            value={this.state.msg} onChange={this.handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      </div>
      
      
    );
  }
}

export default Form;
