"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user, userProfile, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      setIsMenuOpen(false);
      setIsProfileOpen(false);
    } catch (error) {
      console.error(
        "Logout error:",
        error instanceof Error ? error.message : String(error)
      );
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#041A2F]/95 backdrop-blur-sm border-b border-white/10">
      {/* Gradient light bar on top */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-linear-to-r from-[#235092]/20 via-[#235092] to-[#235092]/20 blur-md"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors md:hidden"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            <Link
              href="/"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <Image
                src="/LOGO 2.png"
                alt="JustDit.id Logo"
                width={70}
                height={30}
                className="h-8 w-auto object-contain"
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
            {/* Search Bar - Desktop Right */}
            <div className="hidden md:flex items-center bg-white/10 rounded-full px-4 py-2 border border-white/20 w-48 lg:w-64">
              <input
                type="text"
                placeholder="Cari produk..."
                className="bg-transparent text-white placeholder-gray-400 outline-none w-full text-sm"
              />
              <svg
                className="w-5 h-5 text-gray-400 flex-shrink-0"
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

            {/* Auth Buttons */}
            {user ? (
              <div className="hidden md:flex items-center gap-3 relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="focus:outline-none"
                >
                  {user.photoURL ? (
                    <Image
                      src={user.photoURL}
                      alt={user.displayName || "User"}
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-[#4E99BE] hover:border-[#3d7a99] transition-colors cursor-pointer"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-[#4E99BE] hover:bg-[#3d7a99] flex items-center justify-center text-white font-semibold transition-colors cursor-pointer">
                      {user.email?.charAt(0).toUpperCase()}
                    </div>
                  )}
                </button>

                {/* Dropdown Menu */}
                {isProfileOpen && (
                  <div className="absolute right-0 top-12 mt-2 w-48 bg-[#28529C] rounded-lg shadow-xl border border-white/20 py-2 z-50">
                    <div className="px-4 py-2 border-b border-white/20">
                      <p className="text-white font-semibold text-sm">
                        {user.displayName || "User"}
                      </p>
                      <p className="text-gray-400 text-xs truncate">
                        {user.email}
                      </p>
                      {userProfile && (
                        <p className="text-[#4E99BE] text-xs mt-1 capitalize">
                          {userProfile.role}
                        </p>
                      )}
                    </div>
                    {userProfile && (
                      <Link
                        href={`/dashboard/${userProfile.role}`}
                        onClick={() => setIsProfileOpen(false)}
                        className="block w-full text-left px-4 py-2 text-white hover:bg-white/10 transition-colors text-sm font-semibold"
                      >
                        Dashboard
                      </Link>
                    )}
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-red-400 hover:bg-white/10 transition-colors text-sm font-semibold"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-4">
                <Link
                  href="/register"
                  className="bg-[#28529C] hover:bg-[#1e3d7a] text-white px-6 py-2 rounded-full font-semibold transition-colors"
                >
                  Daftar
                </Link>
                <Link
                  href="/login"
                  className="text-white hover:text-blue-300 transition-colors font-semibold"
                >
                  Login
                </Link>
              </div>
            )}

            {/* Shopping Cart */}
            <button className="text-white hover:text-blue-300 transition-colors p-2 relative">
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

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="py-4 space-y-4">
            <Link
              href="#products"
              onClick={() => setIsMenuOpen(false)}
              className="block text-white hover:text-blue-300 transition-colors py-2"
            >
              Produk
            </Link>
            <Link
              href="#bundling"
              onClick={() => setIsMenuOpen(false)}
              className="block text-white hover:text-blue-300 transition-colors py-2"
            >
              Paket Bundling
            </Link>
            <Link
              href="#tips"
              onClick={() => setIsMenuOpen(false)}
              className="block text-white hover:text-blue-300 transition-colors py-2"
            >
              Tips & Tricks
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block text-white hover:text-blue-300 transition-colors py-2"
            >
              Kontak
            </Link>

            {/* Mobile Auth Buttons */}
            {user ? (
              <>
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-3 py-2 border-t border-white/20 pt-4 w-full"
                >
                  <div className="text-white text-sm text-left flex-1">
                    <p className="font-semibold">
                      {user.displayName || "User"}
                    </p>
                    <p className="text-gray-400 text-xs">{user.email}</p>
                  </div>
                  <svg
                    className={`w-5 h-5 text-white transition-transform ${isProfileOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  {user.photoURL ? (
                    <Image
                      src={user.photoURL}
                      alt={user.displayName || "User"}
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-[#4E99BE]"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-[#4E99BE] flex items-center justify-center text-white font-semibold">
                      {user.email?.charAt(0).toUpperCase()}
                    </div>
                  )}
                </button>

                {isProfileOpen && (
                  <button
                    onClick={handleLogout}
                    className="block w-full bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold transition-colors text-center"
                  >
                    Logout
                  </button>
                )}
              </>
            ) : (
              <>
                <Link
                  href="/register"
                  onClick={() => setIsMenuOpen(false)}
                  className="block bg-[#28529C] hover:bg-[#1e3d7a] text-white px-6 py-2 rounded-full font-semibold transition-colors text-center"
                >
                  Daftar
                </Link>
                <Link
                  href="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-white hover:text-blue-300 transition-colors font-semibold py-2"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
