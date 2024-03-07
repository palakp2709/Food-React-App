import { useEffect, useState } from "react";
import { RESMENU_URL } from "./constants";
import { useParams } from "react-router-dom";

 const useRestaurantMenu = () =>{
 
    const [resData , setResData] = useState(null);
    const {resID}  =useParams()

    useEffect(()=>{
        fetchRestaurantData()
    } , []);

    const fetchRestaurantData = async () =>{
           const data = await fetch(RESMENU_URL+ resID);
           const json = await data.json();
           setResData(json?.data?.cards)
        
    }

    return resData ;
 }

 export default useRestaurantMenu;
