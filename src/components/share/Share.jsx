import React from "react";
import "./share.css";
import { EmojiEmotions, Filter, LiveTv, Place } from "@mui/icons-material";
export default function Share() {
  return (
    <>
      <div className="share">
        <div className="shareWrapper">
          <div className="shareTop">
            <img
              className="shareProfileImg"
              src="./assets/person/4.jpg"
              alt=""
            />
            <input placeholder="What's in your mind?" className="shareInput" />
          </div>
          <hr className="shareHr" />
          <div className="shareBottom">
            <div className="shareOptions">
              <div className="shareOption">
                <LiveTv htmlColor="#FF6700" className="shareIcon" />
                <span className="shareOptionText">LiveTV</span>
              </div>
              <div className="shareOption">
                <Filter htmlColor="#00a400" className="shareIcon" />
                <span className="shareOptionText">Photo/Video</span>
              </div>
              <div className="shareOption">
                <Place htmlColor="#FD1C03" className="shareIcon" />
                <span className="shareOptionText">Location</span>
              </div>
              <div className="shareOption">
                <EmojiEmotions htmlColor="#F6BE00" className="shareIcon" />
                <span className="shareOptionText">Emotions</span>
              </div>
            </div>
            <div className="shareButton">Share</div>
          </div>
        </div>
      </div>
    </>
  );
}
