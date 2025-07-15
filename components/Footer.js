import Link from 'next/link';
export default function Footer() {

  return (
    <footer className="bg-[#4c4c4c] text-white text-sm p-6 space-y-5">

      {/* Heading */}
      <h2 className="text-[1.7em] font-bold leading-[1] mb-4">Explore the SAMRIT</h2>

      {/* Nav Links */}
      <ul className="flex flex-wrap ml-[-19px] mt-8">
          <li className="w-1/2 sm:w-1/3 md:w-1/4  border-r border-[#949494]">
            <a href="" className="hover:underline ml-4">Home</a>
          </li>
          <li className="w-1/2 sm:w-1/3 md:w-1/4 border-r border-[#949494]">
            <a href="news" className="hover:underline ml-4">News</a>
          </li>
          <li className="w-1/2 sm:w-1/3 md:w-1/4 border-r border-[#949494]">
            <a href="news" className="hover:underline ml-4">Sport</a>
          </li>
          <li className="w-1/2 sm:w-1/3 md:w-1/4 border-r border-[#949494]">
            <a href="news" className="hover:underline ml-4">Business</a>
          </li>
          <li className="w-1/2 sm:w-1/3 md:w-1/4 border-r border-[#949494]">
            <a href="news" className="hover:underline ml-4">Innovation</a>
          </li>
          <li className="w-1/2 sm:w-1/3 md:w-1/4 border-r border-[#949494]">
            <a href="news" className="hover:underline ml-4">Culture</a>
          </li>
          <li className="w-1/2 sm:w-1/3 md:w-1/4 border-r border-[#949494]">
            <a href="news" className="hover:underline ml-4">Culture</a>
          </li>
          <li className="w-1/2 sm:w-1/3 md:w-1/4 border-r border-[#949494]">
            <a href="news" className="hover:underline ml-4">Earth</a>
          </li>
          <li className="w-1/2 sm:w-1/3 md:w-1/4 border-r border-[#949494]">
            <a href="news" className="hover:underline ml-4">Video</a>
          </li>
          <li className="w-1/2 sm:w-1/3 md:w-1/4 border-r border-[#949494]">
            <a href="news" className="hover:underline ml-4">Live</a>
          </li>
          
      </ul>

      {/* Divider */}
      <hr className="border-gray-500" />

      {/* Info Links */}
      <div>
        <ul className="flex flex-wrap lg:flex-nowrap">
          <li className="w-1/2 sm:w-auto mb-2">
            <a href="#" className="hover:underline block pl-4">Terms of Use</a>
          </li>
          <li className="w-1/2 sm:w-auto mb-2">
            <Link href="/about" className="hover:underline block pl-4">
              About the SAMRIT
            </Link>
          </li>
          <li className="w-1/2 sm:w-auto mb-2">
            <a href="#" className="hover:underline block pl-4">Privacy Policy</a>
          </li>
          <li className="w-1/2 sm:w-auto mb-2">
            <a href="#" className="hover:underline block pl-4">Cookies</a>
          </li>
          <li className="w-1/2 sm:w-auto mb-2">
            <a href="#" className="hover:underline block pl-4">Accessibility Help</a>
          </li>
          <li className="w-1/2 sm:w-auto mb-2">
            <a href="#" className="hover:underline block pl-4">Parental Guidance</a>
          </li>
          <li className="w-1/2 sm:w-auto mb-2">
            <a href="#" className="hover:underline block pl-4">Contact the SAMRIT</a>
          </li>
          <li className="w-1/2 sm:w-auto mb-2">
            <a href="#" className="hover:underline block pl-4">SAMRIT emails for you</a>
          </li>
          <li className="w-1/2 sm:w-auto mb-2">
            <a href="#" className="hover:underline block pl-4">Advertise with us</a>
          </li>
        </ul>
      </div>
      {/* Copyright */}
      <p className="text-gray-300">
        <strong>Copyright © 2025 SAMRIT.</strong> The SAMRIT is not responsible for the content of external sites.{' '}
        <a href="#" className="underline hover:text-blue-300">Read about our approach to external linking.</a>
      </p>

    </footer>
  );
}
