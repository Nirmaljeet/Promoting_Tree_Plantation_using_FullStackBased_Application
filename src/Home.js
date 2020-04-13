import React from 'react';
import { Jumbotron  } from 'react-bootstrap';
//import styled, { keyframes } from 'styled-components';
//import { bounce } from 'react-animations-master';

//const bounceAnimation = keyframes`${bounce}`;

//const BouncyDiv = styled.div`
  //animation: 1s ${bounceAnimation};
//`;
const Header2 = () => { 
  return (
    <Jumbotron fluid>
    
      <h1 style = {{color : "#D93535", fontSize : "35px", paddingTop: "0px"}}>Problem</h1>
      <p style = {{fontSize : "20px"}}>
       Whenever we organise any event be it small or big we invite various guests to make the event auspicious. 
       To welcome our guests we give them Mementoes as a token of love and respect.
          
          But have you ever thought what happens to our Mementoes after the event? Generally,
               we throw these Mementoes in dustbins or give it to some scrap dealer.</p>
               <p style = {{fontSize : "20px"}}> But to bring in your valuable knowledge, these Mementoes are made from wood, plastic, etc. 
                   That directly means we are causing harm to our environment just for sake of happiness of few minutes. 
               If we analyze the situation on a large prospective, we will come to a conclusion that we are actually doing
               injustice with environment and no guest would prefer idea of these Mementoes.
               </p>
    
    </Jumbotron>
    
  )
}
const Header1 = () => {
    return (
        <Jumbotron fluid>
  
    <h1 style = {{color : "#06BD18", fontSize : "35px", paddingTop: "0px"}}>Solution</h1>
    <p style = {{fontSize: "20px"}}>
     We realized that we have to facilitate our guests to the event but in a certain different manner. We will generate
      a e-certificate for our guest provided he completes all the steps required. These steps ensure that there 
      is no wastage and at same time we have done something productive for environment .
    </p>
    <p style = {{fontSize: "20px"}}> The steps are as follows : </p>
    <p style = {{fontSize: "20px"}}>1) Every guest will have to scan a QR Code provided in this application using our QR Code
    Scanner. This will generate a ID for every user.</p>
    <p style = {{fontSize: "20px"}}>2) Now the organisation which has invited the guest has to plant a sappling for that
    particular guest. Once they have planted the sappling they have to click it's photograph and then upload it on our application.  </p>
    <p style = {{fontSize: "20px"}}>3) Now the organisation has to enter the required inforation like : "Name of guest",
     "Name of event", "Date of event" </p>
     <p style = {{fontSize: "20px"}}> 4) Now the certificate will be generated and can be downloaded and then sent to the
      guest for future references.</p>
      <p style = {{fontSize: "20px"}}> 5) The organisation will take care of the sappling and has to upload pictures of 
      growth of that sappling as the guest can login and track it's growth in future too. </p>
  
</Jumbotron>
    )
}

export default function Home() {
    return (
        <div>
            <Header2 />
            <Header1 />
            
            </div>
    )
}