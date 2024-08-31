// pages/index.js
"use client";
import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import Hero1 from "../../public/Hero/1.png";
import Hero6 from "../../public/Hero/Group 1171284114.png";
import Hero2 from "../../public/Hero/Image 2.png";
import Hero3 from "../../public/Hero/Image 3.png";
import Hero4 from "../../public/Hero/Image 4.png";
import Hero5 from "../../public/Hero/S1.png";
import image from "../../public/image.png";
import Blog1 from "../../public/Blog/image (1).png";
import Blog2 from "../../public/Blog/image (2).png";
import Blog3 from "../../public/Blog/image (3).png";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import icon1 from "../../public/icons/Featured icon.png";
import icon2 from "../../public/icons/Featured icon (1).png";
import icon3 from "../../public/icons/Featured icon (2).png";
import icon4 from "../../public/icons/Featured icon (3).png";
import icon5 from "../../public/icons/Featured icon (4).png";
import icon6 from "../../public/icons/Featured icon (5).png";
import illustration from "../../public/Illustration.png";
import LogoScroller from "../components/Scroller";
import Link from "next/link";
import {
  Waypoints,
  Mail,
  MessageCircleQuestion,
  Smile,
  Zap,
  BarChart2,
  ArrowUpRight,
} from "lucide-react";

