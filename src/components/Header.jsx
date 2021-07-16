import AntLayout from 'antd/lib/layout';
import PropTypes from 'prop-types';

const AntHeader = AntLayout.Header;

const Header = ({ children }) => <AntHeader>{children}</AntHeader>;

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Header;
