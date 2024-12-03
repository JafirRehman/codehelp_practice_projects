/* eslint-disable react/prop-types */

const Datecomponent = (props) => {
  return (
    <div className=" flex gap-1">
      <p>{props.ourdate.getDate()}</p>
      <p>{props.ourdate.toLocaleString("en-US", { month: "long" })}</p>
      <p>{props.ourdate.getFullYear()}</p>
    </div>
  );
};

export default Datecomponent;
