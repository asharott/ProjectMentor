import React from "react";

const Comment = (props) => {
  return (
    <div>
      <h3 className="commentName">{props.name}</h3>
      <p className="commentContent">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus
      </p>
    </div>
  );
};

export default Comment;
