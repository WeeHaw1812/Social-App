import "./rightbar.css";
export default function rightbar({ profile }) {
  const HomeRightBar = () => {
    return (
      <>
        <div className="rightbarBirthday">
          <h2 className="rightbarTitle">Birth Day</h2>
          <hr className="rightbarHr" />
          <div className="birthdayContainer">
            <img src="./assets/gift.png" alt="" className="birthdayImg" />
            <span className="birthdayText">
              <b>Hanakoshi</b> and <b> 2 other friends</b> have a birthday
              today.
            </span>
          </div>
        </div>

        <div className="rightbarAds">
          <img src="./assets/ads/1.jpg" alt="" className="AdsImg" />
        </div>
        <h3 className="rightbarTitle">Quick Links</h3>
        <hr className="rightbarHr" />
        <ul className="rightbarQuickLinks">
          <li className="QuickLink">
            <img
              src="./assets/quicklinks/volleyball.jpg"
              alt=""
              className="quickLinkImg"
            />
            <span className="quickLinkText">Beach Volleyball</span>
          </li>
          <li className="QuickLink">
            <img
              src="./assets/quicklinks/cocacola.jpg"
              alt=""
              className="quickLinkImg"
            />
            <span className="quickLinkText">Coca-Cola</span>
          </li>
          <li className="QuickLink">
            <img
              src="./assets/quicklinks/texas.jpg"
              alt=""
              className="quickLinkImg"
            />
            <span className="quickLinkText">Texas Chicken</span>
          </li>
          <li className="QuickLink">
            <img
              src="./assets/quicklinks/heart.jpg"
              alt=""
              className="quickLinkImg"
            />
            <span className="quickLinkText">Way to her heart</span>
          </li>
          <li className="QuickLink">
            <img
              src="./assets/quicklinks/heineken.jpg"
              alt=""
              className="quickLinkImg"
            />
            <span className="quickLinkText">Heineken Beer</span>
          </li>
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information!</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Brazil</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue"> Mogi das Cruzes</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>

        <h4 className="rightbarTitle">User Friends!</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="./assets/person/1.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Lucy Barbies</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="./assets/person/2.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Cristiano Ronaldo</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="./assets/person/3.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Justin Beiber</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="./assets/person/7.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Tommy Shelby</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="./assets/person/5.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Charlie Puth</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="./assets/person/6.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Hanankoishi</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="rightbar">
        <div className="rightbarWrapper">
          {profile ? <ProfileRightBar /> : <HomeRightBar />}
        </div>
      </div>
    </>
  );
}
