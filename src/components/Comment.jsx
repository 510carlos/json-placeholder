import AntComment from 'antd/lib/comment';
import PropTypes from 'prop-types';

const Comment = ({ actions, author, content, children }) => (
  <AntComment actions={actions} author={author} content={content}>
    {children}
  </AntComment>
);

Comment.propTypes = {
  actions: PropTypes.node,
  author: PropTypes.node,
  content: PropTypes.node,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Comment;
