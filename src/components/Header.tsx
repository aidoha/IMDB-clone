import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import MenutItem from "./MenutItem";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex items-center justify-between mx-2 max-w-6xl sm:mx-auto py-6">
      <div className="flex">
        <MenutItem title="Home" address="/" Icon={AiFillHome} />
        <MenutItem title="About" address="/about" Icon={BsInfoCircleFill} />
      </div>
      <div>
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">IMDB</span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
