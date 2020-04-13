import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home'; // eslint-disable-line no-unused-vars
import Dropzone from './dropzone/Dropzone'
import QR from './QR'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './logo.png';

 class App extends Component { 

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

callAPI() {
    fetch("http://localhost:3000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

componentWillMount() {
    this.callAPI();
}
  
  render() {

      return (
        
          <div>
            
          <h1 style={{color: "#D93535",
          marginLeft: "300px",
          paddingTop: "50px",
          paddingBottom: "50px",
          fontSize : "35px",
          fontFamily: "Roboto",
          position : "centre"}}> Promoting Tree Plantation using Web Development</h1> 
         
         
          <Home />
          <div className="App">
        <div className="Card">
          <Dropzone onFilesAdded={console.log} />
        </div>
      </div>
          <div className = "qr">
          <QR />
          <div className = "logo">
          <img src= {Logo} alt = "Logo" />
          </div>
                   <p className="App-intro">;{this.state.apiResponse}</p>       
         </div>
          </div>
      );
      }
    }

export default App;