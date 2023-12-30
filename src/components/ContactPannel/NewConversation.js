import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function NewConversation(props) {
  let handleClick = () => {
    props.showNewConvoTab(true);
  };
  return (
    <div className="new-convo" onClick={handleClick}>
      <p>New Conversation</p>
      <span >
      <FontAwesomeIcon className="fas" icon={faPlus} />
      </span>
    </div>
  );
}

export default NewConversation;