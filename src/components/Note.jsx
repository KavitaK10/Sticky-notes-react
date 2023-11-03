import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button className="trash-bin-button" onClick={handleClick}>
        Delete
      </button>
      <button>Edit</button>
    </div>
  );
}

export default Note;
