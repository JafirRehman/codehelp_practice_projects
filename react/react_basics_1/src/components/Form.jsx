import { useState } from "react";
import { useContext } from "react";
import { Updatedatacontext } from "../App";
const Form = () => {
  const ourcontextfunction = useContext(Updatedatacontext);

  const [newuser, setNewuser] = useState({
    title: "",
    price: "",
    date: "",
  });
  function updatevalues(e) {
    setNewuser({ ...newuser, [e.target.name]: e.target.value });
  }
  function createnewuser(e) {
    e.preventDefault();
    const ourcreateduser = {
      title: newuser.title,
      price: newuser.price,
      date: new Date(newuser.date),
    };
    console.log(ourcreateduser);
    ourcontextfunction(ourcreateduser);
  }
  return (
    <div className="flex flex-col gap-[30px] mt-20 mx-auto text-3xl max-w-[90%] items-center justify-center p-5">
      <form onSubmit={createnewuser} className="flex flex-col gap-12">
        <div>
          <label>Title</label>
          <input
            className="border-b-2 ml-5 w-96 focus:outline-none p-4 text-2xl"
            type="text"
            name="title"
            value={newuser.title}
            onChange={updatevalues}
          ></input>
        </div>
        <div>
          <label>Price</label>
          <input
            className="border-b-2 ml-5 w-96 focus:outline-none p-4 text-2xl"
            type="text"
            name="price"
            value={newuser.price}
            onChange={updatevalues}
          ></input>
        </div>
        <div>
          <label>Date</label>
          <input
            className="border-b-2 ml-5 w-96 focus:outline-none p-4 text-2xl"
            type="date"
            name="date"
            value={newuser.date}
            onChange={updatevalues}
          ></input>
        </div>
        <button
          type="submit"
          className="bg-red-500 p-3 rounded-full text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Form;
