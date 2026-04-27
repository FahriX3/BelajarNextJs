"use client"; // Wajib ada karena kita pakai useState (Interaktivitas)
import { useState } from "react";

export default function Home() {
  // State untuk kontrol popup (true = buka, false = tutup)
  const [isOpen, setIsOpen] = useState(false);

  cont

  return (
    <main className="p-5 bg-black min-h-screen relative">
      
      {/* Header */}
      <div className="bg-black mb-10">
        <h1 className="text-center text-pink-500 text-4xl font-bold">Welcome to Notela</h1>
      </div>

      {/* Konten Kartu */}
      <div className="bg-white/10 p-4 rounded-lg shadow-md mt-5">
        <div className="bg-white/50 p-4 rounded-lg shadow-md hover:bg-red-200 transition duration-100">
          <h3 className="font-bold text-black">Belajar Next.js</h3>
          <p className="text-black">Next.js is a React framework for production.</p>
        </div>
      </div>

      {/* TOMBOL FLOATING (+) */}
      <button 
        onClick={() => setIsOpen(true)} // Klik buat buka
        className="bg-green-500 text-white w-14 h-14 text-2xl rounded-full fixed bottom-10 right-10 hover:bg-green-600 transition duration-300 z-40 shadow-xl"
      >
        +
      </button>

      {/* POPUP MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay Gelap (Background belakang popup) */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsOpen(false)} // Klik background buat nutup
          ></div>

          {/* Kotak Form */}
          <div className="bg-white rounded-2xl p-8 w-full max-w-md relative z-10 shadow-2xl animate-in fade-in zoom-in duration-300">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Tambah Data Baru</h2>
            
            <div className="space-y-6">
              {/* Input 1 */}
              <div className="relative">
                <input
                  type="text"
                  id="judul"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" " 
                />
                <label htmlFor="judul" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                  Judul Notes
                </label>
              </div>

              {/* Input 2 */}
              <div className="relative">
                <textarea
                  id="deskripsi"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                ></textarea>
                <label htmlFor="deskripsi" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                  Deskripsi Singkat
                </label>
              </div>
            </div>

            {/* Tombol Action */}
            <div className="flex gap-3 mt-8">
              <button 
                onClick={() => setIsOpen(false)}
                className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Batal
              </button>
              <button 
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                onClick={() => {
                  alert("Data Disimpan!");
                  setIsOpen(false);
                }}
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}