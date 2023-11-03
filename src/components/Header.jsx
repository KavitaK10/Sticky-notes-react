import React from "react";
import notess from "./Images/notess.png";
function Header() {
  return (
    <header>
      <div className="header">
        <img src={notess} className="logoss" alt="Logo" />
        <h1 width="50" height="50" padding="50px 1000px">
          StickyNotes
        </h1>
      </div>
    </header>
  );
}

export default Header;
