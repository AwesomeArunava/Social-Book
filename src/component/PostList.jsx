import Post from "./Post";

const PostList = ({ post }) => {
  let posts = [1, 2];
  console.log(posts);
  return (
    <div className="d-flex flex-column align-items-center overflow-y-auto w-100 pt-2">
      {posts.map((items, index) => (
        <Post key={index} />
      ))}
    </div>
  );
};

export default PostList;
