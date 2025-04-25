"use client"; // Nécessaire pour les hooks et l'interactivité

import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="border-b">
      <div className="flex justify-between items-center w-full py-6 px-4 lg:px-6">
        {/* Logo */}
        <div>
          <Image src="/frame1.png" alt="frame" width="40" height="40" />
        </div>

        {/* Menu Desktop (visible à partir de md) */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-6 font-medium">
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                Top Sales
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                Collections
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                Our Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-primary transition-colors">
                About Us
              </Link>
            </li>
          </ul>

        </div>
          <div className="hidden lg:flex gap-4 items-center">
            <Link href="#" className="font-medium hover:text-primary transition-colors">
              Sign Up
            </Link>
            <span className="bg-border h-7 w-[2px]"></span>
            <Link href="#">
              <Button className="rounded-full">Connect Wallet</Button>
            </Link>
          </div>

        {/* Bouton Menu Mobile (visible en dessous de lg) */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-accent transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Menu Mobile (visible en dessous de lg) */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={closeMenu} />
        )}

        <div
          className={`fixed top-0 right-0 h-full w-full bg-background shadow-lg z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="px-10 py-6 flex flex-col h-full">
            {/* Bouton de fermeture */}
            <button
              className="self-end p-2 rounded-md hover:bg-accent transition-colors mb-4"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Liens du menu */}
            <nav className="flex flex-col gap-6 flex-grow">
              <Link
                href="#"
                className="font-medium hover:text-primary transition-colors py-2"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                href="#"
                className="font-medium hover:text-primary transition-colors py-2"
                onClick={closeMenu}
              >
                Top Sales
              </Link>
              <Link
                href="#"
                className="font-medium hover:text-primary transition-colors py-2"
                onClick={closeMenu}
              >
                Collections
              </Link>
              <Link
                href="#"
                className="font-medium hover:text-primary transition-colors py-2"
                onClick={closeMenu}
              >
                Our Blog
              </Link>
              <Link
                href="#"
                className="font-medium hover:text-primary transition-colors py-2"
                onClick={closeMenu}
              >
                About Us
              </Link>

              {/* Séparateur */}
              <div className="border-t border-border my-2"></div>

              <div className="flex gap-4 items-center">
            <Link href="#" className="font-medium hover:text-primary transition-colors">
              Sign Up
            </Link>
            <span className="bg-black h-7 w-[2px]"></span>
            <Link href="#">
              <Button className="rounded-full">Connect Wallet</Button>
            </Link>
          </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}