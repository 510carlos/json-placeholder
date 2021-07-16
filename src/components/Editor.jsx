import { Form, Button } from 'antd';
import PropTypes from 'prop-types';
import TextArea from './Textarea';
import Input from './Input';

const Editor = ({ index, onSubmit, commentValue, setCommentValue }) => {
  const onChangeEditor = (e, input) => {
    const { value } = e.target;
    const newCommentValue = [...commentValue];
    if (newCommentValue[index] === undefined) newCommentValue[index] = {};
    newCommentValue[index][input] = value;
    setCommentValue(newCommentValue);
  };

  return (
    <>
      <Form.Item>
        <Input
          placeholder="Email"
          onChange={(e) => onChangeEditor(e, 'email')}
          value={commentValue[index] && commentValue[index].email}
          name="email"
        />
      </Form.Item>
      <Form.Item>
        <Input
          placeholder="Name"
          onChange={(e) => onChangeEditor(e, 'name')}
          value={commentValue[index] && commentValue[index].name}
          name="name"
        />
      </Form.Item>
      <Form.Item>
        <TextArea
          rows={4}
          onChange={(e) => onChangeEditor(e, 'body')}
          value={commentValue[index] && commentValue[index].body}
          name="body"
        />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" onClick={onSubmit} type="primary">
          Add Comment
        </Button>
      </Form.Item>
    </>
  );
};

Editor.propTypes = {
  index: PropTypes.number,
  onSubmit: PropTypes.func,
  commentValue: PropTypes.array,
  setCommentValue: PropTypes.func,
};

export default Editor;
