import React from "react";
const style = {
  width: "100%",
  cursor: "pointer",
  height: "100%",
};

export default function PhotoPlaceholder({ image, index, openImage }) {
  return (
    <div className="image-holder" key={image.src}>
      <span className="meme-top-caption">Top text</span>
      <img
        style={style}
        alt={index}
        src={image.src}
        onClick={() => openImage(index)}
        role="presentation"
      />
      <span className="meme-bottom-caption">Bottom text</span>
    </div>
  );
}
