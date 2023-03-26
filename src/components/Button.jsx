import PropTypes from 'prop-types';

const Button = ({ text, onClick, color }) => {
  return (
    <button
      onClick={onClick}
      className="btn"
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: 'Button',
};
Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;
