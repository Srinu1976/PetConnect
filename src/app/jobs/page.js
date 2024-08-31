"use client";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import React from "react";
import illustration from "../../../public/Illustration.png";
import Image from "next/image";
import { Button, Chip, Input, Pagination, Select } from "@nextui-org/react";
import Link from "next/link";
import CarIcon from "../../../public/car.svg";
import ClockIcon from "../../../public/clock.svg";
import ClockGIcon from "../../../public/clockG.svg";
import CashIcon from "../../../public/cash.svg";
import { ChevronDown, Search } from "lucide-react";

const jobs = () => {
  return (
    <div>
      <Header />
      <section className="bg-[#E6F3F1] sm:min-h-[330px] min-h-[360px] relative  mx-[2%]">
        <div className="relative  translate-y-[50%]">
          <h1 className=" relative text-[35px] sm:text-[52px] max-w-[600px] w-full mx-auto text-center leading-[62px] font-bold">
            <span className="relative">
              <Image
                alt="paw"
                src={illustration}
                className="absolute -top-5 -right-10 sm:block hidden"
              />
              Find the perfect Job
            </span>{" "}
            Only for you
          </h1>
        </div>
        <div className="bg-white shadow-md w-[95%] rounded-md py-5 px-4 absolute bottom-[-60px] lg:bottom-[-60px] right-0 left-0 mx-auto">
          <div className="flex flex-col md:flex-row gap-2 md:gap-5">
            <Input
              placeholder="Vet Assistant"
              endContent={<ChevronDown size={18} />}
            />
            <Input
              placeholder="Sanderson 812 NT"
              endContent={<ChevronDown size={18} />}
            />
            <Button className="bg-[#171848] text-white flex gap-1" size="lg">
              <Search className="text-white" />
              <p>Search</p>
            </Button>
          </div>
          <div className="hidden md:flex gap-2 p-2 justify-between ">
            <div className="rounded-lg lg:rounded-full lg:pl-5 gap-2 lg:gap-5 text-[10px] lg:text-[13px] p-1 lg:p-2 items-center  bg-[#F0F6F5] flex  ">
              <div className="flex items-center text-slate-500 gap-1">
                Job Type
                <ChevronDown size={18} />
              </div>
              <div className="bg-white rounded-full flex  gap-1  font-semibold items-center justify-center p-2">
                <Image src={ClockIcon} /> Full time, On...
              </div>
            </div>
            <div className="rounded-lg lg:rounded-full lg:pl-5 gap-2 lg:gap-5 text-[10px] lg:text-[13px] p-1 lg:p-2 items-center  bg-[#F0F6F5] flex ">
              <div className="flex items-center text-slate-500 gap-1">
                Hourly Rate
                <ChevronDown size={18} />
              </div>
              <div className="bg-white rounded-lg lg:rounded-full flex gap-1  font-semibold items-center justify-center p-1">
                <Image src={CashIcon} /> 10 - 20
              </div>
            </div>
            <div className="flex rounded-lg lg:rounded-full lg:pl-5 gap-1 lg:gap-5 text-[10px] lg:text-[13px] p-1 lg:p-2 items-center  bg-[#F0F6F5]  ">
              <div className="flex items-center text-slate-500 gap-1">
                Distance
                <ChevronDown size={18} />
              </div>
              <div className="bg-white rounded-lg lg:rounded-full flex gap-1  font-semibold items-center justify-center p-1">
                <Image src={CarIcon} /> 5km
              </div>
            </div>
            <div className="rounded-lg lg:rounded-full lg:pl-5 gap-1 lg:gap-5 text-[10px] lg:text-[13px] p-1 lg:p-2 items-center  bg-[#F0F6F5] flex  ">
              <div className="flex items-center text-slate-500 gap-1">
                Starts/End date
                <ChevronDown size={18} />
              </div>

              <div className="bg-white rounded-lg lg:rounded-full flex gap-1  font-semibold items-center justify-center p-1">
                <Image src={ClockGIcon} className="text-[#14B8A6]" />
                23 Mar - 23 Jun
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen mx-[2%]">
        <div className="w-[95%] lg:w-[50%] mx-auto text-center">
          <h1 className="text-[42px] md:text-[52px] pt-[80px] font-bold">
            Latest Jobs
          </h1>
          <p className="text-slate-500 text-[14px] md:text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="py-8 space-y-[20px] w-full">
          <div className="grid-cols-1 grid-rows-12 md:grid-cols-2 md:grid-rows-6 lg:grid-cols-3 lg:grid-rows-4 grid px-[5%] gap-[20px]">
            <Link href="/job">
              <div className="shadow-md py-5 px-3 rounded-lg space-y-4">
                <div>
                  <div className="flex justify-between text-[20px] font-semibold">
                    <h3>Vet Manager</h3>
                    <p className="text-[14px] text-[#14B8A6]">03-24-2023</p>
                  </div>
                  <p className="text-[14px] text-slate-500">Sanderson 812 NT</p>
                </div>
                <p className="text-[14px] text-slate-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <div className="flex gap-2 text-[10px] justify-between">
                  <div className="bg-[#F0F6F5] rounded-full flex  gap-2  font-semibold items-center justify-center px-2 ">
                    <Image src={ClockIcon} /> Full time
                  </div>
                  <div className="bg-[#F0F6F5] rounded-full flex gap-2   font-semibold items-center justify-center px-2 ">
                    <Image src={CashIcon} /> 10 - 20
                  </div>
                  <div className="bg-[#F0F6F5] rounded-full font-semibold  flex gap-2 items-center justify-center px-2 ">
                    <Image src={CarIcon} /> 5km
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/job">
              <div className="shadow-md py-5 px-3 rounded-lg space-y-4">
                <div>
                  <div className="flex justify-between text-[20px] font-semibold">
                    <h3>Vet Manager</h3>
                    <p className="text-[14px] text-[#14B8A6]">03-24-2023</p>
                  </div>
                  <p className="text-[14px] text-slate-500">Sanderson 812 NT</p>
                </div>
                <p className="text-[14px] text-slate-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <div className="flex gap-2 text-[10px] justify-between">
                  <div className="bg-[#F0F6F5] rounded-full flex  gap-2  font-semibold items-center justify-center px-2 ">
                    <Image src={ClockIcon} /> Full time
                  </div>
                  <div className="bg-[#F0F6F5] rounded-full flex gap-2   font-semibold items-center justify-center px-2 ">
                    <Image src={CashIcon} /> 10 - 20
                  </div>
                  <div className="bg-[#F0F6F5] rounded-full font-semibold  flex gap-2 items-center justify-center px-2 ">
                    <Image src={CarIcon} /> 5km
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/job">
              <div className="shadow-md py-5 px-3 rounded-lg space-y-4">
                <div>
                  <div className="flex justify-between text-[20px] font-semibold">
                    <h3>Vet Manager</h3>
                    <p className="text-[14px] text-[#14B8A6]">03-24-2023</p>
                  </div>
                  <p className="text-[14px] text-slate-500">Sanderson 812 NT</p>
                </div>
                <p className="text-[14px] text-slate-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <div className="flex gap-2 text-[10px] justify-between">
                  <div className="bg-[#F0F6F5] rounded-full flex  gap-2  font-semibold items-center justify-center px-2 ">
                    <Image src={ClockIcon} /> Full time
                  </div>
                  <div className="bg-[#F0F6F5] rounded-full flex gap-2   font-semibold items-center justify-center px-2 ">
                    <Image src={CashIcon} /> 10 - 20
                  </div>
                  <div className="bg-[#F0F6F5] rounded-full font-semibold  flex gap-2 items-center justify-center px-2 ">
                    <Image src={CarIcon} /> 5km
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/job">
              <div className="shadow-md py-5 px-3 rounded-lg space-y-4">
                <div>
                  <div className="flex justify-between text-[20px] font-semibold">
                    <h3>Vet Manager</h3>
                    <p className="text-[14px] text-[#14B8A6]">03-24-2023</p>
                  </div>
                  <p className="text-[14px] text-slate-500">Sanderson 812 NT</p>
                </div>
                <p className="text-[14px] text-slate-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <div className="flex gap-2 text-[10px] justify-between">
                  <div className="bg-[#F0F6F5] rounded-full flex  gap-2  font-semibold items-center justify-center px-2 ">
                    <Image src={ClockIcon} /> Full time
                  </div>
                  <div className="bg-[#F0F6F5] rounded-full flex gap-2   font-semibold items-center justify-center px-2 ">
                    <Image src={CashIcon} /> 10 - 20
                  </div>
                  <div className="bg-[#F0F6F5] rounded-full font-semibold  flex gap-2 items-center justify-center px-2 ">
                    <Image src={CarIcon} /> 5km
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/job">
              <div className="shadow-md py-5 px-3 rounded-lg space-y-4">
                <div>
                  <div className="flex justify-between text-[20px] font-semibold">
                    <h3>Vet Manager</h3>
                    <p className="text-[14px] text-[#14B8A6]">03-24-2023</p>
                  </div>
                  <p className="text-[14px] text-slate-500">Sanderson 812 NT</p>
                </div>
                <p className="text-[14px] text-slate-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <div className="flex gap-2 text-[10px] justify-between">
                  <div className="bg-[#F0F6F5] rounded-full flex  gap-2  font-semibold items-center justify-center px-2 ">
                    <Image src={ClockIcon} /> Full time
                  </div>
                  <div className="bg-[#F0F6F5] rounded-full flex gap-2   font-semibold items-center justify-center px-2 ">
                    <Image src={CashIcon} /> 10 - 20
                  </div>
                  <div className="bg-[#F0F6F5] rounded-full font-semibold  flex gap-2 items-center justify-center px-2 ">
                    <Image src={CarIcon} /> 5km
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/job">
              <div className="shadow-md py-5 px-3 rounded-lg space-y-4">
                <div>
                  <div className="flex justify-between text-[20px] font-semibold">
                    <h3>Vet Manager</h3>
                    <p className="text-[14px] text-[#14B8A6]">03-24-2023</p>
                  </div>
                  <p className="text-[14px] text-slate-500">Sanderson 812 NT</p>
                </div>
                <p className="text-[14px] text-slate-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <div className="flex gap-2 text-[10px] justify-between">
                  <div className="bg-[#F0F6F5] rounded-full flex  gap-2  font-semibold items-center justify-center px-2 ">
                    <Image src={ClockIcon} /> Full time
                  </div>
                  <div className="bg-[#F0F6F5] rounded-full flex gap-2   font-semibold items-center justify-center px-2 ">
                    <Image src={CashIcon} /> 10 - 20
                  </div>
                  <div className="bg-[#F0F6F5] rounded-full font-semibold  flex gap-2 items-center justify-center px-2 ">
                    <Image src={CarIcon} /> 5km
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/job">
              <div className="shadow-md py-5 px-3 rounded-lg space-y-4">
                <div>
                  <div className="flex justify-between text-[20px] font-semibold">
                    <h3>Vet Manager</h3>
                    <p className="text-[14px] text-[#14B8A6]">03-24-2023</p>
                  </div>
                  <p className="text-[14px] text-slate-500">Sanderson 812 NT</p>
                </div>
                <p className="text-[14px] text-slate-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <div className="flex gap-2 text-[10px] justify-between">
                  <div className="bg-[#F0F6F5] rounded-full flex  gap-2  font-semibold items-center justify-center px-2 ">
                    <Image src={ClockIcon} /> Full time
                  </div>
                  <div className="bg-[#F0F6F5] rounded-full flex gap-2   font-semibold items-center justify-center px-2 ">
                    <Image src={CashIcon} /> 10 - 20
                  </div>
                  <div className="bg-[#F0F6F5] rounded-full font-semibold  flex gap-2 items-center justify-center px-2 ">
                    <Image src={CarIcon} /> 5km
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/job">
              <div className="shadow-md py-5 px-3 rounded-lg space-y-4">
                <div>
                  <div className="flex justify-between text-[20px] font-semibold">
                    <h3>Vet Manager</h3>
                    <p className="text-[14px] text-[#14B8A6]">03-24-2023</p>
                  </div>
                  <p className="text-[14px] text-slate-500">Sanderson 812 NT</p>
                </div>
                <p className="text-[14px] text-slate-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <div className="flex gap-2 text-[10px] justify-between">
                  <div className="bg-[#F0F6F5] rounded-full flex  gap-2  font-semibold items-center justify-center px-2 ">
                    <Image src={ClockIcon} /> Full time
                  </div>
                  <div className="bg-[#F0F6F5] rounded-full flex gap-2   font-semibold items-center justify-center px-2 ">
                    <Image src={CashIcon} /> 10 - 20
                  </div>
                  <div className="bg-[#F0F6F5] rounded-full font-semibold  flex gap-2 items-center justify-center px-2 ">
                    <Image src={CarIcon} /> 5km
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/job">
              <div className="shadow-md py-5 px-3 rounded-lg space-y-4">
                <div>
                  <div className="flex justify-between text-[20px] font-semibold">
                    <h3>Vet Manager</h3>
                    <p className="text-[14px] text-[#14B8A6]">03-24-2023</p>
                  </div>
                  <p className="text-[14px] text-slate-500">Sanderson 812 NT</p>
                </div>
                <p className="text-[14px] text-slate-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <div className="flex gap-2 text-[10px] justify-between">
                  <div className="bg-[#F0F6F5] rounded-full flex  gap-2  font-semibold items-center justify-center px-2 ">
                    <Image src={ClockIcon} /> Full time
                  </div>
                  <div className="bg-[#F0F6F5] rounded-full flex gap-2   font-semibold items-center justify-center px-2 ">
                    <Image src={CashIcon} /> 10 - 20
                  </div>
                  <div className="bg-[#F0F6F5] rounded-full font-semibold  flex gap-2 items-center justify-center px-2 ">
                    <Image src={CarIcon} /> 5km
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/job">
              <div className="shadow-md py-5 px-3 rounded-lg space-y-4">
                <div>
                  <div className="flex justify-between text-[20px] font-semibold">
                    <h3>Vet Manager</h3>
                    <p className="text-[14px] text-[#14B8A6]">03-24-2023</p>
                  </div>
                  <p className="text-[14px] text-slate-500">Sanderson 812 NT</p>
                </div>
                <p className="text-[14px] text-slate-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <div className="flex gap-2 text-[10px] justify-between">
                  <div className="bg-[#F0F6F5] rounded-full flex  gap-2  font-semibold items-center justify-center px-2 ">
                    <Image src={ClockIcon} /> Full time
                  </div>
                  <div className="bg-[#F0F6F5] rounded-full flex gap-2   font-semibold items-center justify-center px-2 ">
                    <Image src={CashIcon} /> 10 - 20
                  </div>
                  <div className="bg-[#F0F6F5] rounded-full font-semibold  flex gap-2 items-center justify-center px-2 ">
                    <Image src={CarIcon} /> 5km
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/job">
              <div className="shadow-md py-5 px-3 rounded-lg space-y-4">
                <div>
                  <div className="flex justify-between text-[20px] font-semibold">
                    <h3>Vet Manager</h3>
                    <p className="text-[14px] text-[#14B8A6]">03-24-2023</p>
                  </div>
                  <p className="text-[14px] text-slate-500">Sanderson 812 NT</p>
                </div>
                <p className="text-[14px] text-slate-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <div className="flex gap-2 text-[10px] justify-between">
                  <div className="bg-[#F0F6F5] rounded-full flex  gap-2  font-semibold items-center justify-center px-2 ">
                    <Image src={ClockIcon} /> Full time
                  </div>
                  <div className="bg-[#F0F6F5] rounded-full flex gap-2   font-semibold items-center justify-center px-2 ">
                    <Image src={CashIcon} /> 10 - 20
                  </div>
                  <div className="bg-[#F0F6F5] rounded-full font-semibold  flex gap-2 items-center justify-center px-2 ">
                    <Image src={CarIcon} /> 5km
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/job">
              <div className="shadow-md py-5 px-3 rounded-lg space-y-4">
                <div>
                  <div className="flex justify-between text-[20px] font-semibold">
                    <h3>Vet Manager</h3>
                    <p className="text-[14px] text-[#14B8A6]">03-24-2023</p>
                  </div>
                  <p className="text-[14px] text-slate-500">Sanderson 812 NT</p>
                </div>
                <p className="text-[14px] text-slate-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <div className="flex gap-2 text-[10px] justify-between">
                  <div className="bg-[#F0F6F5] rounded-full flex  gap-2  font-semibold items-center justify-center px-2 ">
                    <Image src={ClockIcon} /> Full time
                  </div>
                  <div className="bg-[#F0F6F5] rounded-full flex gap-2   font-semibold items-center justify-center px-2 ">
                    <Image src={CashIcon} /> 10 - 20
                  </div>
                  <div className="bg-[#F0F6F5] rounded-full font-semibold  flex gap-2 items-center justify-center px-2 ">
                    <Image src={CarIcon} /> 5km
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="flex py-4 items-center justify-center w-full">
            <Pagination
              loop
              showControls
              color="#915BCF"
              total={4}
              initialPage={1}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default jobs;
