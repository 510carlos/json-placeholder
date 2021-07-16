import AntLayout from 'antd/lib/layout';
import PropTypes from 'prop-types';

const Layout = ({ children }) => <AntLayout>{children}</AntLayout>;

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
