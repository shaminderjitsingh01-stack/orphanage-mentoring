'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPartnerDropdownOpen, setIsPartnerDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">OM</span>
            </div>
            <span className="font-bold text-xl text-gray-900 hidden sm:block">
              Orphanage Mentoring
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
              About Us
            </Link>

            {/* Partner Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsPartnerDropdownOpen(true)}
              onMouseLeave={() => setIsPartnerDropdownOpen(false)}
            >
              <button className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1">
                Partner With Us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isPartnerDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2">
                  <Link
                    href="/partner/orphanages"
                    className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Orphanages
                  </Link>
                  <Link
                    href="/partner/companies"
                    className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Companies
                  </Link>
                  <Link
                    href="/partner/education"
                    className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Education Institutes
                  </Link>
                </div>
              )}
            </div>

            <Link href="/partners" className="text-gray-600 hover:text-blue-600 transition-colors">
              Our Partners
            </Link>
            <Link href="/newsletter" className="text-gray-600 hover:text-blue-600 transition-colors">
              Newsletter
            </Link>
            <Link href="/contact" className="btn-primary text-sm py-2 px-4">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link href="/about" className="text-gray-600 hover:text-blue-600">About Us</Link>
              <div className="border-t pt-4">
                <p className="text-sm text-gray-400 mb-2">Partner With Us</p>
                <Link href="/partner/orphanages" className="block py-2 text-gray-600 hover:text-blue-600 pl-4">Orphanages</Link>
                <Link href="/partner/companies" className="block py-2 text-gray-600 hover:text-blue-600 pl-4">Companies</Link>
                <Link href="/partner/education" className="block py-2 text-gray-600 hover:text-blue-600 pl-4">Education Institutes</Link>
              </div>
              <Link href="/partners" className="text-gray-600 hover:text-blue-600">Our Partners</Link>
              <Link href="/newsletter" className="text-gray-600 hover:text-blue-600">Newsletter</Link>
              <Link href="/contact" className="btn-primary text-center">Contact Us</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
