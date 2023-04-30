import React, { useEffect } from "react";
import { getServers } from "../../Services/UserServices";
import Item from "../Item";
import "./index.css";

function Dashboard(){
    
    const [data,setData] = React.useState([]);


    useEffect(()=>{
        getServers().then(data => {
            if (data.status === 200) {
                let jsonData = data.data;
                console.log(jsonData);
                setData(jsonData);
            }
            else {
                alert("Not a success")
            }
        })
            .catch(error => console.log(error));
    },[]);

    return(
        
        <>

            <div className="dashboard-container">
                {
                    data.map(data => <Item className="dashboard-item" id={data.id} name={data.name} language={data.language} framework={data.framework}></Item>)
                }
            </div>
        </>
    )
}

export default Dashboard;