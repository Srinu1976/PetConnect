"use client";
import React from "react";
import avatar from "../../../public/Avatar.png";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import Ghost from "../../../public/ghost.svg";
import Layout from "../../components/Layout";
import Doctor from "../../components/doctor";
import Link from "next/link";
import CarIcon from "../../../public/car.svg";
import ClockIcon from "../../../public/clock.svg";
import ClockGIcon from "../../../public/clockG.svg";
import CashIcon from "../../../public/cash.svg";
import { MapPin } from "lucide-react";

const page = () => {
  return (
    <>
      <Layout>
        <section className="flex flex-col lg:flex-row px-[5%] md:px-[10%] gap-[10%] py-[20px]">
          <div className="px-4 py-7 lg:w-[75%]">
            <div className="space-y-2 py-3">
              <h1 className="text-[32px] leading=[54px] font-bold">
                Graphic Design
              </h1>
              <div className="flex items-center gap-2 text-[14px] text-black/60">
                <MapPin size={16} />
                <p className="">Sanderson 812 NT * 03-24-2023</p>
              </div>
            </div>

            <div className="py-3">
              <h4 className="font-semibold text-[20px] py-3">Job details</h4>
              <div className="flex flex-col md:flex-row gap-3 justify-between w-full text-[14px] text-black/60">
                <div className="flex items-center gap-4">
                  Job Type
                  <div className="bg-[#F9F7FD] rounded-full flex gap-2 text-black font-semibold items-center justify-center py-1 px-2">
                    <Image src={ClockIcon} /> Full time
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  Hourly Rate
                  <div className="bg-[#F9F7FD] rounded-full flex gap-2 text-black font-semibold items-center justify-center py-1 px-2">
                    <Image src={CashIcon} /> 10 - 20
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  Distance
                  <div className="bg-[#F9F7FD] rounded-full flex gap-2 text-black font-semibold items-center justify-center py-1 px-2">
                    <Image src={CarIcon} />
                    5km
                  </div>
                </div>
              </div>
            </div>

            <div className="py-3 ">
              <h4 className="font-semibold text-[20px] py-3">About the Job</h4>
              <div className="space-y-[30px]">
                <div>
                  <h4 className="font-semibold text-[14px] md:text-[16px] py-3">
                    Shift Details
                  </h4>
                  <table className="w-full">
                    <tbody>
                      <tr className=" py-4">
                        <td className=" ">
                          <p className="flex items-center gap-2 text-[12px] md:text-[16px] text-black/80">
                            <Image src={ClockIcon} /> Monday
                          </p>
                        </td>
                        <td className="  text-[12px] md:text-[16px] text-black/80">
                          29 dec, 2024
                        </td>
                        <td className="  text-[12px] md:text-[16px] text-black/80">
                          09:00am - 05:00pm
                        </td>
                      </tr>
                      <tr className=" py-4">
                        <td className=" ">
                          <p className="flex items-center gap-2 text-[12px] md:text-[16px] text-black/80">
                            <Image src={ClockIcon} /> Tuesday
                          </p>
                        </td>
                        <td className="  text-[12px] md:text-[16px] text-black/80">
                          29 dec, 2024
                        </td>
                        <td className="  text-[12px] md:text-[16px] text-black/80">
                          09:00am - 05:00pm
                        </td>
                      </tr>
                      <tr className=" py-4">
                        <td className=" ">
                          <p className="flex items-center gap-2 text-[12px] md:text-[16px] text-black/80">
                            <Image src={ClockIcon} /> Wednesday
                          </p>
                        </td>
                        <td className="  text-[12px] md:text-[16px] text-black/80">
                          29 dec, 2024
                        </td>
                        <td className="  text-[12px] md:text-[16px] text-black/80">
                          09:00am - 05:00pm
                        </td>
                      </tr>
                      <tr className=" py-4">
                        <td className=" ">
                          <p className="flex items-center gap-2 text-[12px] md:text-[16px] text-black/80">
                            <Image src={ClockIcon} /> Thursday
                          </p>
                        </td>
                        <td className="  text-[12px] md:text-[16px] text-black/80">
                          29 dec, 2024
                        </td>
                        <td className="  text-[12px] md:text-[16px] text-black/80">
                          09:00am - 05:00pm
                        </td>
                      </tr>
                      <tr className=" py-4">
                        <td className=" ">
                          <p className="flex items-center gap-2 text-[12px] md:text-[16px] text-black/80">
                            <Image src={ClockIcon} /> Friday
                          </p>
                        </td>
                        <td className="  text-[12px] md:text-[16px] text-black/80">
                          29 dec, 2024
                        </td>
                        <td className="  text-[12px] md:text-[16px] text-black/80">
                          09:00am - 05:00pm
                        </td>
                      </tr>
                      <tr className=" py-4">
                        <td className=" ">
                          <p className="flex items-center gap-2 text-[12px] md:text-[16px] text-black/80">
                            <Image src={ClockIcon} /> Saturday
                          </p>
                        </td>
                        <td className="  text-[12px] md:text-[16px] text-black/80">
                          29 dec, 2024
                        </td>
                        <td className="  text-[12px] md:text-[16px] text-black/80">
                          09:00am - 05:00pm
                        </td>
                      </tr>
                      <tr className=" py-4">
                        <td className=" ">
                          <p className="flex items-center gap-2 text-[12px] md:text-[16px] text-black/80">
                            <Image src={ClockIcon} /> Sunday
                          </p>
                        </td>
                        <td className="  text-[12px] md:text-[16px] text-black/80">
                          29 dec, 2024
                        </td>
                        <td className="  text-[12px] md:text-[16px] font-semibold text-red-500">
                          closed
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div>
                  <h4 className="font-semibold text-[12px] md:text-[16px] py-3">
                    About the Job
                  </h4>
                  <p className="text-[12px] md:text-[16px] text-black/80">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[12px] md:text-[16px] py-3">
                    About the Job
                  </h4>
                  <p className="text-[12px] md:text-[16px] text-black/80">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum. exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[12px] md:text-[16px] py-3">
                    About the Job
                  </h4>
                  <p className="text-[12px] md:text-[16px] text-black/80 leading-[35px]">
                    * Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                    <br /> * sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. <br />
                    * Ut enim ad minim veniam, quis Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. <br /> * sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. <br /> * Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. <br /> *
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. <br /> *
                    Excepteur sint occaecat cupidatat non proident.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[12px] md:text-[16px] py-3">
                    Recruiters info
                  </h4>
                  <p className="text-[12px] md:text-[16px] text-black/80 leading-[35px]">
                    * Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                    <br /> * sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. <br />
                    * Ut enim ad minim veniam, quis Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. <br /> * sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. <br /> * Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. <br /> *
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. <br /> *
                    Excepteur sint occaecat cupidatat non proident.
                  </p>
                </div>
                <Button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 2.25a.75.75 0 0 1 .75.75v.54l1.838-.46a9.75 9.75 0 0 1 6.725.738l.108.054A8.25 8.25 0 0 0 18 4.524l3.11-.732a.75.75 0 0 1 .917.81 47.784 47.784 0 0 0 .005 10.337.75.75 0 0 1-.574.812l-3.114.733a9.75 9.75 0 0 1-6.594-.77l-.108-.054a8.25 8.25 0 0 0-5.69-.625l-2.202.55V21a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 3 2.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Report Job
                </Button>
              </div>
            </div>
          </div>
          <div className="rounded-[15px] max-h-[370px] flex flex-col gap-4 justify-center  w-full  lg:w-[30%]  shadow-2xl px-4 py-7 ">
            <h3 className="text-[16px] font-semibold">Recruiters info</h3>
            <div
              className="flex gap-2 items-center
          "
            >
              <Image src={avatar} className="h-[50px] w-[50px] rounded-full" />
              <div>
                <h4 className="font-semibold text-[12px] md:text-[16px]">
                  Usman Zafar
                </h4>
                <p className="text-[14px]">usmanzafar@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#915BCF"
                className="w-6 h-6"
              >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
              youraddress@yahoo.com
            </div>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#915BCF"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"
                />
              </svg>
              (219) 565-0114
            </div>
            <Button fullWidth className="font-bold">
              refer a candidate
            </Button>
            <div className="flex gap-2 w-full items-center">
              <Button className="bg-primary text-white py-3 h-full" fullWidth>
                Apply Now
              </Button>
              <Button size="sm" className="bg-gray-200 h-full text-black py-3">
                <Image src={Ghost} />
              </Button>
            </div>
          </div>
        </section>
        <Doctor />
      </Layout>
    </>
  );
};

export default page;
