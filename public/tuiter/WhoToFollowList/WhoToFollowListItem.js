function WhoToFollowListItem(who) {
  return `
  <div class="list-group-item" >
    <div class="row wd-user container flex-nowrap justify-content-around">
      <div class="col-9" id="inline">
        <a href="">
          <img width="100%" class="wd-user-image float-start rounded-circle me-3"
            src="../../images/${who.avatarIcon}" />
        </a>
        <div class="fa-pull-left" id="no-wrap">
          <span class="wd-user-name wd-font-weight-bold">${who.userName}</span>
          <span class="fa-stack">
            <i class="fas fa-certificate fa-stack-2x"></i>
            <i class="fas fa-check fa-stack-1x fa-inverse"></i> </span><br />
          <span class="">@${who.handle}</span>
        </div>
      </div>
      <div class="col-3">
        <button class="btn btn-primary rounded-pill mt-1">
          Follow
        </button>
      </div>
    </div>
  </div>`;
}
export default WhoToFollowListItem;
