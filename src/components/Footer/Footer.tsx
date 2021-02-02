import React, { Component } from 'react';
import'./Footer.scss';

class Footer extends Component{
  render(){
    return(
      <footer className="bg-primary text-center text-lg-start text-white fixed-bottom" data-testid="Footer">
        <div className="text-center p-3" >
          © 2020 Developed by:
          <a className="text-white" href="https://inproto.net/raheem" > <i>Raheem Mohamed</i></a>
        </div>
      
      </footer>
    )
  }
}

export default Footer;
