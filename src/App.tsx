import logo from './logo.svg';
import './App.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    
    <div className="App">
      <Header />

      <div className="container-fluid vh-100">

        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4">
              <form>

              </form>
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4">
              Your list
          </div>
        </div>
     
      </div>
     
      <Footer/>
    </div>
  );
}

export default App;
