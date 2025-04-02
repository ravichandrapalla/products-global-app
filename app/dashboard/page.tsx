import { section } from "framer-motion/client";
import Link from "next/link";
import React from "react";
import CardTypeOne from "./../../ui/CardTypeOne";

const sidebarLinks = [
  { name: "Home", path: "/home" },
  { name: "Explore", path: "/explore" },
  { name: "Saved", path: "/saved" },
  { name: "Cart", path: "/cart" },
  { name: "Selling", path: "/selling" },
  { name: "Profile", path: "/profile" },
  { name: "Purchase History", path: "/purchases" },
  { name: "Settings", path: "/settings" },
];

const page = () => {
  return (
    <section className="flex flex-row h-screen">
      <aside className={`flex flex-col items-center bg-slate-200 w-1/6 `}>
        <div className="p-4 bg-amber-500 flex w-full">
          <span className="text-white font-bold">Logo</span>
        </div>

        {sidebarLinks?.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className="text-left w-full px-4 py-2"
          >
            {link.name}
          </Link>
        ))}
      </aside>

      <main className=" bg-gray-300 w-3/4 min-h-full flex flex-col items-center justify-center flex-grow">
        <header className="flex items-center justify-between w-full bg-transparent p-4 bg-zinc-50">
          <span>Products</span>
          <div className="flex items-center justify-evenly w-1/2 bg-transparent">
            <input placeholder="Search Products"></input>
            <span>Icons1</span>
            <span>Icons2</span>
            <span>Profile</span>
          </div>
        </header>
        <section className="flex flex-row w-full h-full bg-green-100">
          <div className="flex flex-col gap-10 p-5 flex-grow border-gray-400 border-2">
            <CardTypeOne />
          </div>
          <div className="flex flex-col gap-10 p-5 w-1/4 border-gray-500 border-2">
            Banner and deals
          </div>
        </section>
      </main>
    </section>
  );
};

export default page;
