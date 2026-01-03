import {useNavigate} from "react-router-dom";
export default function RestaurantCard({data,isAdmin,onDelete}){
    const navigate=useNavigate();
    return(
    <div className="card">
        <img src={data.image}alt=""/>
        <h3>{data.restaurantName}</h3>
        <p>{data.address}</p>
        <p>{data.type}</p>
        <p>
            Parking :{data.parkingLot?"Yes":"No"}
        </p>
        {isAdmin &&(
            <>
            <button onClick={()=>navigate('/admin/restaurants/update/${data.restaurantID}')}></button>
            <button onClick={()=>onDelete(data.restaurantID)}>Delete</button>
            
            
            </>
        )}
    </div>
    )
}