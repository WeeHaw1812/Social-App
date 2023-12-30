import { Close, MoreHoriz } from "@mui/icons-material";
import "./post.css";
import React, { useState } from "react";
import { Users } from "../../dummyData";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const likeHandle = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  console.log(like);
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
              className="postTopImg"
            />
            <span className="postUserName">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreHoriz className="postTopIcon" />
            <Close className="postTopIcon" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src="./assets/like.png"
              alt=""
              className="emojiIcon"
              onClick={likeHandle}
            />
            <img
              src="./assets/heart.png"
              alt=""
              className="emojiIcon"
              onClick={likeHandle}
            />
            <span className="postBottomCounter">{like} peoples liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
