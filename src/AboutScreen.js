import './App.css';
import React from 'react';
import iconImage from './images/logo512.png';
import {useNavigate} from  'react-router-dom';
import { Button } from 'react-bootstrap';
import NavTabs from './NavTabs';

export default function () {
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
                  <NavTabs tab={1}/>
                <nav>
                    <ul>
                      {/* <!-- Your navigation items --> */}
                    </ul>
                  </nav>
                </div>
              </header>
            <body>
            <p>
            </p>
            
            </body> 
          </div>
    );
}