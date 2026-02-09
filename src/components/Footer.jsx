import React from "react";
import { Link } from "react-router-dom";
import { Youtube } from "lucide-react";

// Simple X icon
const XIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

function Footer() {
  return (
    <footer
      className="bg-[#1f2b34] text-white pt-16 pb-8 border-t border-gray-800"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Bio */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            
            {/* Logo */}
            <div className="flex items-center justify-center md:justify-start">
  <img
    className="
      w-[70%] 
      aspect-square 
      object-contain 
      mx-auto
      sm:w-56
      md:w-64
      lg:w-72
    "
    src="/lightLogo.svg"
    alt="شعار الجمعية"
  />
</div>

            {/* Partner Logos */}
          <div className="flex items-center gap-4 mt-6 justify-center md:justify-start">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEiGpEysm4gIwNYmjEyH-xX0HInZ57uylhz0NuTAx8Mw&s=10"
    alt="شريك 1"
    className="h-16 sm:h-20 md:h-24 lg:h-28 object-contain"
  />
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxJqPc02feg4Kw9w78YkKq86UI9aCbAr88K6SSHkjKvQ&s=10"
    alt="شريك 2"
    className="h-16 sm:h-20 md:h-24 lg:h-28 object-contain"
  />
</div>

            {/* Description */}
            <p className="text-gray-400 text-start leading-relaxed mb-6 max-w-md text-base sm:text-lg md:text-xl mt-4">
              جمعية رائدة تسعى لتمكين التعليم وبناء مجتمع معرفي مستدام من خلال
              مبادرات نوعية وشراكات استراتيجية.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://x.com/saeedalm1447"
                className="bg-[#25343F] p-3 rounded-full hover:bg-[#BB9661] transition-colors"
              >
                <XIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="https://www.youtube.com/@saeed.alm.1447"
                className="bg-[#25343F] p-3 rounded-full hover:bg-[#F15D4C] transition-colors"
              >
                <Youtube className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-[#BB9661] mb-6">
              روابط سريعة
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors block"
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors block"
                >
                  عن الجمعية
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white transition-colors block"
                >
                  الأنشطة والبرامج
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors block"
                >
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div>
            <h3 className="text-xl font-bold text-[#BB9661] mb-6">
              تواصل معنا
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-white font-medium">الهاتف:</span>
                <span dir="ltr" className="text-right">
                  0590595916
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white font-medium">البريد:</span>
                <span className="font-sans text-sm">
                  saeed.alm.1447@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} جمعية سعيد العلمية. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
