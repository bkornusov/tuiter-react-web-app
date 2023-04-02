import React, { useEffect } from "react";
import PostSummaryListItem from "./post-summary-list-item";
import { useDispatch, useSelector } from "react-redux";
import { findTuitsThunk } from "../../services/tuits-thunks";

const PostSummaryList = () => {
  const { tuits, loading } = useSelector((state) => state.tuitsData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk());
  }, []);
  return (
    <ul className="list-group">
      {loading && <li className="list-group-item">Loading...</li>}
      {tuits.map((post) => (
        <PostSummaryListItem key={post._id} post={post} />
      ))}
    </ul>
  );
};
export default PostSummaryList;
