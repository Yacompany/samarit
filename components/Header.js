'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, MoreHorizontal, Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);

/*  const navLinks = [
    { label: "Home", href: "/" },
    { label: "News", href: "/news" },
    { label: "Sport", href: "/sport" },
    { label: "Business", href: "/business" },
    { label: "Innovation", href: "/innovation" },
    { label: "Culture", href: "/culture" },
  ]; */

    const navLinks = [
    { label: "Indian Regional Cuisine", href: "/culture" },
    { label: "Consultency", href: "/news" },
    { label: "Product List", href: "/sport" },
    { label: "Contact us", href: "/business" },
    { label: "Services", href: "/innovation" },
    { label: "Home", href: "/" },
    { label: "Travel", href: "/travel" },
  ];
  
  const moreLinks = [
    { label: "Earth", href: "/earth" },
    { label: "Video", href: "/video" },
    { label: "Live", href: "/live" },
  ];


  return (
    <>
      {/* 📌 Header */}
      <header className={`bg-white flex items-center justify-between px-4 py-3 relative z-50 ${ showMoreMenu ? '' : 'border-b border-gray-300'}`}>

        {/* 📱 Mobile: User icon */}
        <div className="flex items-center gap-3 lg:hidden">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
            <i className="fa-solid fa-user text-sm"></i>
          </div>
        </div>

        {/* Logo Center */}
        <div className="flex justify-center items-center space-x-1 w-auto lg:w-[15%]">
          {"SAMRIT".split("").map((char, index) => (
            <div
              key={index}
              className="bg-black text-white text-[24px] font-bold w-10 h-10 flex items-center justify-center"
            >
              {char}
            </div>
          ))}
        </div>

        {/* 📱 Mobile: Search & menu buttons */}
        <div className="flex items-center gap-3 lg:hidden">
          <Search className="w-5 h-5 text-gray-700" />
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* 📺 Desktop: Left Sign In */}
        <div className="hidden lg:flex items-center gap-2 w-[10%] border-r border-gray-300 ml-4">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
            <i className="fa-solid fa-user text-sm"></i>
          </div>
          <Link href="#" className="text-sm font-medium hover:underline">Sign In</Link>
        </div>

        {/* 📺 Desktop: Center Nav */}
        <nav className="hidden lg:flex gap-10 w-[55%] items-center justify-center">
          {navLinks.map((link, idx) => (
            <Link key={idx} href={link.href} className="text-sm font-medium hover:underline">{link.label}</Link>
          ))}
          {/* 3-dot */}
          <button onClick={() => setShowMoreMenu(!showMoreMenu)}>
            <MoreHorizontal className="w-5 h-5 cursor-pointer" />
          </button>
        </nav>

        {/* 📺 Desktop: Right actions */}
        <div className="hidden lg:flex items-center gap-4 w-[20%] justify-end">
          <div className="flex items-center bg-gray-100 border border-gray-300 px-2 py-1">
            <Search className="w-4 h-4 text-gray-600 mr-2" />
            <input
              type="text"
              placeholder="Search SAMRIT"
              className="bg-transparent outline-none text-sm text-gray-700 placeholder-gray-500"
            />
          </div>
        </div>
      </header>

      {/* 📺 Desktop: Full-width bar expand on 3-dot */}
      <div
        className={`hidden lg:flex items-center justify-between px-6 border-b border-gray-300 overflow-hidden transition-all duration-300 ${
          showMoreMenu ? 'max-h-20 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
        } bg-white z-40`}
        style={{ transitionProperty: 'max-height, opacity, padding' }}
      >
        <div className="flex gap-8">
          {moreLinks.map((link, idx) => (
            <Link key={link.href} href="#" className="text-base font-medium hover:underline">
              {link.label}
            </Link>
          ))}
        </div>
        {/* X icon to close */}
        <button onClick={() => setShowMoreMenu(false)}>
          <X className="w-5 h-5 text-gray-700 cursor-pointer" />
        </button>
      </div>

      {/* 📱 Mobile: Dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-300 px-4 py-3">
          <div className="grid grid-cols-2 gap-3">
            {navLinks.concat(moreLinks).map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="text-base font-medium hover:underline"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
