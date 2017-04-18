//increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

//add comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

//Remove comment
export function removeComments(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}
