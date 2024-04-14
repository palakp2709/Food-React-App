import { useState } from "react";

const User = (props) => {
  let [count, setCount] = useState(0);
  const [count2] = useState(2);
  return (
    <div className="shadow-md shadow-slate-300 p-2 max-w-[300px] mx-auto m-4 bg-gray-100">
      <p className="text-sm font-bold text-[#3d4450]">
        Functional Based Component
      </p>
      <h4 className="text-[#31363F] text-sm"> count : {count} </h4>
      <button
        onClick={() => {
          setCount(count++);
        }}
        className="text-[#31363F] text-sm border border-black px-2 m-2 hover:bg-[#76ABAE] hover:border-[#76ABAE] rounded-sm"
      >
        count++
      </button>
      <h4 className="text-[#31363F] text-xs ">
        {props.name} - {props.profession}
      </h4>
    </div>
  );
};

export default User;
