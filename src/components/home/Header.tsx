"use client"
import Link from "next/link";
import { useState } from "react";
import HeaderItems from "./HeaderItems";
import { navigation } from "@/utils/nav";

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z" clipRule="evenodd" />
  </svg>
)
const HamburgerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
)
const Header = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <nav className={`relative z-20 bg-purple-900 w-full shadow-lg md:static md:text-sm md:border-none ${show ? "shadow-lg md:shadow-none" : ""}`}>
        <div className="items-center ml-auto px-2 max-w-screen-xl mx-auto md:flex md:px-4">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href={'/'} className="text-white text-xl hover:text-blue-600">IL PD Stats</Link>
            <div className="md:hidden">
              <button className="text-white hover:text-blue-600"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  <HamburgerIcon />
                ) : (
                  <XIcon />
                )}
              </button>
            </div>
          </div>
          <div className={`ml-auto nav-menu pb-2 mt-8 md:block md:pb-0 md:mt-0 ${show ? 'block' : 'hidden'}`}>
            <ul className="items-center space-y-6 md:flex md:space-x-3 md:space-y-0">
              {navigation.map((item, i) => (
                <HeaderItems key={i} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {show &&
        <div
          className="z-10 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setShow(false)}
        ></div>
      }
    </>
  )
}
export default Header;
