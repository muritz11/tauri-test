import React from "react";
import PlusIcon from "../assets/icons/plus-grey.png";
import SearchIcon from "../assets/icons/search.png";
import EllipsesIcon from "../assets/icons/ellipses.png";

const ChatHistories = [
  "ISO Certified Companies",
  "ISO Certified Companies",
  "ISO Certified Companies",
  "ISO Certified Companies",
  "ISO Certified Companies",
  "ISO Certified Companies",
];

const Sidebar = () => {
  return (
    <>
      <div className="side-inputs">
        <button>
          <img src={PlusIcon} height={"31px"} width={"31px"} alt="plus icon" />
          <span>New Chat</span>
        </button>
        <div className="search-input">
          <input type="text" placeholder="Search the chats" />
          <img
            src={SearchIcon}
            height={"20px"}
            width={"20px"}
            alt="search icon"
          />
        </div>
        <hr />
      </div>
      <div className="chat-histories">
        <h3>Last Chats</h3>
        {ChatHistories.map((val, idx) => (
          <div
            className={`chat-history ${!idx ? "active" : ""}`}
            key={`ch-${idx}`}
          >
            <p>{val}</p>
            <img
              src={EllipsesIcon}
              height={"5px"}
              width={"19px"}
              alt="search icon"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
