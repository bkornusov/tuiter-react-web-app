/* eslint-disable jsx-a11y/anchor-is-valid */
const TuitStats = ({ tuit }) => {
  const liked = tuit.liked;
  const replies = tuit.replies;
  const retuits = tuit.retuits;
  const likes = tuit.likes;
  return (
    <div className="d-flex">
      <a className="col-3" href="#">
        <i className="bi bi-chat me-1"></i>
        {replies}
      </a>
      <a className="col-3" href="#">
        <i className="bi bi-arrow-repeat me-1"></i>
        {retuits}
      </a>
      <a className="col-3" href="#">
        {liked ? (
          <i className="bi bi-suit-heart-fill me-1"></i>
        ) : (
          <i className="bi bi-suit-heart me-1"></i>
        )}
        {likes}
      </a>
      <a className="col-3" href="#">
        <i className="bi bi-upload me-1"></i>
      </a>
    </div>
  );
};
export default TuitStats;
