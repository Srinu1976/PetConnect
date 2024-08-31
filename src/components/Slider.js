// components/LogoSlider.js
import { useEffect, useState } from "react";
import Logo1 from "../../public/Logos/Logo (1).png";
import Logo2 from "../../public/Logos/Logo (2).png";
import Logo3 from "../../public/Logos/Logo (3).png";
import Logo4 from "../../public/Logos/Logo (4).png";
import Logo5 from "../../public/Logos/Logo (5).png";
import Logo6 from "../../public/Logos/Logo (6).png";
import Image from "next/image";

const LogoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 6); // Assuming you have 6 logos
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];

  return (
    <div className="overflow-hidden h-full flex items-center">
      <div
        className="flex transition-transform duration-5000 linear"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {logos.map((logo, index) => (
          <div key={index} className="flex-none flex-shrink-0 ml-3">
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
