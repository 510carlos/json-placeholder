import AntInput from 'antd/lib/input';
import PropTypes from 'prop-types';

const AntTextArea = AntInput.TextArea;

const TextArea = ({ onChange, value }) => (
  <AntTextArea onChange={onChange} value={value} />
);

TextArea.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default TextArea;
