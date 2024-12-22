'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
  const pathname = usePathname();
  const [states, setStates] = useState({ opneAbout: false, openAcad: false, showMenuM: false, openaboutM: false, openAcadM: false });

  const handleCloseMenu = () => setStates((old) => ({ ...old, showMenuM: false }));

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="flex justify-between items-center p-4">
        <div className="flex gap-2">
          <Link href="/">
            <Image
              src={"/images/main_logo.png"}
              width={100}
              height={100}
              className="size-16 md:size-24 object-contain"
              alt="logo"
            />
          </Link>
          <div className="flex flex-col  text-center items-center">
            <h1 className="relative w-[max-content] font-roboto before:absolute before:inset-0 before:animate-typewriter before:bg-white text-primary text-md md:text-4xl font-bold">
              TOSS College of Pharmacy
            </h1>

            <div className="text-sm">Approved & Recognized by</div>
            <div className="text-primary font-semibold text-[10px] md:text-sm mt-1">
              PCI | BTE
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2 font-semibold px-8">
          <Link
            href="/"
            className={`py-2 px-4 hover:bg-secondary hover:text-white ${
              pathname === "/"
                ? "bg-primary py-2 px-4 rounded-sm text-white"
                : ""
            }`}
          >
            Home
          </Link>
          <div
            className="inline-flex items-center gap-1 py-2 px-4 hover:bg-secondary hover:text-white relative"
            onMouseEnter={() =>
              setStates((old) => ({ ...old, opneAbout: true }))
            }
            onMouseLeave={() =>
              setStates((old) => ({ ...old, opneAbout: false }))
            }
          >
            <span>About</span> <FaCaretDown />
            {states.opneAbout && (
              <div className="absolute top-10 right-0 flex flex-col divide-y bg-primary text-white font-medium">
                <Link
                  href="/about-college"
                  className="px-6 py-2 text-nowrap hover:bg-secondary hover:text-white"
                >
                  About College
                </Link>
                <Link
                  href="/vision-mission"
                  className="px-6 py-2 text-nowrap hover:bg-secondary hover:text-white"
                >
                  Vision & Mission
                </Link>
                <Link
                  href="chairman"
                  className="px-6 py-2 text-nowrap hover:bg-secondary hover:text-white"
                >
                  Chairman Message
                </Link>
              </div>
            )}
          </div>
          <div
            className="inline-flex items-center gap-1 py-2 px-4 hover:bg-secondary hover:text-white relative"
            onMouseEnter={() =>
              setStates((old) => ({ ...old, openAcad: true }))
            }
            onMouseLeave={() =>
              setStates((old) => ({ ...old, openAcad: false }))
            }
          >
            <span>Academic</span> <FaCaretDown />
            {states.openAcad && (
              <div className="absolute top-10 right-0 flex flex-col divide-y bg-primary text-white font-medium">
                <Link
                  href="/admission"
                  className="px-6 py-2 text-nowrap hover:bg-secondary hover:text-white"
                >
                  Admission
                </Link>
                <Link
                  href="/courses"
                  className="px-6 py-2 text-nowrap hover:bg-secondary hover:text-white"
                >
                  Courses
                </Link>
                <Link
                  href="/fee-details"
                  className="px-6 py-2 text-nowrap hover:bg-secondary hover:text-white"
                >
                  Fee Details
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/contact-us"
            className={`py-2 px-4 hover:bg-secondary hover:text-white ${
              pathname === "/contact-us"
                ? "bg-primary py-2 px-4 rounded-sm text-white"
                : ""
            }`}
          >
            Contact
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden bg-primary p-2 rounded-xl text-white"
          onClick={() =>
            setStates((old) => ({ ...old, showMenuM: !old.showMenuM }))
          }
        >
          <GiHamburgerMenu size={25} />
        </button>
      </div>

      {states.showMenuM && (
        <div className="relative">
          <div className="flex flex-col bg-primary text-white divide-y w-full absolute top-0 left-0">
            <Link href="/" className={`py-2 px-4`} onClick={handleCloseMenu}>
              Home
            </Link>

            <div>
              <button
                type="button"
                className="w-full inline-flex items-center gap-1 py-2 px-4"
                onClick={() =>
                  setStates((old) => ({ ...old, openaboutM: !old.openaboutM }))
                }
              >
                <span>About</span> <FaCaretDown />
              </button>
            </div>
            {states.openaboutM && (
              <>
                <Link
                  href="/about-college"
                  className="px-6 py-2"
                  onClick={handleCloseMenu}
                >
                  About College
                </Link>
                <Link
                  href="/vision-mission"
                  className="px-6 py-2"
                  onClick={handleCloseMenu}
                >
                  Vision & Mission
                </Link>
                <Link
                  href="chairman"
                  className="px-6 py-2"
                  onClick={handleCloseMenu}
                >
                  Chairman Message
                </Link>
              </>
            )}

            <div>
              <button
                type="button"
                className="w-full inline-flex items-center gap-1 py-2 px-4"
                onClick={() =>
                  setStates((old) => ({ ...old, openAcadM: !old.openAcadM }))
                }
              >
                <span>Academic</span> <FaCaretDown />
              </button>
            </div>
            {states.openAcadM && (
              <>
                <Link
                  href="/admission"
                  className="px-6 py-2"
                  onClick={handleCloseMenu}
                >
                  Admission
                </Link>
                <Link
                  href="/courses"
                  className="px-6 py-2"
                  onClick={handleCloseMenu}
                >
                  Courses
                </Link>
                <Link
                  href="/fee-details"
                  className="px-6 py-2"
                  onClick={handleCloseMenu}
                >
                  Fee Details
                </Link>
              </>
            )}

            <Link
              href="/contact-us"
              className={`py-2 px-4`}
              onClick={handleCloseMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
