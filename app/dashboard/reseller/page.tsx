"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function ResellerDashboard() {
  const { userProfile, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!userProfile) {
        router.push("/login");
      } else if (userProfile.role !== "reseller") {
        router.push(`/dashboard/${userProfile.role}`);
      }
    }
  }, [userProfile, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#041A2F] flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!userProfile || userProfile.role !== "reseller") {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#041A2F]">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Dashboard Reseller
            </h1>
            <p className="text-gray-400">
              Selamat datang, {userProfile.displayName || userProfile.email}
            </p>
          </div>
          <Link
            href="/"
            className="bg-[#28529C] hover:bg-[#1e3d7a] text-white px-6 py-2 rounded-full font-semibold transition-colors"
          >
            Kembali ke Beranda
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-[#28529C] rounded-xl p-6">
            <h3 className="text-gray-300 text-sm mb-2">Total Penjualan</h3>
            <p className="text-3xl font-bold text-white">0</p>
          </div>
          <div className="bg-[#28529C] rounded-xl p-6">
            <h3 className="text-gray-300 text-sm mb-2">Pelanggan</h3>
            <p className="text-3xl font-bold text-white">0</p>
          </div>
          <div className="bg-[#28529C] rounded-xl p-6">
            <h3 className="text-gray-300 text-sm mb-2">Pendapatan</h3>
            <p className="text-3xl font-bold text-white">Rp 0</p>
          </div>
          <div className="bg-[#28529C] rounded-xl p-6">
            <h3 className="text-gray-300 text-sm mb-2">Komisi</h3>
            <p className="text-3xl font-bold text-white">Rp 0</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-[#28529C] rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Aksi Cepat</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="bg-[#4E99BE] hover:bg-[#3d7a99] text-white p-4 rounded-lg text-center font-semibold transition-colors">
              Tambah Pesanan
            </button>
            <button className="bg-[#4E99BE] hover:bg-[#3d7a99] text-white p-4 rounded-lg text-center font-semibold transition-colors">
              Kelola Pelanggan
            </button>
            <button className="bg-[#4E99BE] hover:bg-[#3d7a99] text-white p-4 rounded-lg text-center font-semibold transition-colors">
              Laporan Penjualan
            </button>
            <button className="bg-[#4E99BE] hover:bg-[#3d7a99] text-white p-4 rounded-lg text-center font-semibold transition-colors">
              Komisi Saya
            </button>
          </div>
        </div>

        {/* Recent Sales */}
        <div className="bg-[#28529C] rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">
            Penjualan Terbaru
          </h2>
          <div className="text-center py-8 text-gray-400">
            Belum ada penjualan. Mulai jual produk sekarang!
          </div>
        </div>
      </div>
    </div>
  );
}
