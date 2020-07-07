import React from "react";

const Comment = (props) => {
  return (
    <div>
      <h3 className="commentName">{props.name}</h3>
      <p className="commentContent">{props.content}</p>
    </div>
  );
};

export default Comment;
