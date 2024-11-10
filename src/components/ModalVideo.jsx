import React from "react";

export default function ModalVideo({link}) {
  return (
    <div
      className={
        "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl  z-50"
      }
    >
      <div className="container">
        <div className={"aspect-video"}>
          <iframe
            className={"w-full h-full"}
            src={link}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
