import React from 'react'
import iconImage from './images/logo512.png';
import Helmet from "react-helmet";

export default function Waitlist() {
    return (
        <>
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
              {/* <div className="div-button" role="button" tabIndex={0}>
              Join Us →
            </div>      */}
             <nav>
                <ul>
                  {/* <!-- Your navigation items --> */}
                </ul>
              </nav>
            </div>
          </header>
          <div id="getWaitlistContainer" data-waitlist_id="13245" data-widget_type="WIDGET_1" style={{alignItems: "center", justifyContent: "center", fontWeight: "bold"}}></div>
            <Helmet>
                <link rel="stylesheet" type="text/css" href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css" />
                <script src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"></script>
            </Helmet>
        </div>
        </>
        
    )
}