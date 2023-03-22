import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
  const onClick = () => {
    alert('You Clicked a Button');
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text="Add" onClick={onClick} />
    </header>
  );
};
// Default Props
Header.defaultProps = {
  title: 'Task Tracker',
};
// Types for the Props
// Not Mandatory //
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS Styles
// const headingStyles = {
//   color: 'white',
//   backgroundColor: 'red',
//   borderRadius: '10px',
// };
export default Header;
