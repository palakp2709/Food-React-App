import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "35969467-7084-470f-ab29-ebdefdbbb413");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="h-screen w-full">
      <div className="h-full w-full max-w-[500px] mx-auto flex flex-col ">
        <div className="py-8 mx-auto">
          <h1 className="text-2xl font-bold text-[#222831]">Contact Me 🙋🏻‍♀️</h1>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col ">
          <input
            type="text"
            name="name"
            required
            className="m-2 bg-gray-300 px-2"
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            required
            className="m-2 bg-gray-300 px-2"
            placeholder="Email"
          />
          <textarea
            name="message"
            required
            className="m-2 bg-gray-300 px-2"
            placeholder="Message"
          ></textarea>

          <button type="submit" className=" text-sm p-2 px-4 mt-4 bg-slate-400 text-gray-600 w-36 mx-auto">Submit Form</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
