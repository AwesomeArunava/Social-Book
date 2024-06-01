import Post from "./Post";

const PostList = () => {
  let posts = [1, 2, 3, 4, 5];
  console.log(posts);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center overflow-auto w-100">
      {posts.map((items, index) => (
        <Post key={index} />
      ))}
    </div>
  );
};

export default PostList;
