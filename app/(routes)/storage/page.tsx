"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Storages = () => {
  const features = [
    {
      name: "Dry Storage",
      description: "Pricing is based on monthly rate",
      prices: [
        "Up to 29 fet in length: $95",
        "Above 30 ft: $200",
        "If you have a slip you will you get $50 discount to store your trailer*",
      ],
    },
    {
      name: "Uncovered / Covered Slips",
      description: "Pricing is based on monthly rate",
      prices: [
        "Up to 20 ft in length: $125.00",
        "20 ft to 23 ft in length: $135.00",
        "24 ft to 26 ft in length: $150.00",
        "27 ft to 29 ft in length: $165.00",
        "30 ft to 34 ft in length: $180.00",
      ],
    },
  ];
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-4 gap-y-16 px-4 py-24 sm:px-6 sm:py-12 lg:max-w-7xl lg:grid-cols-1 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Storage
          </h2>
          <p className="mt-4 text-gray-500">
            Find your sanctuary at Big Break Marina, where we offer fortified
            dry storage for trailers and sheltered berths for boats. Our mission
            is to shield your valuable investment from the elements, providing
            not just a storage facility, but a bastion for your prized vessels.
            With seamless access that ensures your next voyage is only ever a
            heartbeat away, we make it easy for you to sail whenever the mood
            strikes. Place your trust in our robust facilities and outstanding
            service, committed to safeguarding your vessel round the clock. At
            Big Break Marina, your peace of mind is our greatest reward.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.reverse().map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <h3 className="text-md font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {feature.name}
                </h3>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {feature.prices.map((price) => (
                      <li key={price} className="text-gray-400">
                        <span className="text-gray-600">{price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
          <Image
            src="/images/covered-slip.jpg"
            width={500}
            height={500}
            alt="A view of a covered slip."
            className="rounded-lg bg-gray-100"
          />
          <Image
            src="/images/dry-storage-2.jpeg"
            width={500}
            height={500}
            alt="A view of dry storage."
            className="rounded-lg bg-gray-100"
          />
        </div>
        {/* Maps */}
        <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
        <Image
            src="/images/dry-storage-v2_new.jpeg"
            width={1000}
            height={1000}
            alt="A map of dry storage."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Storages;
