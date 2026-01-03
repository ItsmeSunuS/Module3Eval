import {useState}from "react"
const types=["Rajasthani",
    "Gujarati",
    "Jain",
    "Tamil Nadu",
    "Kerala"
];
export default function AddRetaurant({onAdd}){
    const[ form ,setForm]=useState({
        restaurantName:"",
        address:"",
        type:"",
        parkingLot:"",
        Image:"https://via.placeholder.com/150"

    })
    const handleAdd=()=>{
        if(!form.restaurantName||!form.address||!form.type||!form.parkingLot===""){
            alert("All fieldsare required");
            return;
        }
    }
    onAdd({ form,restaurantID:Date.now(),
        parkingLot:formparkingLot==="true"

    })
    alert("Restaurant added");
    setForm({
        restaurantName:"",
        address:"",
        type:"",
        parkingLot:"",
        image:"https://via.placeholder.com/150"

    }

    )
}
return(
    <div className="sidebar">
        <h3>Add Restaurant</h3>
        <input placeholder="Name" value="{form.restaurantName}" onChange={e=>setForm({...form,restaurantName:e.target.value})}>
        </input>
        <input placeholder="Address" value="{form.Address}" onChange={e=>setForm({...form,Address:e.target.value})}>
        </input>
        <select onchange={e=>setForm({...form,parkingLot:e.target.value})}></select>
        <option value=""Parking></option>
         <option value=""Parking></option>
    </div>
)
