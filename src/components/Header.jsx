import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'الرئيسية', href: '/' },
    { name: 'عن الجمعية', href: '/#about' },
    { name: 'الأنشطة', href: '/#activities' },
    { name: 'الأخبار', href: '/#news' },
    { name: 'اتصل بنا', href: '/#contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#25343F] shadow-lg" dir="rtl">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Placeholder */}
          <Link to="/" className="flex items-center space-x-2 space-x-reverse group">
            <div className=" w-[70%] flex items-center justify-center">
                <img src="/hLogo.svg" alt="" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 space-x-reverse">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-base font-medium text-gray-200 hover:text-[#BB9661] transition-colors font-dubai"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center">
             {/* <Button className="bg-[#BB9661] hover:bg-[#a38253] text-[#25343F] font-bold">
               تبرع الآن
             </Button> */}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-white hover:bg-[#324554]"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 rounded-md text-base font-medium text-gray-200 hover:bg-[#324554] hover:text-[#BB9661] text-right font-dubai"
                >
                  {item.name}
                </a>
              ))}
              
              </div>
            </div>
        
        )}
      </nav>
    </header>
  );
}

export default Header;