import React from "react";
import Typed from "react-typed";
import "./Landing.scss";

export default function Landing() {
  return (
    <div>
      <div className="container">
        <div className="section-header">
          <h1 className="animated fadeInLeft headline">Hi, I'm Garrit</h1>
          <p id="subheadline" className="animated fadeInRight">
            I love{" "}
            <Typed
              strings={[
                "Open Source",
                "Node.js",
                "doing web stuff with React",
                "doing web stuff with Express.js",
                "building Apps for Android",
                "building Apps for iOS",
                "building Apps with Flutter",
                "going deep with Rust",
                "you! ❤️"
              ]}
              typeSpeed={50}
              backSpeed={40}
              backDelay={1000}
              startDelay={1000}
              smartBackspace
            />
          </p>
        </div>
      </div>
    </div>
  );
}