import './App.css';
import iconImage from './images/logo512.png'; // Import your icon image

function App() {
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
      <div className="div-button" role="button" tabIndex={0}>
      Join Us →
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

We are Jive, a dating platform.<br />
We are a cultural movement.<br />
We are a tech company.<br />
We are fostering real world connections.<br />
We are going to help you fall in love. ❤️<br />
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