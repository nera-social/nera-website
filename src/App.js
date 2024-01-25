import './App.css';
import React from 'react';
import iconImage from './images/logo512.png';
import {useNavigate} from  'react-router-dom';
import { Button } from 'react-bootstrap';

function App() {

  let navigate = useNavigate()
  const routeChange = () => {
    let path = 'waitlist'
    navigate(path)
  }

  return (
    <div class="gradient_background">
        
          {/* <p style = {{fontSize: 15}}>
            <strong>Coming in 2024.</strong>
          </p> */}
        
          <header class="transparent-header">
          <div>
            <p style = {{fontSize: 25}}>
            </p>
          </div>
            {/* <!-- Your header content --> */}
            <div class="header-content">
              <img class="icon" src={iconImage} alt="Icon" />
              <div className="div-button" tabIndex={0} role='button' onClick={routeChange} style={{position: "absolute", right: 20}}>
                Waitlist
              </div>
             <nav>
                <ul>
                  {/* <!-- Your navigation items --> */}
                </ul>
              </nav>
            </div>
          </header>
        <body>
        <div class="Iam">
        <b>
        
        <div class="innerIam">
        
         We are a dating platform. <br />
         We are a cultural movement. <br />
         We are a tech company. <br />
         We are fostering real world connection. <br />
         We are Jive. <br />
        <img class="icon" src={iconImage} alt="Icon" />
        </div>
        </b>
        
        </div>
        <p>
        </p>
        
        </body>
        
        
        
        </div>
        
  );
}

export default App;