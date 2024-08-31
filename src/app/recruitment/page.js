"use client";
import React from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import illustration from "../../../public/Illustration.png";
import icon1 from "../../../public/icons/Featured icon.png";
import icon2 from "../../../public/icons/Featured icon (1).png";
import icon3 from "../../../public/icons/Featured icon (2).png";
import icon4 from "../../../public/icons/Featured icon (3).png";
import icon5 from "../../../public/icons/Featured icon (4).png";
import icon6 from "../../../public/icons/Featured icon (5).png";
import happy from "../../../public/happy.svg";
import badge from "../../../public/badge.svg";
import notebook from "../../../public/notebook.svg";
import { Button, Input, Textarea } from "@nextui-org/react";
import LogoScroller from "../../components/Scroller";
import Reviews from "../../components/Reviews";
import { ArrowUpRight } from "lucide-react";

const page = () => {
  return (
    <Layout>
      <div className="bg-[#E6F3F1] min-h-[300px] flex items-center h-full justify-center">
        <div>
          <h1 className="relative text-[30px] md:text-[52px] text-center leading-[62px] font-bold">
            Recruitment Services
            <Image
              alt="paw"
              src={illustration}
              className="absolute -top-6 -right-3 md:block hidden"
            />
          </h1>
          <p className="text-[16px]  text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor <br /> incididunt ut labore{" "}
          </p>
        </div>
      </div>
      <div className="px-[10%] py-[6%]">
        <div className="flex flex-col gap-[30px]">
          <div className="flex flex-col justify-center items-center ">
            <p className="text-[#018870] text-[16px]">Our Story</p>
            <h1 className="text-[35px] md:text-[42px] lg:text-[52px] text-center font-bold">
              Here's How It Works
            </h1>
            <p className="leading-[31px] text-[16px] py-3 w-[80%] text-center text-slate-600">
              rem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="bg-[#018870] px-6 pt-6 rounded-lg text-white  rounded-tr-[30%]">
              <div className="rounded-lg rounded-tr-[60%] rounded-tl-[20%] h-14 w-14 flex items-center justify-center bg-white">
                <Image src={happy} className=" text-[#018870] p-1" />
              </div>
              <h1 className="font-semibold text-[20px] py-3">
                Outsource Reached
              </h1>
              <p>
                Lorem ipsum dolor Lorem ipsum dolor sit Lorem ipsum dolor Lorem
                ipsum dolor sit Lorem ipsum dolor Lorem ipsum dolor sit Lorem
                ipsum
              </p>
              <p className="text-[70px] text-black/10 font-bold">01</p>
            </div>
            <div className="px-6 pt-6 rounded-lg  rounded-tr-[30%]">
              <div className="rounded-lg rounded-tr-[60%] rounded-tl-[20%] h-14 w-14 flex items-center justify-center bg-[#E9F3F1]">
                <Image src={notebook} className=" text-[#018870] p-1" />
              </div>
              <h1 className="font-semibold text-[20px] py-3">
                Outsource Reached
              </h1>
              <p>
                Lorem ipsum dolor Lorem ipsum dolor sit Lorem ipsum dolor Lorem
                ipsum dolor sit Lorem ipsum dolor Lorem ipsum dolor sit Lorem
                ipsum
              </p>
              <p className="text-[70px] text-black/10 font-bold">02</p>
            </div>
            <div className="px-6 pt-6 rounded-lg  rounded-tr-[30%]">
              <div className="rounded-lg rounded-tr-[60%] rounded-tl-[20%] h-14 w-14 flex items-center justify-center bg-[#E9F3F1]">
                <Image src={badge} className=" text-[#018870] p-1" />
              </div>
              <h1 className="font-semibold text-[20px] py-3">
                Outsource Reached
              </h1>
              <p>
                Lorem ipsum dolor Lorem ipsum dolor sit Lorem ipsum dolor Lorem
                ipsum dolor sit Lorem ipsum dolor Lorem ipsum dolor sit Lorem
                ipsum
              </p>
              <p className="text-[70px] text-black/10 font-bold">03</p>
            </div>
            <div className="px-6 pt-6 rounded-lg  rounded-tr-[30%]">
              <div className="rounded-lg rounded-tr-[60%] rounded-tl-[20%] h-14 w-14 flex items-center justify-center bg-[#E9F3F1]">
                <Image src={happy} className=" text-[#018870] p-1" />
              </div>
              <h1 className="font-semibold text-[20px] py-3">
                Outsource Reached
              </h1>
              <p>
                Lorem ipsum dolor Lorem ipsum dolor sit Lorem ipsum dolor Lorem
                ipsum dolor sit Lorem ipsum dolor Lorem ipsum dolor sit Lorem
                ipsum
              </p>
              <p className="text-[70px] text-black/10 font-bold">04</p>
            </div>
          </div>
        </div>
      </div>
      <section className="min-h-screen  flex flex-col items-center px-[12%] md:px-[8%] lg:px-[4%] py-[5%] gap-[60px] bg-[#E6F3F1] mx-auto w-full">
        <div className="space-y-5 flex items-center flex-col">
          <div className="relative">
            <Image
              src={illustration}
              className="absolute md:right-[-70px] right-[-35px] top-[-30px] md:top-[-50px]"
            />
            <h1 className="text-[35px] md:text-[42px] text-center p-4 leading-[62px] font-bold">
              Our Benefits For Employees
            </h1>
          </div>
        </div>
        <div className="space-y-[60px]">
          <div className="grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-[30px]">
            <div className="flex items-center flex-col">
              <Image src={icon1} alt="Icon" />
              <h3 className="font-semibold text-center text-[20px]">
                Share team inboxes
              </h3>
              <p className="text-[16px] text-center text-[#667085]">
                Whether you have a team of 2 or 200, our shared team inboxes
                keep everyone on the same page and in the loop.
              </p>
            </div>
            <div className="flex items-center flex-col">
              <Image src={icon2} alt="Icon" />
              <h3 className="font-semibold text-center text-[20px]">
                Deliver instant answers
              </h3>
              <p className="text-[16px] text-center text-[#667085]">
                An all-in-one customer service platform that helps you balance
                everything your customers need to be happy.
              </p>
            </div>
            <div className="flex items-center flex-col">
              <Image src={icon3} alt="Icon" />
              <h3 className="font-semibold text-center text-[20px]">
                Manage your team with reports
              </h3>
              <p className="text-[16px] text-center text-[#667085]">
                Measure what matters with Untitled’s easy-to-use reports. You
                can filter, export, and drilldown on the data in a couple
                clicks.
              </p>
            </div>

            <div className="flex items-center flex-col">
              <Image src={icon4} alt="Icon" />
              <h3 className="font-semibold text-[20px]">
                Connect with customers
              </h3>
              <p className="text-[16px] text-center text-[#667085]">
                Solve a problem or close a sale in real-time with chat. If no
                one is available, customers are seamlessly routed to email
                without confusion.
              </p>
            </div>
            <div className="flex items-center flex-col">
              <Image src={icon5} alt="Icon" />
              <h3 className="font-semibold text-center text-[20px]">
                Connect the tools you already use
              </h3>
              <p className="text-[16px] text-center text-[#667085]">
                Explore 100+ integrations that make your day-to-day workflow
                more efficient and familiar. Plus, our extensive developer
                tools.
              </p>
            </div>
            <div className="flex items-center flex-col">
              <Image src={icon6} alt="Icon" />
              <h3 className="font-semibold text-center text-[20px]">
                Our people make the difference
              </h3>
              <p className="text-[16px] text-center text-[#667085]">
                We’re an extension of your customer service team, and all of our
                resources are free. Chat to our friendly team 24/7 when you need
                help.
              </p>
            </div>
          </div>
        </div>

        <Button size="lg" className="bg-[#018870] text-white">
          See all the benefits
          <ArrowUpRight />
        </Button>
      </section>
      <LogoScroller />

      <section className="px-[2%] md:px-[3%] lg:px-[10%]">
        <Reviews />
      </section>

      <section className="px-[4%] lg:px-[7%] py-[12%] md:py-[4%] gap-8 grid grid-cols-1 md:grid-cols-2 ">
        <div className="space-y-2 flex flex-col justify-center items-center md:items-start">
          <p className="text-[#018870] font-semibold  text-[16px]">
            Contact Us
          </p>
          <h1 className="text-[35px] md:text-[42px] lg:text-[52px] text-center md:text-start font-bold ">
            Contact Form
          </h1>
          <p className="text-[16px] leading-[40px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod temporut
            labore et dolore.
          </p>
          <div className="py-3">
            <Button size="lg" className="bg-[#018870]  text-white">
              Learn More Now
              <ArrowUpRight />
            </Button>
          </div>
        </div>
        <div className="shadow-2xl rounded-lg my-6 px-[25px] py-[15px]">
          <h1 className="text-[40px] font-semibold ">Contact Form</h1>
          <p className="text-[13px] lg:text-[16px] text-black/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
            <div className="space-y-2">
              <h3 className="font-semibold">Your Name</h3>
              <Input placeholder="Enter your Name" />
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Your Email</h3>
              <Input placeholder="Enter your Email" />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-5 ">
            <div className="space-y-2">
              <h3 className="font-semibold">Your Address</h3>
              <Input placeholder="Enter your Address" />
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Your Phone</h3>
              <Input placeholder="Enter your Phone" />
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Your Message</h3>
            <Textarea placeholder="Enter Your Message" />
          </div>
          <Button fullWidth className="bg-[#018870] py-6 my-9 text-white">
            Send Message
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default page;
