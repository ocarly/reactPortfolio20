import dude from "../../images/dude.jpg"

const About = () => {
  return (
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
  )
}

export default About
