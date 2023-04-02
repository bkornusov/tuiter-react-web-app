import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks";

/* eslint-disable jsx-a11y/anchor-is-valid */
const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();
  return (
    <div className="d-flex">
      <a className="col-3" href="#">
        <i className="bi bi-chat me-1"></i>
        {tuit.replies}
      </a>
      <a className="col-3" href="#">
        <i className="bi bi-arrow-repeat me-1"></i>
        {tuit.retuits}
      </a>
      <a className="col-3" href="#">
        {/* {tuit.liked ? (
          <i className="bi bi-suit-heart-fill me-1"></i>
        ) : (
          <i className="bi bi-suit-heart me-1"></i>
        )} */}
        <i
          onClick={() =>
            dispatch(
              updateTuitThunk({
                ...tuit,
                likes: tuit.likes + 1,
              })
            )
          }
          className="bi bi-heart-fill me-2 text-danger"
        ></i>

        {tuit.likes}
      </a>
      <a className="col-3" href="#">
        <i className="bi bi-upload me-1"></i>
      </a>
    </div>
  );
};
export default TuitStats;
