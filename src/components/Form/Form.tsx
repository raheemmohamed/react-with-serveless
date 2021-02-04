import React, { Component } from "react";
import "./Form.scss";
import axios from "axios";
import { useForm } from "react-hook-form";

var message:any = null;

export function getSubmitMessage(){
  return message;
}

async function sendEmail(formData: any) {
  let endpointURL = "https://2q06ia4fh8.execute-api.us-east-1.amazonaws.com";

  axios
    .post(endpointURL + "/sendEmail", formData)
    .then(function (response) {
      console.log(" response status "+ response.status);
      message = {
        status: response.status
      }
      
    })
    .catch(function (error) {
      console.log(error);

      message = {
        status: 500
      }
      

    });
}

function ContactForm() {
  const { register, setValue, handleSubmit, errors } = useForm();

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));

    sendEmail(data);
  };

  return (
    <form
      className="text-left p-4 border"
      data-testid="Form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="form-group">
        <label>Your Name</label>
        <input
          type="text"
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
          placeholder="Your name"
          name="name"
          ref={register({ required: true })}
        />
        {errors.name && <p className="text-danger">Your Name is required</p>}
      </div>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className={`form-control`}
          aria-describedby="emailHelp"
          placeholder="Enter email"
          name="email"
          ref={register({ required: false })}
          value="mohamedraheem0444@gmail.com"
          readOnly
        />
        <small id="emailHelp" className="form-text text-muted">
          This email is cannot be change because it's verified email connected
          with AWS SES (Simple Email Service)
        </small>
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
          placeholder="Your message here"
          name="msg"
          ref={register({ required: true })}
        />

        {errors.msg && <p className="text-danger">Message is required</p>}
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}


class Form extends Component {

  state = { status: '' }

  constructor(public props: any) {
    super(props);

   
  }


  onTrigger = (event:any) => {
 

     if(message != null){
       if(message.status == 200){
        this.props.parentCallback(message.status);
       }else{
        this.props.parentCallback(message.status);
       }
     }
    
  }


  render() {

    setInterval(()=> {
      this.onTrigger(null)
    }, 1000)

    return (
      <div>
        <h4>{this.props.title}</h4>
        <ContactForm/>
      </div>
    );
  }
}



export default Form;
