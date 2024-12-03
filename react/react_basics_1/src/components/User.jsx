/* eslint-disable react/prop-types */
import { useState } from "react";
import Datecomponent from "./Datecomponent";
const User = (props) => {
  const [title, setTitle] = useState(props.oneuser.title);

  return (
    <div className=" flex justify-around text-white text-3xl">
      <Datecomponent ourdate={props.oneuser.date} />
      <p>{props.oneuser.price}</p>
      <h1>{title}</h1>
      <button
        onClick={() => setTitle("ali")}
        className="bg-red-500 rounded-full p-3 "
      >
        {" "}
        change
      </button>
    </div>
  );
};

export default User;
