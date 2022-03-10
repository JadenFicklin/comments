import React, { useState } from "react";

function Comments() {
  const [comment, setComment] = useState("");
  const [array, setArray] = useState([]);

  console.log(array);

  const handleClick = (e) => {
    e.preventDefault();
    const array1 = [];
    array.map((item) => array1.push(item));
    array1.push(comment);

    setArray(array1);
  };

  return (
    <>
      <form onSubmit={handleClick}>
        <input
          placeholder="enter comment here"
          onChange={(e) => setComment(e.target.value)}
        />
        <button>add comment</button>
        {array.map((item) => (
          <h5>{item}</h5>
        ))}
      </form>
    </>
  );
}

export default Comments;
