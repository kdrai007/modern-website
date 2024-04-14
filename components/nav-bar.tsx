'use client';
import Image from "next/image"


export const NavBar = () => {
  return <nav>
    <div className="flex items-center justify-center gap-[55rem] py-3 ">
      <div className="flex items-center">
        <Image src="/logo.png" alt="Logo" width={60} height={60} />
        <div className="leading-4 text-center">
          <p className="text-sm font-semibold">SK public school</p>
          <small className="text-xs text-gray-400">educational hub</small>
        </div>
      </div>
      <div>
        <ul className="flex items-center gap-4">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
}
