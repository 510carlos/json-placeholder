import AntLayout from 'antd/lib/layout';
import PropTypes from 'prop-types';

const AntFooter = AntLayout.Footer;

const Footer = ({ children }) => <AntFooter>{children}</AntFooter>;

Footer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Footer;
