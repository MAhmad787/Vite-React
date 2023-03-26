import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAddText }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAddText ? 'blue' : 'green'}
        text={showAddText ? 'Close' : 'Add'}
        onClick={onAdd}
      />
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

export default Header;
