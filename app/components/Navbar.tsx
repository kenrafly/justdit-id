import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#041A2F]/95 backdrop-blur-sm border-b border-white/10">
      {/* Gradient light bar on top */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-linear-to-r from-[#235092]/20 via-[#235092] to-[#235092]/20 blur-md"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <button className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors md:hidden">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <Link
              href="/"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <Image
                src="/LOGO 2.png"
                alt="JustDit.id Logo"
                width={80}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#products"
              className="text-white hover:text-blue-300 transition-colors"
            >
              Produk
            </Link>
            <Link
              href="#bundling"
              className="text-white hover:text-blue-300 transition-colors"
            >
              Paket Bundling
            </Link>
            <Link
              href="#tips"
              className="text-white hover:text-blue-300 transition-colors"
            >
              Tips & Tricks
            </Link>
            <Link
              href="#contact"
              className="text-white hover:text-blue-300 transition-colors"
            >
              Kontak
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {/* Search Bar - Desktop (lg+) and Mobile */}
            <div className="flex lg:flex items-center bg-white/10 rounded-full px-3 py-2 border border-white/20 w-32 sm:w-40 lg:w-48">
              <input
                type="text"
                placeholder="Cari produk..."
                className="bg-transparent text-white placeholder-gray-400 outline-none w-full text-sm"
              />
              <svg
                className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Daftar Button */}
            <Link
              href="#cta"
              className="hidden md:block bg-[#28529C] hover:bg-[#1e3d7a] text-white px-6 py-2 rounded-full font-semibold transition-colors"
            >
              Daftar
            </Link>

            {/* Login Button */}
            <Link
              href="#contact"
              className="hidden md:block text-white hover:text-blue-300 transition-colors font-semibold"
            >
              Login
            </Link>

            {/* Shopping Cart */}
            <button className="hidden md:block text-white hover:text-blue-300 transition-colors p-2 relative">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
