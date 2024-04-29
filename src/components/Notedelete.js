import React from "react";
import RestoreIcon from '@mui/icons-material/Restore';


function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note ">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        {/* <DeleteIcon /> */}
        <RestoreIcon/>
      </button>
    </div>
  );
}

export default Note;
