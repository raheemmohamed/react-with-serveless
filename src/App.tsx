import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Form, { getSubmitMessage } from "./components/Form/Form";
import { Component } from "react";


class App extends Component{
  
  state: any;
  constructor(public props:any){
    super(props);

    this.state = {
      data: null
  }


  }

  handleCallback = (childData:any) =>{
      this.setState({data: childData})
  }


  render(){
    const {data} = this.state;

    return (
<div className="App">
      <Header />

      <div className="container-fluid vh-100 mt-4" >
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4 ">
              <Form title="Send Email using AWS Lambda + API Gateway" parentCallback = {this.handleCallback} />
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4">
              <h4>Send Email status</h4>
             

              {data ==200 && <div className="alert alert-success" role="alert"> Email is Sent Successfully</div>}
              {data ==500 && <div className="alert alert-danger" role="alert"> Email sent fail</div>}
              

          </div>

          <div className="col-sm-12 col-md-4 col-lg-4">
              <h4>Goal of creating this application</h4>
              <p>to learn fundemental of react library and the same to know how serveless application performing, and learn the concept AWS SES (Simple Email Service) with LAMBDA + API Gateway implementation etc.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
    )
  }
}
export default App;