const Home = () => {
  return (
    <Layout>
      <section className="lg:min-h-screen pt-[2%] px-[5%]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="  h-full ">
            <div className=" flex justify-center h-full flex-col">
              <h1 className="text-[35px] relative w-full max-w-[400px] lg:max-w-[474px] lg:text-[52px] py-3 lg:leading-[62px] text-[#171848] font-bold">
                <span className="relative">
                  Connecting
                  <Image
                    alt="paw"
                    src={illustration}
                    className="absolute -top-5 -right-[45px]"
                  />
                </span>{" "}
                veterinarian staff and employers
              </h1>

              <p className="text-[13px] md:text-[16px] pb-5 text-gray-600 ">
                Clarity gives you the blocks & components you need to create a
                truly professional website, landing page or admin panel for your
                SaaS. <br />
              </p>
              <Link href="/jobs">
                <Button size="lg" className="bg-[#018870] text-white">
                  See the current openings
                  <ArrowUpRight />
                </Button>
              </Link>
            </div>
          </div>

          <div className="h-full w-full flex flex-col gap-2">
            <div className="flex gap-2">
              <div className="flex gap-2 flex-col ">
                <div className="bg-yellow-500 rounded-[25px] overflow-hidden w-[200px] h-[200px]">
                  <Image
                    src={Hero1}
                    alt="Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className=" rounded-[25px] overflow-hidden w-[200px] h-auto">
                  <Image
                    src={Hero3}
                    alt="Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className=" rounded-[25px] overflow-hidden w-auto h-auto">
                <Image
                  src={Hero2}
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className=" rounded-[25px] overflow-hidden w-[220px] h-[200px]">
                <Image
                  src={Hero4}
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className=" rounded-[25px] overflow-hidden w-[200px] h-[200px]">
                <Image
                  src={Hero6}
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className=" rounded-[25px] overflow-hidden w-[70px] h-[200px]">
                <Image
                  src={Hero5}
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <LogoScroller />

      <section className="min-h-screen flex flex-col items-center px-[4%] py-[5%] gap-[60px] bg-[#E6F3F1] mx-auto w-full">
        <div className="space-y-5 flex items-center flex-col">
          <h1 className="relative text-[27px] text-center md:text-[42px]  font-bold">
            <Image
              alt="paw"
              src={illustration}
              className=" absolute -top-5 -right-[43px]"
            />
            Why choose Vetjobs
          </h1>
          <div className="flex  gap-2">
            <Button size="lg" className="bg-[#018870] text-white">
              For veterinarian
            </Button>
            <Button size="lg" className="text-[#94A3B8] bg-white">
              For Employers
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1  grid-rows-6 md:grid-rows-3 lg:grid-rows-2 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          <div className="flex items-center flex-col">
            <div className="bg-[#FEE2E2] rounded-full border-8 border-[#FEF2F2] p-2">
              <Mail />
            </div>
            <h3 className="font-semibold text-[18px] md:text-[20px]">
              Share team inboxes
            </h3>
            <p className="text-[13px] md:text-[16px] px-5 md:px-0 text-center text-[#667085]">
              Whether you have a team of 2 or 200, our shared team inboxes keep
              everyone on the same page and in the loop.
            </p>
          </div>
          <div className="flex items-center flex-col">
            <div className="bg-[#FEE2E2] rounded-full border-8 border-[#FEF2F2] p-2">
              <Zap />
            </div>
            <h3 className="font-semibold text-[18px] md:text-[20px]">
              Deliver instant answers
            </h3>
            <p className="text-[13px] md:text-[16px] px-5 md:px-0 text-center text-[#667085]">
              An all-in-one customer service platform that helps you balance
              everything your customers need to be happy.
            </p>
          </div>
          <div className="flex items-center flex-col">
            <div className="bg-[#FEE2E2] rounded-full border-8 border-[#FEF2F2] p-2">
              <BarChart2 />
            </div>
            <h3 className="font-semibold text-[18px] md:text-[20px]">
              Manage your team with reports
            </h3>
            <p className="text-[13px] md:text-[16px] px-5 md:px-0 text-center text-[#667085]">
              Measure what matters with Untitled’s easy-to-use reports. You can
              filter, export, and drilldown on the data in a couple clicks.
            </p>
          </div>
          <div className="flex items-center flex-col">
            <div className="bg-[#FEE2E2] rounded-full border-8 border-[#FEF2F2] p-2">
              <Smile />
            </div>
            <h3 className="font-semibold text-[18px] md:text-[20px]">
              Connect with customers
            </h3>
            <p className="text-[13px] md:text-[16px] px-5 md:px-0 text-center text-[#667085]">
              Solve a problem or close a sale in real-time with chat. If no one
              is available, customers are seamlessly routed to email without
              confusion.
            </p>
          </div>
          <div className="flex items-center flex-col">
            <div className="bg-[#FEE2E2] rounded-full border-8 border-[#FEF2F2] p-2">
              <Waypoints />
            </div>
            <h3 className="font-semibold text-[18px] md:text-[20px]">
              Connect the tools you already use
            </h3>
            <p className="text-[13px] md:text-[16px] px-5 md:px-0 text-center text-[#667085]">
              Explore 100+ integrations that make your day-to-day workflow more
              efficient and familiar. Plus, our extensive developer tools.
            </p>
          </div>
          <div className="flex items-center flex-col">
            <div className="bg-[#FEE2E2] rounded-full border-8 border-[#FEF2F2] p-2">
              <MessageCircleQuestion />
            </div>
            <h3 className="font-semibold text-[18px] md:text-[20px]">
              Our people make the difference
            </h3>
            <p className="text-[13px] md:text-[16px] px-5 md:px-0 text-center text-[#667085]">
              We’re an extension of your customer service team, and all of our
              resources are free. Chat to our friendly team 24/7 when you need
              help.
            </p>
          </div>
        </div>

        <Link href="/jobs">
          <Button size="lg" className="bg-[#018870] my-4 text-white">
            See the current openings
            <ArrowUpRight />
          </Button>
        </Link>
      </section>
      <div className="flex w-screen overflow-hidden h-[170px] md:h-[320px] lg:h-[370px] text-white ">
        <div
          className="bg-cover h-full w-full min-w-[30%] flex  text-center  gap-[5%] items-center justify-center"
          style={{ backgroundImage: "url('/BG (1).png')" }}
        >
          <div>
            <h1 className="text-[18px] md:text-[45px] font-bold">45+</h1>
            <p className="text-[#94A3B8] text-[10px] md:text-[16px]">
              veterinarian hospitals
            </p>
          </div>
          <div>
            <h1 className="text-[18px] md:text-[45px] font-bold">100+</h1>
            <p className="text-[#94A3B8] text-[10px] md:text-[16px]">
              Jobs a day
            </p>
          </div>
          <div>
            <h1 className="text-[18px] md:text-[45px] font-bold">25%</h1>
            <p className="text-[#94A3B8] text-[10px] md:text-[16px]">
              Career Growth Reported
            </p>
          </div>
        </div>

        <Image src={image} alt="image" className="hidden md:block" />
      </div>

      <section className="lg:min-h-screen flex flex-col gap-[60px] items-center px-[12%] md:py-[5%] py-[10%]">
        <div className="text-center">
          <p className="text-[14px] text-[#018870]">Learn New Things</p>
          <h3 className="text-[35px] md:text-[42px] font-bold relative">
            <Image
              alt="paw"
              src={illustration}
              className="absolute rotate-[-63deg] -top-8 -left-7"
            />
            Read our blog
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[5%] pb-4">
          <div className="space-y-4">
            <Image src={Blog1} alt="photo" />
            <h5 className="text-[21px]">
              Most popular design systems to learn from in 2022
            </h5>
            <p className="text-[#018870] text-[13px]">Design System</p>
          </div>
          <div className="space-y-4">
            <Image src={Blog2} alt="photo" />
            <h5 className="text-[21px]">
              Understanding accessibility makes you a better
            </h5>
            <p className="text-[#018870] text-[13px]">Accessibility</p>
          </div>
          <div className="space-y-4">
            <Image src={Blog3} alt="photo" />
            <h5 className="text-[21px]">
              15 best tools that will help you build your website
            </h5>
            <p className="text-[#018870] text-[13px]">Tech</p>
          </div>
        </div>
        <Link href="/about">
          <Button size="lg" className="bg-[#018870] my-10 text-white">
            Read All Blogs
            <ArrowUpRight />
          </Button>
        </Link>
      </section>

      <section className="lg:min-h-screen flex flex-col items-center px-[3%] md:px-[12%] py-[5%] gap-[25px] md:gap-[60px] bg-[#E6F3F1] mx-auto w-full">
        <div className="space-y-5 flex items-center flex-col">
          <div>
            <h1 className="text-[35px] text-center md:text-[42px] font-bold">
              Frequently asked questions
            </h1>

            <p className="text-[15px] text-center md:text-[16px] text-[#475569]">
              Ask everything you need to know about our products and services.
            </p>
          </div>
        </div>
        <Accordion
          variant="light"
          className="bg-white rounded-md md:py-[20px] py-[2%] px-[5%] mb-10 md:px-[50px]"
        >
          <AccordionItem title="Q. How this theme is different from others in market?">
            <div className="text-[13px] md:text-[16px] text-slate-600">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution.
            </div>
          </AccordionItem>

          <AccordionItem title="Q. Does this theme supports plugins?">
            <div className="text-[13px] md:text-[16px] text-slate-600">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution.
            </div>
          </AccordionItem>

          <AccordionItem title="Q. Do you provide any moneyback guarantee in this product?">
            <div className="text-[13px] md:text-[16px] text-slate-600">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution.
            </div>
          </AccordionItem>

          <AccordionItem title="Q. What payment method do you support?">
            <div className="text-[13px] md:text-[16px] text-slate-600">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution.
            </div>
          </AccordionItem>

          <AccordionItem title="Q. Will I get money back if I am not satisfied?">
            <div className="text-[13px] md:text-[16px] text-slate-600">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution.
            </div>
          </AccordionItem>
          <AccordionItem title="Q. How do you provide support?">
            <div className="text-[13px] md:text-[16px] text-slate-600">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution.
            </div>
          </AccordionItem>
        </Accordion>
      </section>
    </Layout>
  );
};

export default Home;
