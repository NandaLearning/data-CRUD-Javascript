import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigasi() {
  return (
    <div className="w-full h-16 bg-white  text-black font-bold">
      {/* Gunakan Link untuk mengarahkan ke halaman lain */}
      <Link to="/add" className="text-center hover:text-green-600 duration-200 text-2xl mt-5">
        Buat Data
      </Link>
    </div>
  );
}
