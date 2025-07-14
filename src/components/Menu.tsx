"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Menu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Menu Icon: Always Visible */}
      <div
        className="flex items-center ml-4 cursor-pointer hover:text-[#A42300] transition"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <IoMdClose size={28} />
        ) : (
          <>
            <CiMenuBurger size={25} />
            <span className="ml-2 text-sm hidden md:inline">MENU</span>
          </>
        )}
      </div>

      {/* Overlay + Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-[998]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            {/* Slide-in Drawer */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 w-4/5 sm:w-1/3 md:w-1/4 h-full bg-white z-[999] flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                <span className="text-xl font-semibold text-[#A42300]">
                  Menu
                </span>
                <IoMdClose
                  size={28}
                  onClick={closeMenu}
                  className="cursor-pointer hover:text-[#A42300]"
                />
              </div>

              {/* Nav Links */}
              <nav className="flex flex-col gap-4 px-6 py-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className={`relative text-lg font-medium transition-colors duration-200 hover:text-[#A42300] ${
                      pathname === item.href
                        ? "text-[#A42300]"
                        : "text-gray-800"
                    }`}
                  >
                    {item.name}
                    {/* Animated underline */}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-[#A42300] transition-all duration-300 ${
                        pathname === item.href
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
