import Link from "next/link";
import React from "react";

const navLinks = [
  { name: "Login", path: "/login" },
  { name: "Mycart", path: "/cart" },
];

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between p-4 shadow-md h-14">
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
