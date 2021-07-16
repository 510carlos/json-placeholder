import AntLayout from 'antd/lib/layout';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AntContent = AntLayout.Content;

const StyledAntContent = styled(AntContent)`
  padding: 0 50px;
  margin: 50px;
  margin-bottom: 0;
  background-color: white;
`;

const Content = ({ children }) => (
  <StyledAntContent>{children}</StyledAntContent>
);

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Content;
