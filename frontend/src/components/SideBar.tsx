"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiPieChart } from "react-icons/fi";
import { RiLineChartLine } from "react-icons/ri";
import { MdOutlineBarChart } from "react-icons/md";
import { MdOutlineCandlestickChart } from "react-icons/md";
import { Inconsolata, Nunito } from "next/font/google";
import { usePathname } from "next/navigation";
import { useState } from "react";
const nunito = Inconsolata({ subsets: ["latin"] });
const links = [
  { icon: RiLineChartLine, href: "/", label: "Line" },
  { icon: MdOutlineBarChart, href: "/bar", label: "Bar" },
  { icon: FiPieChart, href: "/pie", label: "Pie" },
  { icon: MdOutlineCandlestickChart, href: "/candle", label: "Candle" },
];

const SideBar = () => {
  const path = usePathname();
  return (
    <div className='w-[18%] lg:w-[15%] hidden md:flex flex-col border-r border-appAsh2 h-full bg-black'>
      {/* Logo */}
      <Link className='flex bord flex-col items-center' href={"/"}>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 0] }}
          transition={{
            type: "tween",
            duration: 2.2,
            repeatDelay: 5,
            repeatType: "loop",
            repeat: Infinity,
          }}
          className='relative self-center mt-[15%] w-[60px] h-[44px]'
        >
          <Image
            priority
            className='shadow-[2px_2px_2px] p-1 shadow-orange_web'
            src={"/logo.svg"}
            alt='logo'
            fill
          />
        </motion.div>
        <h6
          style={nunito.style}
          className='text-platinum tracking-wider mt-2 text-lg w-full text-center'
        >
          Block Finance
        </h6>
      </Link>

      {/* Links */}
      <div className='h-[60%] w-full flex py-[10px] mt-[32%] items-center'>
        {/* Icons */}
        <div className='w-[30%] flex flex-col justify-center space-y-10 items-center rounded-r-[88px] h-full  bg-white py-[50px]'>
          {links.map((item, index) => {
            return (
              <div key={index.toString()} className='w-6   h-6 relative'>
                <item.icon
                  className={`w-full ${
                    path === item.href ? "text-orange_web " : "text-black "
                  } h-full`}
                />
              </div>
            );
          })}
        </div>
        {/* Text */}
        <ul className='w-[70%] flex flex-col justify-center space-y-10 items-start px-[12%] h-full py-[50px]'>
          {links.map((link, index) => (
            <li
              key={index.toString()}
              className={`cursor-pointer ${
                path === link.href
                  ? "text-orange_web font-medium"
                  : "text-white hover:text-orange_web"
              }`}
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
