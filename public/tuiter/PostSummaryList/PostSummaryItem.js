function PostSummaryItem(post) {
  let listItem = `
    <li class="list-group-item pt-2 ms-0 me-0 row" id="inline">
      <div class="col-9" >
        <span class="wd-trend-subtitle">${post.topic}</span><br />
        <span class="wd-trend-subtitle"> - ${post.time}</span><br />
        <p class="wd-trend-title">
          ${post.title}
        </p>
      </div>
      <div class="col-3">
        <img width="100%" class="wd-post-image float-end mt-2"
          src="${post.image}" />
      </div>
    </li>
  `;
  if (post.tweets) {
    let splitItem = listItem.split(
      `<span class="wd-trend-subtitle"> - ${post.time}</span><br />`
    );
    listItem =
      splitItem[0] +
      `<span class="wd-trend-subtitle">${post.tweets} Tweets</span>` +
      splitItem[1];
  }
  if (post.userName) {
    let splitITem = listItem.split(
      `<span class="wd-trend-subtitle">${post.topic}</span><br />`
    );
    listItem =
      splitITem[0] +
      `<span class="wd-trend-title" id="no-wrap">${post.userName}</span>` +
      `<span class="fa-stack">
          <i class="fas fa-certificate fa-stack-2x"></i>
          <i class="fas fa-check fa-stack-1x fa-inverse"></i>
        </span>` +
      splitITem[1];
  }
  return listItem;
}
export default PostSummaryItem;
