import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

// ...



const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
  return (
<footer className="bg-light text-center text-lg-start">
      <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        <p>© {year} Copyright: Your Name</p>
        <p>Funny Quote: Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it. - Brian Kernighan</p>
        <div className="social-icons">
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
