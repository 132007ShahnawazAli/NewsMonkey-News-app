import React, { useState } from "react";

function NewsItem(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    window.open(props.newsURL, "_blank");
  };

  const { title, description, imageURL, author, date, sourceName } = props;

  const cardStyle = {
    position: "relative",
    transform: isHovered ? "translateY(-5px)" : "none",
    transition: "transform 0.2s ease-out",
    cursor: "pointer",
    backgroundColor: isHovered ? "#f0f0f0" : "white",
  };

  const cardTextStyle = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: "3",
    WebkitBoxOrient: "vertical",
  };

  const titleStyle = {
    textDecoration: isHovered ? "underline" : "none",
  };

  return (
    <div className="card my-2" style={cardStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}
    >
      <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: 0, }} >
        <span className="badge rounded-pill bg-danger">{sourceName}</span>
      </div>
      {imageURL && <img src={imageURL} className="card-img-top" alt="..." />}
      <div className="card-body">
        <h5 className="card-title" style={titleStyle}> {title} </h5>
        <p className="card-text" style={cardTextStyle}> {description} </p>
        <p className="card-text">
          <small className="text-body-secondary">{`By ${!author ? "Unknown" : author} on ${new Date(date).toGMTString()}`}</small>
        </p>
      </div>
    </div>
  );
};

export default NewsItem;
