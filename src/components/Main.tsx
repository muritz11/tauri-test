import React, { useState } from "react";
import PlusIcon from "../assets/icons/plus.png";
import Logo from "../assets/images/Logo.png";
import LikeIcon from "../assets/icons/Likee.png";
import UnlikeIcon from "../assets/icons/Like.png";
import CopyIcon from "../assets/icons/Copy.png";

const ChatHistory = [
  {
    prompt:
      "ISO Certified Companies Cutting Tools Materials Made of Steel Near Me",
    response: `
        <h1>ISO Certified Companies Cutting Tools Materials Made of Steel Near Me</h1>
        <p>10 companies were found with ISO certification for cutting tools materials made of steel in Texas. The closest to the location you specified is company A and the furthest is company B. Companies C, D and E also manufacture equipment out of fiberglass.</p>
        `,
  },
];

const Main = () => {
  const [toggles, setToggles] = useState({
    deepThinking: false,
    searchWeb: false,
  });

  return (
    <>
      {/* bottom fixed chat input */}
      <div className="chat-input-container">
        <div className="chat-input">
          <div>
            <input type="text" placeholder="Ask me anything" />
          </div>
          <div className="chat-utilities">
            <div className="cu-left">
              <img
                src={PlusIcon}
                height={"47px"}
                width={"47px"}
                alt="Plus icon"
              />
              <button
                className={toggles.deepThinking ? "active" : ""}
                onClick={() => {
                  setToggles((prevState) => ({
                    ...prevState,
                    deepThinking: !toggles.deepThinking,
                  }));
                }}
              >
                Deep Thinking
              </button>
              <button
                className={toggles.searchWeb ? "active" : ""}
                onClick={() => {
                  setToggles((prevState) => ({
                    ...prevState,
                    searchWeb: !toggles.searchWeb,
                  }));
                }}
              >
                Search the web
              </button>
            </div>
            <div className="cu-right">
              <img src={Logo} height={"43px"} width={"43px"} alt="Logo" />
            </div>
          </div>
        </div>
      </div>

      <div className="chat-container">
        {ChatHistory.map((val, idx) => (
          <div key={`cc-${idx}`} className="chat-sub-container">
            <div className="response">
              <div
                className="markdown-container"
                dangerouslySetInnerHTML={{ __html: val.response }}
              ></div>
              <div className="actions">
                <img
                  src={CopyIcon}
                  height={"15px"}
                  width={"15px"}
                  alt="Copy icon"
                />
                <img
                  src={LikeIcon}
                  height={"16.43px"}
                  width={"16.43px"}
                  alt="Like icon"
                />
                <img
                  src={UnlikeIcon}
                  height={"16.43px"}
                  width={"16.43px"}
                  alt="Unlike icon"
                />
              </div>
              <div>
                <button className="sources-btn">Sources</button>
              </div>
            </div>
            <div className="prompt">{val.prompt}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Main;
