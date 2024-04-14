import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
    };
    console.log("Child Constructor");
  }

  componentDidMount() {
    console.log("Child ComponentDIDMount");
  }

  render() {
    console.log("Child rendering");
    const { name, profession } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="shadow-md shadow-slate-300 p-2 max-w-[300px] mx-auto bg-gray-100">
        <p className="text-sm font-bold text-[#3d4450]">
          Class Based Component
        </p>
        <h4 className="text-[#31363F] text-sm">
          {" "}
          count : {count} & count2 : {count2}
        </h4>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
          className="text-[#31363F] text-sm border border-black px-2 m-2 rounded-sm hover:bg-[#76ABAE] hover:border-[#76ABAE]"
        >
          count++
        </button>

        <button
          onClick={() => {
            this.setState({
              count2 : this.state.count2 + 2,
            });
          }}
          className="text-[#31363F] text-sm border border-black px-2 m-2 rounded-sm hover:bg-[#76ABAE] hover:border-[#76ABAE]"
        >
          count2++
        </button>
        <h4 className="text-[#31363F] text-xs ">
          {name} - {profession}
        </h4>
      </div>
    );
  }
}

export default UserClass;
