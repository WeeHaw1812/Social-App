import {
  Bookmark,
  CalendarMonth,
  Groups,
  History,
  LocationOn,
  OndemandVideo,
  RssFeed,
  Store,
} from "@mui/icons-material";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <RssFeed className="sidebarIcon" />
              <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sidebarListItem">
              <Groups className="sidebarIcon" />
              <span className="sidebarListItemText">Groups</span>
            </li>
            <li className="sidebarListItem">
              <Store className="sidebarIcon" />
              <span className="sidebarListItemText">Store</span>
            </li>
            <li className="sidebarListItem">
              <OndemandVideo className="sidebarIcon" />
              <span className="sidebarListItemText">Video</span>
            </li>
            <li className="sidebarListItem">
              <CalendarMonth className="sidebarIcon" />
              <span className="sidebarListItemText">Calendar</span>
            </li>
            <li className="sidebarListItem">
              <Bookmark className="sidebarIcon" />
              <span className="sidebarListItemText">Bookmark</span>
            </li>
            <li className="sidebarListItem">
              <LocationOn className="sidebarIcon" />
              <span className="sidebarListItemText">Location</span>
            </li>
            <li className="sidebarListItem">
              <History className="sidebarIcon" />
              <span className="sidebarListItemText">History</span>
            </li>
          </ul>

          <button className="sidebarButton">Show More</button>
          <hr className="sidebarHr" />
          <ul className="sidebarFriendList">
            <li className="sidebarFriend">
              <img
                src="./assets/person/1.jpg"
                alt=""
                className="sidebarFriendImg"
              />
              <span className="sidebarIconBadge"></span>
              <span className="sidebarFriendName">Lucy Barbies</span>
            </li>
            <li className="sidebarFriend">
              <img
                src="./assets/person/2.jpg"
                alt=""
                className="sidebarFriendImg"
              />
              <span className="sidebarIconOffline">7 minutes</span>
              <span className="sidebarFriendName">Cristiano Ronaldo</span>
            </li>
            <li className="sidebarFriend">
              <img
                src="./assets/person/3.jpg"
                alt=""
                className="sidebarFriendImg"
              />
              <span className="sidebarIconOffline">18 minutes</span>
              <span className="sidebarFriendName">Justin Beiber</span>
            </li>
            <li className="sidebarFriend">
              <img
                src="./assets/person/4.jpg"
                alt=""
                className="sidebarFriendImg"
              />
              <span className="sidebarIconBadge"></span>
              <span className="sidebarFriendName">Neymar JR</span>
            </li>
            <li className="sidebarFriend">
              <img
                src="./assets/person/5.jpg"
                alt=""
                className="sidebarFriendImg"
              />
              <span className="sidebarIconOffline">24 minutes</span>
              <span className="sidebarFriendName">Charlie Puth</span>
            </li>
            <li className="sidebarFriend">
              <img
                src="./assets/person/6.jpg"
                alt=""
                className="sidebarFriendImg"
              />
              <span className="sidebarIconBadge"></span>
              <span className="sidebarFriendName">Hanakoishi</span>
            </li>
            <li className="sidebarFriend">
              <img
                src="./assets/person/7.jpg"
                alt=""
                className="sidebarFriendImg"
              />
              <span className="sidebarIconBadge"></span>
              <span className="sidebarFriendName">Tommy Shelby</span>
            </li>
            <li className="sidebarFriend">
              <img
                src="./assets/person/8.jpg"
                alt=""
                className="sidebarFriendImg"
              />
              <span className="sidebarIconBadge"></span>
              <span className="sidebarFriendName">Jackie Chan</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
