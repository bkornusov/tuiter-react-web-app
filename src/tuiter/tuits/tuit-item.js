import React from "react";
import TuitStats from "./tuit-stats";
import "../styles/index.css";
import { useDispatch } from "react-redux";
import { deleteTuitThunk } from "../../services/tuits-thunks";

const TuitItem = ({
  tuit = {
    id: "1",
    topic: "N/A",
    userName: "N/A",
    time: "0h",
    title: "Error",
    image: "",
    liked: false,
    replies: 0,
    retuits: 0,
    likes: 0,
    handle: "N/A",
    tuit: "N/A",
  },
}) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  };

  let listItem = (
    <>
      <li className="list-group-item ps-1 ms-0 me-0 row" id="inline">
        <div className="col-1">
          <img
            className="rounded-circle mt-2"
            height={48}
            src={`/images/${tuit.image}`}
            alt="avatar"
          />
        </div>
        <div className="col-11 ps-4">
          <i
            className="bi bi-x-lg float-end"
            onClick={() => deleteTuitHandler(tuit._id)}
          ></i>
          <div id="inline">
            <div className="fw-bold">{tuit.userName}</div>
            <div className="text-muted ms-2">{tuit.handle}</div>
            <div className="text-muted"> - {tuit.time}</div>
          </div>
          <div className="">{tuit.tuit}</div>
          <TuitStats tuit={tuit} />
        </div>
      </li>
    </>
  );
  return listItem;
};
export default TuitItem;
