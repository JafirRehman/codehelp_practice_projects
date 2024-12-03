/* eslint-disable react/prop-types */
import User from "./User";
const Card = (props) => {
  return (
    <div className="bg-blue-500 mt-20 p-5 flex-col flex gap-4 max-w-[90%] mx-auto rounded-md">
      {props.bigdata.map((user, index) => {
        return <User key={index} oneuser={user} />;
      })}
    </div>
  );
};

export default Card;
