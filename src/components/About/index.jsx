import dude from "../../images/dude.jpg"
import Particles from 'react-tsparticles';

const About = () => {
  return (
    <div>
    <Particles
      id="tsparticles"
      className="particles"
      options={{
        particles: {
          number: {
            value: 100,
          },
          color: {
            value: "#ff0000",
          },
        },
      }}
    />
    <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <img src={dude} alt="Your Name" className="img-fluid rounded-circle" />
          </div>
          <div className="col-lg-6 col-md-12">
            <h2>About Me</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc nec tincidunt cursus, eros mauris sollicitudin lectus, quis auctor sem turpis vel lacus.</p>
          </div>
        </div>
      </div>
    </div> // Replace '}' with '&rbrace;'
  )
}

export default About
