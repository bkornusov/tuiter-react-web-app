import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return `
    <div class="wd-top-panel mb-2">
      <i class="fa fa-search wd-search-icon "></i>
      <input class="form-control rounded-pill wd-searchbox" type="search" placeholder="Search Tuiter" />
      <a class="wd-explore-settings" href="explore-settings.html">
        <i class="fas fa-cog fa-2x ms-2 me-2 pt-1"></i>
      </a>
    </div>
    <ul class="list-group list-group-horizontal">
      <a class="wd-topic list-group-item active" href="#">For you</a>
      <a class="wd-topic list-group-item" href="#">Trending</a>
      <a class="wd-topic list-group-item" href="#">News</a>
      <a class="wd-topic list-group-item" href="#">Sports</a>
      <a class="wd-topic list-group-item" href="#">Entertainment</a>
    </ul>
    <div class="wd-main-image mb-2">
      <img width="100%" src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" />
      <div class="wd-main-image-caption wd-font-weight-bold">
        SpaceX's Starship
      </div>
    </div>
    ${PostSummaryList()}
    `;
};
export default ExploreComponent;
