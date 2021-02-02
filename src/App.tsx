import logo from './logo.svg';
import './App.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    
    <div className="App">
      <Header />

      <div className="container-fluid h-100">
        <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
      </div>
     
      <Footer/>
    </div>
  );
}

export default App;
