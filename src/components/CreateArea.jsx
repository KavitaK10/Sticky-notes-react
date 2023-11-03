import React, { useEffect, useState } from "react";
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function handleEdit() {
    setNote((prevValue) => {
      return { ...prevValue, ...props.noteEdit };
    });
  }
  useEffect(() => {
    if (props.btnClicked) {
      handleEdit();
    }
  });

  return (
    <div className="myinput">
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button className="highlight-button" onClick={submitNote}>
          +
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
