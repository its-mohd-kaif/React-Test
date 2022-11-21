import React, { memo, useContext, useEffect, useState } from "react";
import { noteContext } from "../App";

function GenderComponent() {
  // Gender Component
  const [data, setData] = useState([]);

  const user = useContext(noteContext);


  let tempAge = user.value[0];
  let tempColor = user.value[1];
  var tempGender;


  const apiFetchHandler = () => {
    fetch("https://dummyjson.com/users/filter?key=gender&value=male")
      .then((response) => response.json())
      .then((val) => {
        setData([val.users[0]]);
      });
  };
  return (
    <div>
      <center>
        <h2>Gender</h2>
        <button onClick={apiFetchHandler}>Fetch Gender Api</button>
        <h1>{tempAge}</h1>
        <h1>{tempColor}</h1>
        <h1>{tempGender}</h1>
      </center>
    </div>
  );
}

export default memo(GenderComponent);
