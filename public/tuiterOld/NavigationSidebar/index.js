const NavigationSidebar = () => {
  return `
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
        <ul class="list-group wd-navigation-panel">
          <a class="list-group-item" id="inline" href="#">
            <i class="fas fa-home me-1 pt-1"></i>
            <div class="d-none d-lg-none d-xl-block">Home</div>
          </a>
          <a class="list-group-item active" id="inline" href="#">
            <i class="fas fa-hashtag me-1 pt-1"></i>
            <div class="d-none d-lg-none d-xl-block">Explore</div>
          </a>
          <a class="list-group-item" id="inline" href="#">
            <i class="fas fa-bell me-1 pt-1"></i>
            <div class="d-none d-lg-none d-xl-block">Notifications</div>
          </a>
          <a class="list-group-item" id="inline" href="#">
            <i class="fas fa-envelope me-1 pt-1"></i>
            <div class="d-none d-lg-none d-xl-block">Messages</div>
          </a>
          <a class="list-group-item" id="inline" href="#">
            <i class="fas fa-bookmark me-1 pt-1"></i>
            <div class="d-none d-lg-none d-xl-block">Bookmarks</div>
          </a>
          <a class="list-group-item" id="inline" href="#">
            <i class="fas fa-list me-1 pt-1"></i>
            <div class="d-none d-lg-none d-xl-block">Lists</div>
          </a>
          <a class="list-group-item" id="inline" href="#">
            <i class="fas fa-user me-1 pt-1"></i>
            <div class="d-none d-lg-none d-xl-block">Profile</div>
          </a>
          <a class="list-group-item" id="inline" href="#">
            <span class="fa-stack pt-1">
              <i class="fas fa-circle fa-stack-2x pe-5"></i>
              <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse pe-1"></i>
            </span>
            <div class="d-none d-lg-none d-xl-block">More</div>
          </a>
        </ul>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `;
};
export default NavigationSidebar;
