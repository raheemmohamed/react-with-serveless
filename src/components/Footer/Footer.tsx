import React, { Component } from 'react';
import'./Footer.scss';

class Footer extends Component{
  render(){
    return(
      <footer className="bg-primary text-center text-lg-start text-white" data-testid="Footer">
        <div className="text-center p-3" >
          © 2020 developed by:
          <a className="text-white" href="#" > <i>Raheem Mohamed</i></a>
        </div>
      
      </footer>
    )
  }
}

export default Footer;
