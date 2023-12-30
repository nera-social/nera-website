import logo from './images/logo512.png';
import './App.css';
import { useCallback } from "react";
import iconImage from './images/logo512.png'; // Import your icon image

function App() {



  return (
    <div id="particles-js">
<div class="gradient_background">

  <p style = {{fontSize: 15}}>
    <strong>Coming in 2024.</strong>
  </p>
  <header class="transparent-header">
    {/* <!-- Your header content --> */}
    <div class="header-content">
      <img class="icon" src={iconImage} alt="Icon" />
      <h1 class="title">jive</h1>
      <nav>
        <ul>
          {/* <!-- Your navigation items --> */}
        </ul>
      </nav>
    </div>
  </header>
</div>
</div>
  );
}

export default App;