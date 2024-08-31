import React, { useState } from "react";
import review1 from "../../public/reviews/1.jpg";
import review2 from "../../public/reviews/2.jpg";
import review3 from "../../public/reviews/3.jpg";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviewsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviewsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const reviewsData = [
    {
      image: review1,
      name: "Asfandyar Butt",
      role: "UI UX Designer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
    },
    {
      image: review2,
      name: "James Anderson",
      role: "Lead Designer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
    },
    {
      image: review3,
      name: "Phelps Hodge",
      role: "Researcher",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
    },
  ];

  return (
    <div className="bg-[#E6F3F1] flex items-center flex-col rounded-2xl px-[3%] py-[3%]">
      <p className="text-[#018870] font-semibold text-[16px] text-center">
        Our Reviews
      </p>
      <div className="flex gap-6 items-center">
        <ChevronLeft
          size={35}
          onClick={handlePrev}
          className="cursor-pointer"
        />
        <h1 className="text-[35px] md:text-[35px] lg:text-[52px] font-bold text-center">
          What Our Clients Say About Us
        </h1>
        <ChevronRight
          size={35}
          onClick={handleNext}
          className="cursor-pointer"
        />
      </div>
      <ul className="flex gap-2 items-center py-6 mb-8 md:mb-0 lg:py-2">
        {[0, 1, 2].map((index) => (
          <li
            key={index}
            aria-label={`page ${index + 1}`}
            className={`w-4 h-4 ${
              index === currentIndex ? "bg-[#018870]" : "bg-default-300"
            } rounded-full`}
          />
        ))}
      </ul>
      <div className="flex gap-8 justify-between px-[5%] pt-[7%] py-[30px] items-center">
        <div className="hidden md:block bg-[#018870] w-[160px] h-[180px] lg:w-[220px] lg:h-[250px]  rounded-bl-[30%] rounded-tl-[25%]  rounded-br-[15%] skew-y-6 skew-x-2 pb-1 pr-1  rounded-tr-[25%] ">
          <div className="bg-white lg:w-[220px] w-[160px] h-[160px] lg:h-[220px] rounded-bl-[15%] rounded-tl-[40%]  rounded-br-[25%] rounded-tr-[20%] ">
            <div className="-skew-y-6 px-4  py-2 -skew-x-2 pt-[40px] text-center">
              <div className="relative ">
                <div className="absolute lg:top-[-90px] top-[-75px] lg:left-[60px] left-[40px] lg:h-[80px] h-[60px] lg:w-[80px] w-[60px] rounded-[100%] overflow-hidden">
                  <Image
                    src={
                      reviewsData[(currentIndex + 2) % reviewsData.length].image
                    }
                    className=" object-cover w-full h-full"
                  />
                </div>
              </div>

              <h4 className="font-semibold text-[15px] lg:text-[18px]">
                {reviewsData[currentIndex].name}
              </h4>
              <p className="text-[10px] lg:text-[12px]">
                {reviewsData[currentIndex].role}
              </p>
              <p className="text-[6px] lg:text-[10px] py-2 text-black/80">
                {reviewsData[currentIndex].description}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#018870] lg:w-[300px] w-[250px] h-[270px] lg:h-[320px]  rounded-bl-[35%] rounded-tl-[50%]  rounded-br-[25%] -skew-y-6 -skew-x-2 pt-3 rounded-tr-[45%]  ">
          <div className="bg-white lg:w-[300px] w-[250px] h-[250px] lg:h-[300px] rounded-bl-[15%] rounded-tl-[40%]  rounded-br-[25%] rounded-tr-[20%] ">
            <div className="skew-y-6 px-4  py-3 skew-x-2 pt-[60px] text-center">
              <div className="relative ">
                <div className="absolute top-[-110px] lg:left-[80px] left-[60px]  h-[100px] w-[100px] rounded-[100%] overflow-hidden">
                  <Image
                    src={reviewsData[currentIndex].image}
                    className=" object-cover w-full h-full"
                  />
                </div>
              </div>

              <h4 className="font-semibold text-[18px] lg:text-[24px]">
                {reviewsData[currentIndex].name}
              </h4>
              <p className="text-[14px] lg:text-[18px]">
                {reviewsData[currentIndex].role}
              </p>
              <p className="text-[10px] lg:text-[14px] py-2 text-black/80">
                {reviewsData[currentIndex].description}
              </p>
            </div>
          </div>
        </div>

        <div className=" hidden md:block bg-[#018870] w-[160px] lg:w-[220px] h-[180px] lg:h-[250px]  rounded-bl-[35%] rounded-tl-[50%]  rounded-br-[25%] -skew-y-6 -skew-x-2 pt-3 rounded-tr-[45%] ">
          <div className="bg-white lg:w-[220px] w-[160px] h-[160px] lg:h-[220px] rounded-bl-[15%] rounded-tl-[40%]  rounded-br-[25%] rounded-tr-[20%] ">
            <div className="skew-y-6 px-4  py-2 skew-x-2 pt-[40px] text-center">
              <div className="relative ">
                <div className="absolute lg:top-[-90px] top-[-75px] lg:left-[60px] left-[40px] lg:h-[80px] h-[60px] lg:w-[80px] w-[60px] rounded-[100%] overflow-hidden">
                  <Image
                    src={
                      reviewsData[(currentIndex + 1) % reviewsData.length].image
                    }
                    className=" object-cover w-full h-full"
                  />
                </div>
              </div>

              <h4 className="font-semibold text-[15px] lg:text-[18px]">
                {reviewsData[currentIndex].name}
              </h4>
              <p className="text-[10px] lg:text-[12px]">
                {reviewsData[currentIndex].role}
              </p>
              <p className="text-[6px] lg:text-[10px] py-2 text-black/80">
                {reviewsData[currentIndex].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
