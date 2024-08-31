"use client";
import React from "react";
import Layout from "../../components/Layout";
import illustration from "../../../public/Illustration.png";
import Image from "next/image";
import pic1 from "../../../public/About/1.jpg";
import pic2 from "../../../public/About/2.jpg";
import pic3 from "../../../public/About/3.jpg";
import pic4 from "../../../public/About/4.jpg";
import vision1 from "../../../public/vision/2.jpg";
import vision2 from "../../../public/vision/1.jpg";
import { Button } from "@nextui-org/react";
import LogoScroller from "../../components/Scroller";
import Reviews from "../../components/Reviews";
import Doctor from "../../components/doctor";
import Globe from "../../../public/Vector.svg";
import Flag from "../../../public/Vector (1).svg";
import Network from "../../../public/Vector (2).svg";
import { ArrowUpRight } from "lucide-react";
import Team from "../../components/Team";

const page = () => {
  return (
    <div>
      <Layout>
        <section className="">
          <div className="bg-[#E6F3F1] min-h-[300px] flex items-center h-full justify-center">
            <div>
              <h1 className="relative w-full max-w-[300px] mx-auto text-[52px] text-center leading-[62px] font-bold">
                <Image
                  alt="paw"
                  src={illustration}
                  className="absolute -top-6 -right-2"
                />
                About Us
              </h1>
              <p className="text-[16px] p-4 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore{" "}
              </p>
            </div>
          </div>

          <div className="px-[10%] py-[20px]">
            <div className="flex gap-[30px]">
              <div className="hidden lg:flex gap-4">
                <div className="flex flex-col gap-4">
                  <Image
                    src={pic4}
                    className="h-[190px] w-[250px] rounded-2xl"
                  />
                  <div className="h-[400px] w-[250px] rounded-2xl overflow-hidden">
                    <Image src={pic2} className="h-full w-full object-cover" />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="h-[400px] w-[250px] rounded-2xl overflow-hidden">
                    <Image src={pic3} className="h-full w-full object-cover" />
                  </div>
                  <Image
                    src={pic1}
                    className="h-[190px] w-[250px] rounded-2xl"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center ">
                <p className="text-[#018870] text-[16px]">Our Story</p>
                <h1 className="text-[35px] md:text-[42px] lg:text-[52px] font-bold">
                  About Company
                </h1>
                <p className="leading-[31px] text-[14px] md:text-[16px] py-3 text-slate-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna. <br /> aliqua.Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </p>
                <div>
                  <Button className="bg-[#018870] text-white" size="md">
                    Learn More Now <ArrowUpRight />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <LogoScroller />

          <div className="px-[5%] py-[20px]">
            <div className="bg-[#E6F3F1] rounded-2xl">
              <div className="flex gap-6 px-[3%] py-[3%]">
                <div className="md:w-[70%]  h-full overflow-hidden">
                  <p className="text-[#018870] font-semibold text-[16px]">
                    Our Story
                  </p>
                  <h1 className="text-[25px] md:text-[35px] lg:text-[52px] font-bold">
                    Envisioning Tomorrow: Our Vision for Success
                  </h1>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-8 lg:space-y-3 lg:py-2 py-6 px-3">
                      <div className="flex justify-start items-start gap-4">
                        <Image src={Globe} />
                        <div>
                          <h5 className="text-[16px] font-semibold">
                            A Unified Path Forward
                          </h5>
                          <p className="text-[14px]">
                            Lorem ipsum dolor sit amet, consectetur{" "}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-start items-start gap-4">
                        <Image src={Flag} />
                        <div>
                          <h5 className="text-[16px] font-semibold">
                            Empowering Success Together
                          </h5>
                          <p className="text-[14px]">
                            Lorem ipsum dolor sit amet, consectetur{" "}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-start items-start gap-4">
                        <Image src={Network} />
                        <div>
                          <h5 className="text-[16px] font-semibold">
                            Driving Growth, Nurturing Talent
                          </h5>
                          <p className="text-[14px]">
                            Lorem ipsum dolor sit amet, consectetur{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="hidden lg:flex items-end justify-end h-[200px] w-[300px] rounded-2xl  overflow-hidden">
                      <Image
                        src={vision2}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="hidden md:block h-[400px] w-[250px] rounded-2xl overflow-hidden">
                  <Image src={vision1} className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </div>

          <Team />
          <Reviews />

          <Doctor />
          <div className="px-[5%] py-[20px]"></div>
        </section>
      </Layout>
    </div>
  );
};

export default page;
