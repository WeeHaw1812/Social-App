import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import "./rightbar.css";
export default function Rightbar() {
  return (
    <>
      <div className="rightbar">
        <div className="rightbarWrapper">
          <div className="rightbarBirthday">
            <h3 className="rightbarTitle">Birth Day</h3>
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
            {/**
            <img src="./assets/ads/2.jpg" alt="" className="AdsImg" />
            <img src="./assets/ads/3.jpg" alt="" className="AdsImg" />
            <img src="./assets/ads/4.jpg" alt="" className="AdsImg" />
            <img src="./assets/ads/5.jpg" alt="" className="AdsImg" />
            <span class="prev-button">
              <NavigateBefore htmlColor="white" />
            </span>
            <span class="next-button">
              <NavigateNext htmlColor="white" />
            </span>
             */}
          </div>
          <h3 className="rightbarTitle">Quick Links</h3>
          <hr className="rightbarHr" />
          <ul className="rightBarQuickLinks">
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
        </div>
      </div>
    </>
  );
}
