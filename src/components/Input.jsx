import AntInput from 'antd/lib/input';
import PropTypes from 'prop-types';

const Input = ({ placeholder, onChange, value }) => (
  <AntInput onChange={onChange} placeholder={placeholder} value={value} />
);

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
