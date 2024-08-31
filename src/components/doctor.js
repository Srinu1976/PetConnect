import React from "react";
import pic from "../../public/doctor.png";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Doctor = () => {
  return (
    <div className="py-16 mt-[100px] w-full px-[7%] bg-[#171848] relative gap-10 flex lg:flex-row flex-col items-center justify-between">
      <h1 className="text-[35px] text-center  lg:text-start md:text-[42px] lg:text-[52px] leading-[42px] md:leading-[62px] w-full max-w-[558px] font-semibold text-white">
        Want to hire the right person for the job?
      </h1>
      <Image
        src={pic}
        width={450}
        height={450}
        className="max-w-[450px] lg:block hidden w-full left-[45%] absolute bottom-0"
      />
      <Link href="/recruitment">
        <Button className="bg-[#018870] text-base font-semibold h-[50px] w-[233px] rounded-lg text-white">
          Register to post a job <ArrowUpRight />
        </Button>
      </Link>
    </div>
  );
};

export default Doctor;
