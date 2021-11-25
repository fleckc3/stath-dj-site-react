import React from "react";

const SoundCloudPlayer = () => {
  return (
    <div>
      <iframe
        title="stath-soundcloud-player"
        width="100%"
        height="300px"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1183207051&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
      <div
        style={{
          fontSize: "10px",
          color: "#cccccc",
          lineBreak: "anywhere",
          wordBreak: "normal",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          fontFamily:
            "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
          fontWeight: 100,
        }}
      >
        <a
          href="https://soundcloud.com/chrisstathmusic"
          title="Chris Stath"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          Chris Stath
        </a>{" "}
        ·{" "}
        <a
          href="https://soundcloud.com/chrisstathmusic/sets/chris-stath-remixes"
          title="Chris Stath Remixes"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          Chris Stath Remixes
        </a>
      </div>
    </div>
  );
};

export default SoundCloudPlayer;
