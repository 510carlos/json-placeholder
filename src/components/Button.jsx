import AntButton from 'antd/lib/button';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, size }) => (
  <AntButton size={size} onClick={onClick}>
    {children}
  </AntButton>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onClick: PropTypes.func,
  size: PropTypes.string,
};

export default Button;
