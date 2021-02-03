import React, { Component } from "react";
import "./Form.scss";
import axios from 'axios';
import { useForm } from "react-hook-form";


function ContactForm() {
  const { register,setValue, handleSubmit,errors } = useForm();
  const onSubmit = (data:any) => {
    alert(JSON.stringify(data));
  };

  return (
     
        <form className="text-left p-4 border" data-testid="Form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Your Name</label>
          <input type="text" className={`form-control ${errors.name ? "is-invalid": ""}`} placeholder="Your name" name="name" ref={register({ required: true })} />
          {errors.name && <p className="text-danger">Your Name is required</p>}
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className={`form-control`}
            aria-describedby="emailHelp"
            placeholder="Enter email" name="email" ref={register({ required: false })}
            value="mohamedraheem0444@gmail.com"
            readOnly
          />
          <small id="emailHelp" className="form-text text-muted">
            This email is cannot be change because it's verified email connected with AWS SES (Simple Email Service)
          </small>
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            className={`form-control ${errors.name ? "is-invalid": ""}`}
            placeholder="Your message here"
            name="msg"
            ref={register({ required: true })}
          />

         
          {errors.name && <p className="text-danger">Message is required</p>}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
  );
}

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
   return(
     <div>
       <h4>{this.props.title}</h4>
       <ContactForm/>
     </div>
   )
  }
}

export default Form;
