/* eslint-disable react/prop-types */
import { useState } from "react";
import Card from "./Card";
const Tours = (props) => {
  const [overalldata, setOveralldata] = useState(props.data);

  function removeitem(id) {
    const alldata = overalldata.filter((ourobj) => ourobj.id !== id);
    setOveralldata(alldata);
  }
  return (
    <div className="mt-[100px] items-center justify-center gap-5 flex-wrap m-[50px] flex">
      {overalldata.map((dataobj, index) => {
        return <Card key={index} removeitem={removeitem} data={dataobj} />;
      })}
    </div>
  );
};

export default Tours;
