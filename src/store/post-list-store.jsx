import { createContext, useReducer } from "react";

// make a postList use of createContext for passing this value to all children in one time
const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

// reducer function to modify postList
const postListReducer = (postList, action) => {
  return postList;
};

// addPost method for add post in the postList array
const addPost = () => {};

// deletePost method for delete post from the postList array
const deletePost = () => {};

const PostListProvider = ({ children }) => {
  // using useReducer hook for better state mangement
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
