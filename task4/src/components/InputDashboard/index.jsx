import React, { useEffect } from "react";
import './index.css'
import { addServer } from "../../Services/UserServices";

function InputDashboard(){


    const [data,setData] = React.useState({
        "id":"",
        "name":"",
        "language":"",
        "framework":""
    });

    const {id,name,language,framework} = data;

    useEffect(()=>{
        console.log(data);
    },[]);

    const changeHandler = (e)=>{
        // console.log(e.target.value)
        setData({
          ...data,
            [e.target.name]:e.target.value
        })
        // console.log(data)

    }

    const submitHandler = e =>{
        e.preventDefault();
        console.log(data)
        addServer(data).then((data) => {
            if (data.status === 201) {
                {
                    alert("sucess");
                    setData({...data});
                }
            }
            else {
                alert("Not Sucess");
            }
        })
            .catch((err) => {
                console.error(err);
                alert("Something Err");
            })

    }
    return(
        <>
           <form onSubmit={submitHandler}>
            <div>
                <label for="firstname">Id: </label>
                <input type="text" name="id" value={id} required onChange={changeHandler}></input>
            </div>
            <div>
                <label for="lastname">Name: </label>
                <input type="text" name="name" value={name} required onChange={changeHandler}></input>
            </div>
            <div>
                 <label for="email">Language: </label>
                <input type="text" name="language"  value={language} required onChange={changeHandler}></input>
            </div>
            <div>
                <label for="password">Framework: </label>
                <input name="framework" value={framework}  required onChange={changeHandler}></input>
            </div>
            <div>
                 <button type="submit" className="add-btn">Add</button>
            </div>
                
            </form>
        </>
    )
}

export default InputDashboard;