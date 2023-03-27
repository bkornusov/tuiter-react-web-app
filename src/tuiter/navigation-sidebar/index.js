/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const NavigationSidebar = ({ active, currentPage }) => {
  return (
    <div>
      <div className="list-group">
        <ul className="list-group wd-navigation-panel">
          <a className="list-group-item" href="/">
            <i className="bi bi-twitter me-1"></i>
          </a>
          <a
            className={`list-group-item
                    ${active === "home" ? "active" : ""}`}
            id="inline"
            href="#"
            onClick={() => currentPage("home")}
          >
            <i className="bi bi-house-fill me-1"></i>
            <div className="d-none d-lg-none d-xl-block">Home</div>
          </a>
          <a
            className={`list-group-item
                    ${active === "explore" ? "active" : ""}`}
            id="inline"
            href="#"
            onClick={() => currentPage("explore")}
          >
            <i className="bi bi-hash me-1"></i>
            <div className="d-none d-lg-none d-xl-block">Explore</div>
          </a>
          <a
            className={`list-group-item
                    ${active === "labs" ? "active" : ""}`}
            id="inline"
            href=".."
          >
            <i className="bi bi-asterisk me-1"></i>
            <div className="d-none d-lg-none d-xl-block">Labs</div>
          </a>
          <a
            className={`list-group-item
         ${active === "notifications" ? "active" : ""}"`}
            id="inline"
            href="#"
          >
            <i className="bi bi-bell-fill me-1"></i>
            <div className="d-none d-lg-none d-xl-block">Notifications</div>
          </a>
          <a
            className={`list-group-item
         ${active === "messages" ? "active" : ""}"`}
            id="inline"
            href="#"
          >
            <i className="bi bi-envelope-fill me-1"></i>
            <div className="d-none d-lg-none d-xl-block">Messages</div>
          </a>
          <a
            className={`list-group-item
         ${active === "bookmarks" ? "active" : ""}"`}
            id="inline"
            href="#"
          >
            <i className="bi bi-bookmark-fill me-1"></i>
            <div className="d-none d-lg-none d-xl-block">Bookmarks</div>
          </a>
          <a
            className={`list-group-item
         ${active === "lists" ? "active" : ""}"`}
            id="inline"
            href="#"
          >
            <i className="bi bi-list-ul me-1"></i>
            <div className="d-none d-lg-none d-xl-block">Lists</div>
          </a>
          <a
            className={`list-group-item
         ${active === "profile" ? "active" : ""}"`}
            id="inline"
            href="#"
          >
            <i className="bi bi-person-fill me-1"></i>
            <div className="d-none d-lg-none d-xl-block">Profile</div>
          </a>
          <a
            className={`list-group-item
         ${active === "more" ? "active" : ""}"`}
            id="inline"
            href="#"
          >
            <i className="bi bi-three-dots me-1"></i>
            <div className="d-none d-lg-none d-xl-block">More</div>
          </a>
        </ul>
      </div>
    </div>
  );
};
export default NavigationSidebar;

const setPage = (event) => {};
