//BASIC REACT CODE
// const head = React.createElement(
//     "h1" ,     //html tag
//      {id:"heading"} ,     //attribute : key-value pairs(additonal info we pass into the tag)
//      "Hello World To React!"  //childern which put inside the h1 tag
//  );


// NESTED TAGS ---TASK TO DO -- NESTED REACT CODE!
{/* <div id="parent">
    <div id="child1">  when have more than 1 childern always put inside in array
          <h1>Hello React</h1>      
          <h2>Hello ReactDOM</h2>
    </div>

    <div id="child2"> 
          <h1>Hello React</h1>      
          <h2>Hello ReactDOM</h2>
    </div>
</div> */}

const parent = React.createElement("div" , { id:"parent" } ,[
       React.createElement("div" , { id : "child1"} , [
          React.createElement("h1" , {} , "Hello React from h1tag"),
          React.createElement("h2" , {} , "Hello ReactDOM from h2 tag")
       ]),

       React.createElement("div" , {id: "child2"} , [
        React.createElement("h1" , {} , "Hello React from h1tag"),
        React.createElement("h2" , {} , "Hello ReactDOM from h2 tag")
       ])
])



console.log(parent)  //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)  
//the job of root.render method is to : 
//A>   take that head object 
//B>   convert it into h1 tag and 
//C>   put in on the dom
