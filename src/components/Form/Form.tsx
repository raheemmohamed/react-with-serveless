import React, { Component } from "react";
import "./Form.scss";

class Form extends Component {

  constructor(public props:any){
    super(props);
  }


  render() {
    return (
      <div>
        <h4>{this.props.title}</h4>
        <form className="text-left p-4 border" data-testid="Form">
        <div className="form-group">
          <label>Your Name</label>
          <input type="text" className="form-control" placeholder="Your name" />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
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
