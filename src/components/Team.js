import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image1 from "../../public/Team/Polygon 1.svg";
import Image2 from "../../public/Team/Polygon 2.svg";
import Image3 from "../../public/Team/Polygon 3.svg";
import Image4 from "../../public/Team/Polygon 4.svg";
import Image5 from "../../public/Team/Polygon 5.svg";
import Image from "next/image";

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [Image1, Image2, Image3, Image4, Image5];
  const texts = [
    {
      name: "Asfandyar Butt",
      role: "CEO",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "John Doe",
      role: "CTO",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "Jane Smith",
      role: "CFO",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      name: "Alice Johnson",
      role: "COO",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "Bob Williams",
      role: "CMO",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="py-16 w-full text-black flex justify-center flex-col items-center">
      <h1 className="text-4xl font-bold mb-5">Meet Our Team</h1>
      <div className="flex relative">
        <Image
          src={images[(currentIndex + 1) % images.length]}
          width={170}
          height={170}
          className="hidden lg:block"
        />
        <Image
          src={images[(currentIndex + 2) % images.length]}
          width={170}
          height={170}
          className="absolute -bottom-10 -left-32 hidden lg:block"
        />
        <div className="flex items-center">
          <div className="text-center flex items-center flex-col">
            <div className="flex items-center gap-3">
              <button onClick={handlePrev}>
                <ChevronLeft />
              </button>
              <Image
                src={images[currentIndex]}
                width={263}
                height={263}
                className=""
              />
              <button onClick={handleNext}>
                <ChevronRight />
              </button>
            </div>
            <h1 className="text-lg font-semibold mt-3">
              {texts[currentIndex].name}
            </h1>
            <h3 className="text-sm mb-2 mt-1 font-light">
              {texts[currentIndex].role}
            </h3>
            <p className="w-full text-base font-light px-[10%] md:px-0 max-w-[450px] text-center">
              {texts[currentIndex].description}
            </p>
          </div>
        </div>
        <Image
          src={images[(currentIndex + 3) % images.length]}
          width={170}
          height={170}
          className="hidden lg:block"
        />
        <Image
          src={images[(currentIndex + 4) % images.length]}
          width={170}
          height={170}
          className="absolute -bottom-10 -right-32 hidden lg:block"
        />
      </div>
    </div>
  );
};

export default Team;
