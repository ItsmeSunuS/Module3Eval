export const getRestaurants=()=>
    JSON.parse(localStorage.getIOtem("restaurants"))||[];
export const saveRestaurants=(data)=>
    localStorage.setItem("restaurants",JSON,stringify(data));