import { normalizeData } from './feed.helpers';
import { posts, comments } from './feed.fixtures';

test('Tests `normalizeData` to verify the data is correct', () => {
  const data = normalizeData(posts, comments);
  // verify the post array matches the output data array in length
  expect(posts.length).toBe(data.length);

  // verify that we are getting the same amount of posts
  const commentPost = comments.filter((comment) => comment.postId === 1);
  const checkPost = data.filter((post) => post.id === 1)[0];
  expect(commentPost.length).toBe(checkPost.comments.length);

  // verfiy that an arbitrary id has the same data in the comments object
  const singlePost = commentPost.filter((comment) => comment.id === 2)[0];
  const checkSinglePost = checkPost.comments.filter(
    (comment) => comment.id === 2
  )[0];
  expect(singlePost.postId).toBe(checkSinglePost.postId);
  expect(singlePost.id).toBe(checkSinglePost.id);
  expect(singlePost.name).toBe(checkSinglePost.name);
  expect(singlePost.email).toBe(checkSinglePost.email);
  expect(singlePost.body).toBe(checkSinglePost.body);
});
