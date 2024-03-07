const Contact = () =>{
    return(
        <div>
            <h1 className="font-bold p-4 m-4 text-2xl">Contact ME Page</h1>
            <form>
                <input 
                 className="border border-solid border-black  p-2 m-4"
                 type="text" 
                 placeholder="name"
                 />
                <input 
                className="border border-solid border-black  p-2 m-4"
                 type="text" 
                 placeholder="messgae"
                 />
                <button   className="border border-solid border-black  p-2 m-4 bg-slate-400 rounded">submit</button>
            </form>
        </div>
    )
}

export default Contact;