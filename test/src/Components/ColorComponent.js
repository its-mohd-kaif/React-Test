import React, { memo, useContext, useState } from "react";
import { noteContext } from "../App";

function ColorComponent() {
  // Color Container
  const [data, setData] = useState([]);
// useContext for data transfer
  const user = useContext(noteContext);
// Fetch Api
  const apiFetchHandler = () => {
    fetch("https://dummyjson.com/users/filter?key=hair.color&value=Black ")
      .then((response) => response.json())
      .then((val) => {
        setData([val]);
        user.value.push([val.users[0].eyeColor]);
      });
  };
  return (
    <div>
      <center>
        <h2>Color</h2>
        <button onClick={apiFetchHandler}>Fetch Color Api</button>
      </center>
    </div>
  );
}

export default memo(ColorComponent);
