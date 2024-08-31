"use client";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "../../public/Logo.png";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const Header = () => {
  const [mobileNavActive, setMobileNavActive] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavActive(!mobileNavActive);
  };

  return (
    <>
      <header className="w-full z-50">
        <nav className="flex justify-between items-center py-6 px-6 md:px-10 lg:px-8">
          <div className="flex items-center space-x-2">
            <Image src={Logo} alt="Logo" className="w-10 h-10" />
            <span className="font-bold text-xl">Logo Here</span>
          </div>
          <div className="block lg:hidden">
            {mobileNavActive ? (
              <button
                onClick={toggleMobileNav}
                className="text-white text-2xl focus:outline-none"
              >
                <X />
              </button>
            ) : (
              <button
                onClick={toggleMobileNav}
                className="text-2xl focus:outline-none"
              >
                <Menu />
              </button>
            )}
          </div>
          <ul className="hidden lg:flex gap-6 items-center font-semibold">
            <li>
              <Link href="/">
                <span className=" cursor-pointer">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span className="cursor-pointer">About</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="cursor-pointer">Reviews</span>
              </Link>
            </li>
            <li>
              <Link href="/jobs">
                <span className="cursor-pointer">My Clients</span>
              </Link>
            </li>
            <li>
              <Link href="/jobs">
                <span className="cursor-pointer">Contacts</span>
              </Link>
            </li>
            <Link href="/jobs">
              <Button size="lg" className="bg-[#018870] text-white">
                See the current openings
                <ArrowUpRight />
              </Button>
            </Link>
          </ul>
        </nav>
      </header>
      <div
        className={`lg:hidden bg-[#E6F3F1] pb-4 pt-2 px-6 md:px-10 lg:px-8 transition-all duration-300 ${
          mobileNavActive ? "top-0" : "-top-full"
        } fixed left-0 w-full z-40`}
      >
        <nav className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Image src={Logo} alt="Logo" className="w-10 h-10" />
            <span className="font-bold text-xl">Logo Here</span>
          </div>
          <div className="block lg:hidden">
            {mobileNavActive ? (
              <button
                onClick={toggleMobileNav}
                className=" text-2xl focus:outline-none"
              >
                <X />
              </button>
            ) : (
              <button
                onClick={toggleMobileNav}
                className="text-2xl focus:outline-none"
              >
                <Menu />
              </button>
            )}
          </div>
        </nav>
        <div className="flex flex-col gap-6 py-8">
          <Link href="/">
            <span className="cursor-pointer">Home</span>
          </Link>
          <Link href="/about">
            <span className=" cursor-pointer">About</span>
          </Link>
          <Link href="/">
            <span className=" cursor-pointer">Reviews</span>
          </Link>
          <Link href="/jobs">
            <span className=" cursor-pointer">My Clients</span>
          </Link>
          <Link href="/jobs">
            <span className=" cursor-pointer">Contacts</span>
          </Link>
          <Button
            size="lg"
            className="bg-[#018870] text-white"
            onClick={toggleMobileNav}
          >
            See the current openings
            <ArrowUpRight />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
