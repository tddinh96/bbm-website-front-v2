"use client";
import { useEffect, useState } from "react";
import { RadioGroup } from '@headlessui/react';


const product = {
    name: 'Boat Storage',
    slip: 'Uncovered / Covered Slip',
    dryStorage: '',
    href: '#',
    images: [
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
        alt: 'Two each of gray, white, and black shirts laying flat.',
      },
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
        alt: 'Model wearing plain black basic tee.',
      },
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
        alt: 'Model wearing plain gray basic tee.',
      },
      {
        src: 'https://static.wixstatic.com/media/dbaa91_b06ea863c6df478399e5fca41a4b116d~mv2.png/v1/fill/w_537,h_666,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Slip%20Storage%20FINAL%20(1).png',
        alt: 'Model wearing plain white basic tee.',
      },
    ],
    colors: [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    description:
      'Find your sanctuary at Big Break Marina, where we offer fortified dry storage for trailers and sheltered berths for boats. Our mission is to shield your valuable investment from the elements, providing not just a storage facility, but a bastion for your prized vessels. With seamless access that ensures your next voyage is only ever a heartbeat away, we make it easy for you to sail whenever the mood strikes. Place your trust in our robust facilities and outstanding service, committed to safeguarding your vessel round the clock. At Big Break Marina, your peace of mind is our greatest reward.',
    highlights: [
      'Hand cut and sewn locally',
      'Dyed with our proprietary colors',
      'Pre-washed & pre-shrunk',
      'Ultra-soft 100% cotton',
    ],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  }
  
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }


const Storages = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [selectedColor, setSelectedColor] = useState(product.colors[0])

    useEffect(()=> {
        setIsMounted(true);
    }, []);

    if(!isMounted){
        return null;
    }
    return ( 
        <div>Storage Pages v2 - WIP- This is my starting page</div>
     );
}
 
export default Storages;



  

