import { useState } from "react";

const User = (props) => {

    let [count, setCount] = useState(0);
    const [count2] = useState(2)
    return(
        <div>
           Functional Based Component
           <h4> count : {count} </h4>
            <button onClick={() => {
                setCount(count++);
            }}>CLick ME</button>
           <h4>{props.name} - {props.profession}</h4>
        </div>
    )
}

export default User;