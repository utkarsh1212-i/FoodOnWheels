import Image from "next/image";
import React from "react";
import truck1 from "../public/harry-gillen-b2gdRynjL9Q-unsplash.jpg";
import truck2 from "../public/pexels-artem-saranin-1766682.jpg";
import truck3 from "../public/truckstop.jpg";
import truck4 from '../public/pexels-kampus-production-5920744.jpg'

const TruckCards = () => {
  return (
    <div className="flex-center md:flex-nowrap flex-wrap gap-6 ">
      <div>
        <Image src={truck1} alt="truck1" className="truck-card rounded-xl" />
      </div>
      <div>
        <Image src={truck2} alt="truck2" className="truck-card rounded-xl" />
      </div>
      <div>
        <Image src={truck3} alt="truck3" className="truck-card rounded-xl" />
      </div>
      <div>
        <Image src={truck4} alt="truck4" className="truck-card rounded-xl" />
      </div>
    </div>
  );
};

export default TruckCards;
