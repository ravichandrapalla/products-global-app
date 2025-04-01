import Link from "next/link";
import React from "react";

const navLinks = [
  { name: "Login", path: "/login" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  return (
    <header className="h-15 w-full flex items-center justify-between p-4 border-b-zinc-100 border-b-1 bg-white shadow-md">
      <span>Logo</span>
      <nav className="">
        <ul className="list-none flex items-center gap-4">
          {navLinks?.map((link) => (
            <Link key={link.name} href={link.path}>
              {link.name}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
