import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="h-screen w-full">
      <div className="h-full w-full flex flex-col justify-center max-w-[800px]  mx-auto">
        <h1 className="text-xl font-bold">Opps!!! 🙆🏻‍♂️👧🏻</h1>
        <h2 className="text-lg text-[#222831]">Something Went Wrong!</h2>
        <h3 className="text-[#5b6068]">{err.status}</h3>
        <h3 className="text-[#49515e]">{err.statusText}</h3>
      </div>
    </div>
  );
};

export default Error;
