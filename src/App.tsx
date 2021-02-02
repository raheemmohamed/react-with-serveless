import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
function App() {
  return (
    <div className="App">
      <Header />

      <div className="container-fluid vh-100 mt-4" >
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4 ">
              <Form title="Send Email using AWS Lambda + API Gateway" />
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4">
              <h4>Send Email list</h4>
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4">
              <h4>Goal of creating app</h4>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
