/*
 * Function which gets both post and comments and associates them.
 * @author Carlos Mendoza
 * @param {Array}   `Post` holds all the posts
 * @param {Array}   `Comments` holds all the comments
 * @return {Array}  Associated post and comments
 */

export const normalizeData = (posts, comments) => {
  let data = [];
  if (posts && comments && posts.length > 0 && comments.length > 0) {
    const map = {};
    posts.map(
      (post) =>
        (map[post.id] = {
          comments: [],
          ...post,
        })
    );
    comments.forEach((comment) => map[comment.postId].comments.push(comment));
    data = Object.keys(map).map((k) => map[k]);
  }
  return data;
};

/*
 * Function which displays the comments box
 * @author Carlos Mendoza
 * @param {Number}    `index` holds the id of the post to add a comment
 * @param {Array}     `showAddComment` value of all Editors and the state of weather to show or not
 * @param {Function}  `setShowAddComment` allows to modify the state of `showAddComment`
 */

export const onAddComment = (index, showAddComment, setShowAddComment) => {
  const newShowAddComment = [...showAddComment];
  if (newShowAddComment[index]) newShowAddComment[index] = false;
  else newShowAddComment[index] = true;
  setShowAddComment(newShowAddComment);
};

/*
 * Function which displays the comments box
 * @author Carlos Mendoza
 * @param {Number}    `index` holds the id of the post to show the comments
 * @param {Array}     `showAddComment` value of all Editors and the state of weather to show or not
 * @param {Function}  `setShowAddComment` allows to modify the state of `showAddComment`
 */
export const onViewComments = (index, showComments, setShowComments) => {
  const newShowComments = [...showComments];
  if (newShowComments[index]) newShowComments[index] = false;
  else newShowComments[index] = true;
  setShowComments(newShowComments);
};
