import { deleteServer } from "../../Services/UserServices";
import './index.css';
function Item(props){

    return(
        <>
            <div className="item-container">
                <p>{props.id}</p>
                <p>{props.name}</p>
                <p>{props.language}</p>
                <p>{props.framework}</p>
                <button id="delete-btn" onClick={
                    function delServer(){
                       deleteServer(props.id).then(response=>{
                        if (response.status===200){
                            console.log("deleted successfully");
                            window.location.reload();
                        }
                        else{
                            alert("Failure");
                        }
                        })
                        .catch(error=>{
                        console.log(error);}
                        )
                    }
                }>Delete</button>
            </div>
        </>
    )
}
export default Item;