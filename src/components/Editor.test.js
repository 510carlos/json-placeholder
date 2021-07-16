import { render, screen } from '@testing-library/react';
import Editor from './Editor';

const onSubmit = () => {};
const setCommentValue = () => {};

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    value: () => ({
      matches: false,
      addListener: () => {},
      removeListener: () => {},
    }),
  });

  Object.defineProperty(window, 'getComputedStyle', {
    value: () => ({
      getPropertyValue: () => {},
    }),
  });
});

test('renders `Student` to find 2 input boxes', () => {
  render(
    <Editor
      index={1}
      onSubmit={onSubmit}
      commentValue={[]}
      setCommentValue={setCommentValue}
    />
  );

  const linkElement = screen.getAllByRole('textbox');
  expect(linkElement.length).toBe(3);
});
