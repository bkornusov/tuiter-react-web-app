import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

function WhoToFollowList() {
  return `
    <ul class="list-group wd-other-users">
      <li class="list-group-item" id="inline">
        <p class="wd-font-weight-bold">Who to follow</p>
      </li>
      ${who
        .map((who) => {
          return WhoToFollowListItem(who);
        })
        .join("")}
    </ul>`;
}
export default WhoToFollowList;
