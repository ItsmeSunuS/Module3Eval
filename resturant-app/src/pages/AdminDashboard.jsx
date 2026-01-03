import {useEffect,useState}from "react";
import {getRestaurants,saveRestaurants}from "../data";
import AddRestaurant from "../components/AddRestaurant"
import RestaurantCard from "../components/RestaurantCard"
export default function AdminDashboard(){
    const [restaurantrestaurants,setRestaurantss]=useState([]);
    useEffect(()=>{
        setRestaurantss(getRestaurants());
    },[]);
    const addRestaurants(getRestaurants());
},[]

}