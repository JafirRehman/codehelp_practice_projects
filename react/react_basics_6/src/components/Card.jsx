/* eslint-disable react/prop-types */
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
const Card = (props) => {
  const [counter, setCounter] = useState(0);
  const xyz = props.alldata;
  function nextperson() {
    if (counter === xyz.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  }
  function prevperson() {
    if (counter === 0) {
      setCounter(xyz.length - 1);
    } else {
      setCounter(counter - 1);
    }
  }
  function random() {
    let ijk = Math.floor(Math.random() * (xyz.length - 1 - 0 + 1)) + 0;
    setCounter(ijk);
  }
  let abc = xyz[counter];
  return (
    <div className="bg-white relative px-12 mt-12 rounded-lg text-purple-700 flex w-[60vw] flex-col gap-[30px] pt-12 pb-12 items-center text ">
      <div className="absolute -top-16 left-10 w-[130px] h-[130px] rounded-full shadow-[9px_-5px_0px_rgb(123,31,162)]">
        <img className="rounded-full" src={abc.image}></img>
      </div>
      <div className="flex flex-col items-center mt-5">
        <h1 className="text-black text-[25px] font-bold">{abc.name}</h1>
        <h2 className="text-[15px] text-slate-400">{abc.job}</h2>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <FaQuoteLeft />
        <p className="text-center text-purple-950">{abc.text}</p>
        <FaQuoteRight />
      </div>
      <div className="flex gap-5 text-[25px] font-bold">
        <button onClick={prevperson}>
          <FiChevronLeft />
        </button>
        <button onClick={nextperson}>
          <FiChevronRight />
        </button>
      </div>
      <button
        onClick={random}
        className="text-white font-bold bg-purple-700 py-[10px] rounded-md px-[30px]"
      >
        Surprise Me
      </button>
    </div>
  );
};

export default Card;
