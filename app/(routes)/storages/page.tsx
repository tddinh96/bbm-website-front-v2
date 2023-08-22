"use client";
import { useEffect, useState } from "react";

const Storages = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(()=> {
        setIsMounted(true);
    }, []);

    if(!isMounted){
        return null;
    }
    return ( 
        <div>Storage Pages v2 - WIP- This is my starting page - clean</div>
     );
}
 
export default Storages;