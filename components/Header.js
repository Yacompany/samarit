'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { Search, MoreHorizontal, Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Header() {

  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileRecipes, setShowMobileRecipes] = useState(false);
  const [openMobileSubmenus, setOpenMobileSubmenus] = useState({});


 const navLinks = [
    { label: "Home", href: "/" },
    { 
      label: "Indian Regional Cuisine",
      href: "",
      submenu: [
        { label: "Uttar Pradesh", href: "/state/Uttar-Pradesh" },
        { label: "Punjabi", href: "/state/punjab" },
        { label: "Rajasthani", href: "/state/Rajasthan" },
        { label: "Sikkim", href: "/state/Sikkim" },
        { label: "Tamil Nadu", href: "/state/Tamil-Nadu" },
        { label: "Tripura", href: "/state/Tripura" },
        { label: "Uttarakhand", href: "/state/Uttaranchal" },
        { label: "West Bengali", href: "/state/West-Bengal" },
        { label: "Kerala", href: "/state/Kerala" },
        { label: "Odisha", href: "/state/Orissa" },
        { label: "Nagaland", href: "/state/Nagaland" },
        { label: "Mizoram", href: "/state/Mizoram" },
        { label: "Meghalaya", href: "/state/Meghalaya" },
        { label: "Manipur", href: "/state/Manipur" },
        { label: "Maharashtra", href: "/state/Maharashtra" },
        { label: "Haryana", href: "/state/Haryana" },
        { label: "Gujarat", href: "/state/Gujarat" },
        { label: "Goa", href: "/state/Goa" },
        { label: "Karnataka", href: "/state/Karnataka" },
        { label: "Assam", href: "/state/Assam" },
        { label: "Arunachal", href: "/state/Arunachal-Pradesh" },
        { label: "Andhra", href: "/state/Andhra-Pradesh" },
        { label: "Bihari", href: "/state/Bihar" },
        { label: "Chhattisgarh", href: "/state/Chhattisgarh" },
        { label: "Jharkhand", href: "/state/Jharkhand" },
        { label: "Madhy Pradesh", href: "/state/Madhya-Pradesh" },
        { label: "Himachal", href: "/state/Himachal-Pradesh" },
        { label: "Kashmiri", href: "/state/Jammu-and-Kashmir" },
      ],

    },

    { 
      label: "Consultency", 
      href: "/",
      submenu: [
        { label: "Nutrition Consultance", href: "/1" },
        { label: "Menu Plaining", href: "/2" },
        { label: "Cost Analysis", href: "/3" },
        { label: "Menu Engineering", href: "/4" },
        { label: "Sop Create", href: "/5" },
        { label: "Creative Food idea", href: "/6" },
        { label: "Low Budget Startup", href: "/7" },
        { label: "Food Persentation", href: "/8" },
        { label: "Online Food Classes", href: "/9" },
        { label: "Who To Control Food Wastage", href: "/10" },
        { label: "Recipes Priciny Analysts", href: "/11" },
      ],
    },
    { 
      label: "Product List",
      href: "/", 
      submenu: [
        { label: "Indian Rustic Food", href: "/12"},
        { label: "Nutrition Consultancy", href: "/a"},
        { label: "Indian Immunity Boasting Recipes", href: "/b"},
        { label: "Indian Heart Healthy Recipes", href: "/c"},
        { label: "Indian Weight Loss Food Recipes", href: "/d"},
        { label: "Indian Gluten Free Dite Food Recipe", href: "/e"},
        { label: "Indian Lactic Free Desserts", href: "/f"},
        { label: "Indian Eatable Raw Foods", href: "/g"},
        { label: "Indian Healthy Meals", href: "/h"},
        { label: "Indian Kids Lunch Box Ideas", href: "/i"},
        { label: "Indian Quick & Easy Meal", href: "/j"},
        { label: "Indian Healthy Salads", href: "/k"},
        { label: "World's Soups", href: "/l"},
      ],
    },
    { label: "Contact Us", href: "/contact" },
    {
     label: "Services",
     href: "/",
     submenu: [
      { label: "Food presentation", href: "/m"},
      { label: "Food safety", href: "/n"},
      { label: "Spices and herbs", href: "/o"},
      { label: "Planning and budgeting", href: "/p"},
      { label: "Food packaging", href: "/q"},
      { label: "Clearing plates", href: "/r"},
      { label: "Food service style", href: "/s"},
     ],
    },
  ];
  const moreLinks = [];


  return (
    <>
      {/* 📌 Header */}
      <header className={`bg-white flex items-center justify-between px-4 py-3 relative z-50 ${ showMoreMenu ? '' : 'border-b border-gray-300'}`}>

         {/* 📱 Mobile: Search & menu buttons */}
        <div className="flex items-center gap-3 lg:hidden">
          
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-base font-bold" />
            ) : (
              <Menu className="w-6 h-6 text-base font-bold" />
            )}
          </button>
        </div>


        {/* Logo Center */}
        <div className="flex justify-center items-center space-x-1 w-auto lg:w-[20%]">
          {"SAMRIT".split("").map((char, index) => (
            <div
              key={index}
              className="bg-black text-white text-[24px] font-bold w-5 md:w-10 h-10 flex items-center justify-center"
            >
              {char}
            </div>
          ))}
            <h1 className="text-2xl font-bold text-black-800 ml-2">FOOD</h1>
        </div>

        {/* 📱 Mobile: User icon */}
        <div className="flex items-center gap-3 lg:hidden">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
            <i className="fa-solid fa-user text-sm"></i>
          </div>
        </div>
       
        {/* 📺 Desktop: Center Nav */}
        <nav className="hidden lg:flex gap-6 w-[65%] items-center justify-center font-bold relative">
          {navLinks.map((link, idx) => (
            <div key={idx} className="relative group">
              
              {/* Parent menu item */}
              {link.submenu ? (
                <button
                  type="button"
                  className={`cursor-pointer font-bold text-sm hover:underline whitespace-nowrap ${
                    link.submenu.some((sublink) => pathname === sublink.href)
                      ? 'text-blue-600' // active state
                      : ''
                  }`}
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  href={link.href}
                  className={`font-bold text-sm whitespace-nowrap hover:underline ${
                    pathname === link.href ? 'text-blue-600' : ''
                  }`}
                >
                  {link.label}
                </Link>
              )}

              {/* Submenu */}
              {link.submenu && (
                <div className="absolute left-0 top-full min-w-[250px] bg-black/80 shadow-lg rounded-lg z-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible pointer-events-none group-hover:pointer-events-auto flex flex-wrap transition-all duration-200">
                  {link.submenu.map((sublink, subIdx) => (
                    <Link
                      key={subIdx}
                      href={sublink.href}
                      className={`block px-4 py-2 text-sm font-medium hover:bg-blue-500 text-white ${
                        pathname === sublink.href ? 'bg-blue-500 text-white' : ''
                      }`}
                    >
                      {sublink.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* 3-dot menu toggle */}
          <button onClick={() => setShowMoreMenu(!showMoreMenu)}>
            <MoreHorizontal className="w-5 h-5 cursor-pointer" />
          </button>
        </nav>

         {/* 📺 Desktop: right Sign In */}
        <div className="hidden lg:flex items-center gap-2 w-[8%]">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
            <i className="fa-solid fa-user text-sm"></i>
          </div>
          <Link href="#" className="text-sm font-bold hover:underline">Sign In</Link>
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
        <div className="lg:hidden bg-white border-b border-gray-300 px-4 py-3 space-y-2">
          {navLinks.concat(moreLinks).map((link, idx) => (
            <div key={idx}>
              {link.submenu ? (
                <>
                  <button
                    onClick={() =>
                      setOpenMobileSubmenus((prev) => ({
                        ...prev,
                        [idx]: !prev[idx],
                      }))
                    }
                    className="w-full flex justify-between items-center text-left text-base font-bold hover:underline"
                  >
                    {link.label}
                    <span>{openMobileSubmenus[idx] ? '▲' : '▼'}</span>
                  </button>

                  {openMobileSubmenus[idx] && (
                    <div className="ml-4 mt-1 space-y-1">
                      {link.submenu.map((sublink, subIdx) => (
                        <Link
                          key={subIdx}
                          href={sublink.href}
                          className="block text-sm font-medium text-gray-700 hover:underline"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  className="block text-base font-medium hover:underline"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
     
     
      {/* Navigation - Desktop */}
      <div className="hidden md:flex items-center bg-black text-white text-sm font-medium">
        <nav className="flex-1">
          <ul className="flex">
            <li>
              <a href="#" className="px-4 py-3 hover:bg-blue border-r border-gray-400 block">Home</a>
            </li>

            {/* Recipes with Dropdown */}
            <li
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
              className="relative"
            >
              <a href="#" className="px-4 py-3 hover:bg-blue border-r border-gray-400 block">
                Recipes <span className="ml-1">▼</span>
              </a>
              {showDropdown && (
                <div className="absolute left-[-5rem] top-full bg-black/80 text-white w-screen shadow-lg z-100">
                  <div className="flex gap-4 px-8 py-4 text-[14px]">
                    {[
                      "In Season",
                      "Occasions",
                      "Cuisines",
                      "Ingredients",
                      "Dishes",
                      "Collections",
                    ].map((item, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="hover:underline whitespace-nowrap border-r last:border-none pr-4 mr-4 border-black"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </li>

            <li>
              <a href="#" className="px-4 py-3 hover:bg-blue border-r border-gray-400 block">Budget Recipes</a>
            </li>
            <li>
              <a href="#" className="px-4 py-3 hover:bg-blue border-r border-gray-400 block">Chefs</a>
            </li>
            <li>
              <a href="#" className="px-4 py-3 hover:bg-blue border-r border-gray-400 block">Stories</a>
            </li>
            <li>
              <a href="#" className="px-4 py-3 hover:bg-blue border-r border-gray-400 block">Diets</a>
            </li>
            <li>
              <a href="#" className="px-4 py-3 hover:bg-blue border-r border-gray-400 block">Programmes</a>
            </li>
            <li>
              <a href="#" className="px-4 py-3 hover:bg-blue block">Techniques</a>
            </li>
          </ul>

        </nav>

        {/* Favourites */}
        <div>
          <a
            href="#"
            className="px-4 py-3 text-green-300 hover:bg-blue block"
          >
            Your Favourites
          </a>
        </div>
      </div>
      {/* 📱 Mobile: Right side icons */}
      <div className="flex items-center gap-3 px-4 ml-auto lg:hidden">

        {/* Toggle BBC-style menuOpen dropdown */}
        <button onClick={() => {
          setMenuOpen(!menuOpen);
          setMobileMenuOpen(false); // Close other menu
        }}>
          {menuOpen ? (
            <X className="w-6 h-6 text-base font-bold" />
          ) : (
            <Menu className="w-6 h-6 text-base font-bold" />
          )}
        </button>
      </div>

      {/* Navigation Dropdown - Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-[#017d18] text-white text-sm font-medium">
          <ul>
            {/* Home */}
            <li className="border-b border-white-300 text-[15px]">
              <a href="#" className="block px-4 py-2 hover:bg-blue">Home</a>
            </li>

            {/* Recipes with Submenu */}
            <li className="border-b border-white-300 text-[15px]">
              <button
                onClick={() => setShowMobileRecipes(!showMobileRecipes)}
                className="w-full text-left px-4 py-2 hover:bg-blue flex justify-between items-center"
              >
                Recipes
                <span>{showMobileRecipes ? "▲" : "▼"}</span>
              </button>

              {showMobileRecipes && (
                <ul className="bg-[#339646] text-white border-t">
                  {[
                    "In Season",
                    "Occasions",
                    "Cuisines",
                    "Ingredients",
                    "Dishes",
                    "Collections",
                  ].map((subItem, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className="block px-6 py-2 text-sm border-b hover:bg-blue"
                      >
                        {subItem}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Other Items */}
            {[
              "Budget Recipes",
              "Chefs",
              "Stories",
              "Diets",
              "Programmes",
              "Techniques",
            ].map((item, index) => (
              <li key={index} className="border-b border-white-300 text-[15px]">
                <a href="#" className="block px-4 py-2 hover:bg-blue">{item}</a>
              </li>
            ))}

            {/* Your Favourites */}
            <li className="text-[15px]">
              <a
                href="#"
                className="block px-4 py-3 text-green-300 hover:bg-blue"
              >
                Your Favourites
              </a>
            </li>
          </ul>

        </div>
      )}

    </>
  );
}
