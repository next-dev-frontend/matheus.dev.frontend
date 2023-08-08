import { useEffect, useRef } from 'react';
import Image from 'next/legacy/image';

const Navbar = () => {
  const navMenuDivRef = useRef(null);
  const navMenuRef = useRef(null);
  const navItem1Ref = useRef(null);
  const navItem2Ref = useRef(null);

  useEffect(() => {
    const navMenuDiv = navMenuDivRef.current;
    const navMenu = navMenuRef.current;
    const navItem1 = navItem1Ref.current;
    const navItem2 = navItem2Ref.current;

    const check = (e) => {
      const target = e.target || e.srcElement;

      if (checkParent(target, navMenuDiv)) {
        if (checkParent(target, navItem1) || checkParent(target, navItem2)) {
          navMenuDiv.classList.add('hidden');
        } else {
          navMenuDiv.classList.remove('hidden');
        }
      } else {
        if (checkParent(target, navMenu)) {
          if (navMenuDiv.classList.contains('hidden')) {
            navMenuDiv.classList.remove('hidden');
          } else {
            navMenuDiv.classList.add('hidden');
          }
        } else {
          navMenuDiv.classList.add('hidden');
        }
      }
    };

    const checkParent = (t, elm) => {
      while (t.parentNode) {
        if (t === elm) {
          return true;
        }
        t = t.parentNode;
      }
      return false;
    };

    document.addEventListener('click', check);

    return () => {
      document.removeEventListener('click', check);
    };
  }, []);

  return (
    <nav id="header" className="select-none flex-shrink md:flex-shrink-0 bg-white bg-no-repeat w-full max-w-full z-30 border-[#142039] border-opacity-70 border-b-4">
      <div className="text-[#ff6341] whitespace-nowrap w-full container mx-auto flex flex-wrap xl:flex-nowrap items-center justify-between py-2 px-2 pl-4 pr-8">
        <a href="/" className="pl-1 pt-2">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 overflow-hidden">
            <Image
              src="/logos/logo-about-insurances.webp"
              alt="logo about insurances"
              width={110}
              height={110}
              priority />
          </div>
        </a>
        <div className="block xl:hidden pt-2 tab">
          <button ref={navMenuRef} className="flex items-center p-1 focus:outline-none transform transition hover:scale-110 duration-1000 ease-in-out" >
            <span className="sr-only">Menu Buttom</span>
            <svg
              className="fill-current h-5 w-5 hover:text-[#142039]" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" >
              <title>Menu</title>
              <path strokeLinecap="round" strokeLinejoin="round" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          ref={navMenuDivRef}
          className="hidden sticky text-xs text-[#142039] xl:flex w-full items-center h-full pt-4 lg:pt-1"
        >
          <ul className="sticky w-full xl:flex justify-end items-center">
            <li className="sticky px-4 p-4">
              <a
                href="/terms"
                id="nav-item1"
                ref={navItem1Ref}
                className="sticky inline-block no-underline font-bold relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-[#ff6341] before:transition hover:before:scale-100"
              >
                TERMS & CONDITIONS / COOKIES
              </a>
            </li>
            <li className="sticky px-4 p-4">
              <a
                href="/policy"
                id="nav-item2"
                ref={navItem2Ref}
                className="sticky inline-block no-underline font-bold relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-[#ff6341] before:transition hover:before:scale-100"
              >
                PRIVACY POLICY
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;