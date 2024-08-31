import React from "react";
import "./styles.css";
import logo2 from "../../public/Logos/Logo (2).png";
import logo3 from "../../public/Logos/Logo (3).png";
import logo4 from "../../public/Logos/Logo (4).png";
import logo5 from "../../public/Logos/Logo (5).png";
import logo6 from "../../public/Logos/Logo (6).png";
import logo7 from "../../public/Logos/Logo (7).png";
import Image from "next/image";

const logos = [
  { id: 1, img: logo2 },
  { id: 2, img: logo3 },
  { id: 3, img: logo4 },
  { id: 4, img: logo5 },
  { id: 5, img: logo6 },
  { id: 6, img: logo7 },
];
const LogoScroller = () => {
  return (
    <section className="tournament-logos-border  py-[50px]  relative block overflow-hidden">
      <div>
        <div className=" lg:mt-20  lg:mb-14">
          <div class="mx-auto w-full flex overflow-hidden whitespace-nowrap">
            <div className="comm flex gap-5">
              {logos.map((partner) => (
                <div
                  key={partner.id}
                  className="flex flex-col justify-start items-center w-[100px] md:w-[150px] lg:w-[200px]"
                >
                  <Image src={partner.img} loading="lazy" />
                </div>
              ))}
            </div>

            <div className="comm flex gap-5">
              {logos.map((partner) => (
                <div
                  key={partner.id}
                  className="flex flex-col justify-start items-center w-[100px] md:w-[150px] lg:w-[200px]"
                >
                  <Image src={partner.img} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoScroller;
