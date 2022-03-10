import React, { useState, useEffect } from "react";
import axios from "axios";

function Comments() {
  const [comment, setComment] = useState("");
  const [array, setArray] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://comments-f16.herokuapp.com/api/getComment",
    })
      .then((res) => setArray(res.data))
      .catch((err) => console.log(err));
  }, [comment]);

  // const array1 = [];
  // array.map((item) => array1.push(item));
  // array1.push(comment);

  // setArray(array1);

  const handleClick = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://comments-f16.herokuapp.com/api/addComment",
      data: {
        comment: comment,
      },
    })
      .then((res) => setComment(""))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form onSubmit={handleClick}>
        <input
          placeholder="enter comment here"
          onChange={(e) => setComment(e.target.value)}
        />
        <button>add comment</button>
      </form>
      {array.map((item) => (
        <h5 key={item.id}>{item.comment}</h5>
      ))}
    </>
  );
}

export default Comments;

// const array1 = [];
// array.map((item) => array1.push(item));
// array1.push(comment);

// setArray(array1);

// axios("http://localhost:5000/api/addComment", {comment})
