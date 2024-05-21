'use client';
import Image from "next/image"
import Link from "next/link";
import { SideBar } from "./side-bar";


export const NavBar = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];


  return <nav className="border-b-2">
    <div className="flex items-center justify-between px-8 md:px-20 lg:px-40  py-3 ">
      <div className="flex items-center">
        <Image src="/logo.png" alt="Logo" width={60} height={60} />
        <div className="leading-4 text-center">
          <p className="text-sm font-semibold">SK public school</p>
          <small className="text-xs text-gray-400">educational hub</small>
        </div>
      </div>
      <ul className="hidden md:flex items-center gap-8">
        {navItems.map((item) => <li key={item.name} className="text-base font-semibold underline-affect text-black/80"><Link href={item.href}>{item.name}</Link></li>)}
      </ul>
      <div className="md:hidden">
        <SideBar />
      </div>
    </div>
  </nav>
}
