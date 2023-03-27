/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../styles/index.css";

const PostSummaryListItem = ({
  post = {
    id: "1",
    topic: "N/A",
    userName: "N/A",
    title: "Error",
    time: "0h",
    image: "",
  },
}) => {
  let listItem = (
    <>
      <li className="list-group-item pt-2 ms-0 me-0 row" id="inline">
        <div className="col-9">
          <span className="wd-trend-subtitle">{post.topic}</span>
          <br />
          <span className="wd-trend-title" id="no-wrap">
            {post.userName}
          </span>
          <span className="fa-stack">
            <i className="fas fa-certificate fa-stack-2x"></i>
            <i className="fas fa-check fa-stack-1x fa-inverse"></i>
          </span>
          <span className="wd-trend-subtitle"> - {post.time}</span>
          <br />
          <p className="">{post.title}</p>
        </div>
        <div className="col-3">
          <img
            width="100%"
            className="wd-post-image float-end mt-3"
            src={`/images/${post.image}`}
          />
        </div>
      </li>
    </>
  );
  return listItem;
};
export default PostSummaryListItem;
