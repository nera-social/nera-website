// Initialize Particles.js
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80, // Adjust the number of particles
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff" // Adjust the color of the particles
      },
      // Other configurations for particles' shape, size, etc.
      // ...
    },
    "interactivity": {
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        }
      }
    }
  });