const Post = () => {
  return (
    <div className="card mb-2" style={{ width: "35rem" }}>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <div className="d-flex justify-content-center mb-4">
          <img src={"https://picsum.photos/500/300"} />
        </div>
        <a href="#" className="btn btn-primary">
          Like
        </a>
      </div>
    </div>
  );
};

export default Post;
