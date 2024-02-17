import PropTypes from 'prop-types';
import Particles from 'react-tsparticles';


const CustomParticles = ({ options }) => {
  return <Particles options={options} />;
};
CustomParticles.propTypes = {
  options: PropTypes.object.isRequired,
};

export default CustomParticles;