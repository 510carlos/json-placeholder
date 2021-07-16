import React, { useState, useEffect } from 'react';
import { Button, Editor, Comment } from '../components';
import { getPostResource, getCommentsResource } from './feed.resource';
import { normalizeData, onAddComment, onViewComments } from './feed.helpers';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState([]);
  const [showAddComment, setShowAddComment] = useState([]);
  const [commentValue, setCommentValue] = useState([]);

  const onSubmitEditor = (index, postId) => {
    // add a new comments to posts
    const newComments = [...comments];
    const newComment = {
      body: commentValue[index].body,
      email: commentValue[index].email,
      name: commentValue[index].name,
      postId,
    };
    newComments.push(newComment);
    setComments(newComments);

    // force to display comments
    // if they are not displayed
    if (!showComments[index]) {
      const newShowComments = [...showComments];
      newShowComments[index] = true;
      setShowComments(newShowComments);
    }

    // remove the values of the Editor fields
    const newCommentValue = [...commentValue];
    newCommentValue[index] = {};
    setCommentValue(newCommentValue);
  };

  useEffect(() => {
    // fetch the API calls
    const fetchData = async () => {
      getPostResource().then((result) => setPosts(result));
      getCommentsResource().then((result) => setComments(result));
    };
    fetchData();
  }, []);

  return (
    <div>
      {normalizeData(posts, comments).map((post, indexa) => (
        <Comment
          key={`${indexa}-post`}
          author={post.title}
          content={post.body}
          actions={[
            <Button
              size="small"
              onClick={() =>
                onViewComments(indexa, showComments, setShowComments)
              }
            >
              {showComments[indexa] ? 'Hide' : 'View'} Comments (
              {post.comments.length})
            </Button>,
            <Button
              size="small"
              onClick={() =>
                onAddComment(indexa, showAddComment, setShowAddComment)
              }
            >
              {showAddComment[indexa] ? 'Hide Editor' : 'Add Comment'}
            </Button>,
          ]}
        >
          {showComments[indexa] &&
            post.comments.map((comment, indexb) => (
              <Comment
                key={`${indexb}-comment`}
                content={comment.body}
                author={`${comment.name} (${comment.email})`}
              />
            ))}
          {showAddComment[indexa] && (
            <Editor
              onSubmit={() => onSubmitEditor(indexa, post.id)}
              index={indexa}
              setCommentValue={setCommentValue}
              commentValue={commentValue}
            />
          )}
        </Comment>
      ))}
    </div>
  );
};

export default Feed;
