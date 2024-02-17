
import Particles from 'react-tsparticles';


const MyComponent = () => {
  const options = {
    particles: {
      number: {
        value: 50, // Number of particles
      },
      size: {
        value: 3, // Size of particles
      },
      color: {
        value: "#ff0000", // Color of particles
      },
      shape: {
        type: "circle", // Shape of particles
      },
      line_linked: {
        enable: true, // Enable/Disable lines between particles
        distance: 150, // Distance between particles to link
        color: "#ffffff", // Color of lines
        opacity: 0.4, // Opacity of lines
        width: 1, // Width of lines
      },
    },
  };

  return <Particles options={options} />;
};

export default MyComponent;