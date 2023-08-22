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
        <div>Storage Pages v2 - WIP</div>
     );
}
 
export default Storages;