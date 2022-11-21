import React, { memo, useContext, useState } from "react";
import { noteContext } from "../App";

function AgeComponent() {
  // Age Container
  const [data, setData] = useState([]);
// useContext for data transfer
  const user=useContext(noteContext);


// Fetch Api
  const apiFetchHandler = () => {
    fetch("https://dummyjson.com/users/filter?key=age&value=30 ")
      .then((response) => response.json())
      .then((val) => {
        setData([val]);
        user.value.push([val.users[0].age])
      });
  };

  return (
    <div>
      <center>
        <h2>Age</h2>
        <button onClick={apiFetchHandler}>Fetch Age Api</button>
      </center>
    </div>
  );
}

export default memo(AgeComponent);
