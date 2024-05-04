'use client';
import Image from "next/image"


export const NavBar = () => {

  return <nav className="border-b-2">
    <div className="flex items-center justify-between px-8 md:px-20 lg:px-40  py-3 ">
      <div className="flex items-center">
        <Image src="/logo.png" alt="Logo" width={60} height={60} />
        <div className="leading-4 text-center">
          <p className="text-sm font-semibold">SK public school</p>
          <small className="text-xs text-gray-400">educational hub</small>
        </div>
      </div>
      <div>
        <ul className="flex items-center gap-8">
          <li className="font-semibold cursor-pointer">Home</li>
          <li className="font-semibold cursor-pointer">About</li>
          <li className="font-semibold cursor-pointer">Contact</li>
        </ul>
      </div>
    </div>
  </nav>
}
