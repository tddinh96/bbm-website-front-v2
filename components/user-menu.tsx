"use client";

import { User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";


const UserMenu = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);
  
    const router = useRouter();
    const cart = useCart();
  
    if (!isMounted) {
      return null;
    }
  
    return ( 
        <div className="ml-auto flex items-center gap-x-4">
          <Button onClick={() => {}} className="flex items-center rounded-full bg-black px-4 py-2">
            <User
              size={20}
              color="white"
            />
          </Button>
        </div>
      );
    };

export default UserMenu;
