import PropTypes from 'prop-types';

const header = ({ title }) => {
  return (
    <div>
      <h1 style={headingStyles}>{title}</h1>
    </div>
  );
};
header.defaultProps = {
  title: 'Task Tracker',
};
header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS Styles
const headingStyles = {
  color: 'white',
  backgroundColor: 'red',
  borderRadius: '10px',
};
export default header;
