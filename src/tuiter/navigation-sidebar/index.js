/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const NavigationSidebar = ({ active = "explore" }) => {
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
          >
            <i className="bi bi-house-fill me-1"></i>
            <div className="d-none d-lg-none d-xl-block">Home</div>
          </a>
          <a
            className={`list-group-item
         ${active === "explore" ? "active" : ""}"`}
            id="inline"
            href="#"
          >
            <i className="bi bi-hash me-1"></i>
            <div className="d-none d-lg-none d-xl-block">Explore</div>
          </a>
          <a
            className={`list-group-item
         ${active === "explore" ? "active" : ""}"`}
            id="inline"
            href="#"
          >
            <i className="bi bi-bell-fill me-1"></i>
            <div className="d-none d-lg-none d-xl-block">Notifications</div>
          </a>
          <a
            className={`list-group-item
         ${active === "explore" ? "active" : ""}"`}
            id="inline"
            href="#"
          >
            <i className="bi bi-envelope-fill me-1"></i>
            <div className="d-none d-lg-none d-xl-block">Messages</div>
          </a>
          <a
            className={`list-group-item
         ${active === "explore" ? "active" : ""}"`}
            id="inline"
            href="#"
          >
            <i className="bi bi-bookmark-fill me-1"></i>
            <div className="d-none d-lg-none d-xl-block">Bookmarks</div>
          </a>
          <a
            className={`list-group-item
         ${active === "explore" ? "active" : ""}"`}
            id="inline"
            href="#"
          >
            <i className="bi bi-list-ul me-1"></i>
            <div className="d-none d-lg-none d-xl-block">Lists</div>
          </a>
          <a
            className={`list-group-item
         ${active === "explore" ? "active" : ""}"`}
            id="inline"
            href="#"
          >
            <i className="bi bi-person-fill me-1"></i>
            <div className="d-none d-lg-none d-xl-block">Profile</div>
          </a>
          <a
            className={`list-group-item
         ${active === "explore" ? "active" : ""}"`}
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

//  <div className="list-group">
//    <a className="list-group-item" href="/">
//      <i class="fab fa-twitter"></i></a>
//       <ul class="list-group wd-navigation-panel">
//         <a className="list-group-item
//         ${active === "home" ? "active" : ""}" id="inline" href="#">
//           <i class="fas fa-home me-1 pt-1"></i>
//           <div class="d-none d-lg-none d-xl-block">Home</div>
//         </a>
//         <a className="list-group-item
//         ${active === "explore" ? "active" : ""}" id="inline" href="#">
//           <i class="fas fa-hashtag me-1 pt-1"></i>
//           <div class="d-none d-lg-none d-xl-block">Explore</div>
//         </a>
//         <a className="list-group-item
//         ${active === "notifications" ? "active" : ""}" id="inline" href="#">
//           <i class="fas fa-bell me-1 pt-1"></i>
//           <div class="d-none d-lg-none d-xl-block">Notifications</div>
//         </a>
//         <a className="list-group-item
//         ${active === "messages" ? "active" : ""}" id="inline" href="#">
//           <i class="fas fa-envelope me-1 pt-1"></i>
//           <div class="d-none d-lg-none d-xl-block">Messages</div>
//         </a>
//         <a className="list-group-item
//         ${active === "bookmarks" ? "active" : ""}" id="inline" href="#">
//           <i class="fas fa-bookmark me-1 pt-1"></i>
//           <div class="d-none d-lg-none d-xl-block">Bookmarks</div>
//         </a>
//         <a className="list-group-item
//         ${active === "lists" ? "active" : ""}" id="inline" href="#">
//           <i class="fas fa-list me-1 pt-1"></i>
//           <div class="d-none d-lg-none d-xl-block">Lists</div>
//         </a>
//         <a className="list-group-item
//         ${active === "profile" ? "active" : ""}" id="inline" href="#">
//           <i class="fas fa-user me-1 pt-1"></i>
//           <div class="d-none d-lg-none d-xl-block">Profile</div>
//         </a>
//         <a className="list-group-item
//         ${active === "more" ? "active" : ""}" id="inline" href="#">
//           <span class="fa-stack pt-1">
//             <i class="fas fa-circle fa-stack-2x pe-5"></i>
//             <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse pe-1"></i>
//           </span>
//           <div class="d-none d-lg-none d-xl-block">More</div>
//         </a>
//       </ul>
//  </div>
//  <div class="d-grid mt-2">
//    <a href="tweet.html"
//       class="btn btn-primary btn-block rounded-pill">
//       Tweet</a>
//  </div>
