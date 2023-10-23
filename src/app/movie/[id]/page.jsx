"use client";
import { useParams } from 'next/navigation';
import { useGetDetailMovie } from '@/hooks/useMovies';
import { useState } from 'react'; // Import us

export default function MovieDetailPage() {
  const params = useParams();
  const movieId = params.id;
  const movieData = useGetDetailMovie(movieId);

  const [sortBy, setSortBy] = useState("all"); // Initialize sortBy state

  // Pastikan untuk menangani kasus ketika data film belum diambil atau sedang dimuat
  if (!movieData) {
    return <p>Loading...</p>;
  }

  // Tampilkan informasi film, ulasan, dan karakter
  return (
    
    <div>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="flex space-x-2">
          <button
            className={`px-6 py-2 rounded-full hover:bg-red-500 hover:text-white ${sortBy === "all" ? 'bg-red-500 text-white' : 'bg-white text-gray-500'}`}
            onClick={() => setSortBy("all")}
          >
            Overview
          </button>
          <button
            className={`px-6 py-2 rounded-full hover.bg-red-500 hover.text-white ${sortBy === "popularity.desc" ? 'bg-red-500 text-white' : 'bg-white text-gray-500'}`}
            onClick={() => setSortBy("popularity.desc")}
          >
            Characters
          </button>
          <button
            className={`px-6 py-2 rounded-full hover.bg-red-500 hover.text-white ${sortBy === "popularity.sc" ? 'bg-red-500 text-white' : 'bg-white text-gray-500'}`}
            onClick={() => setSortBy("popularity.sc")}
          >
            Review
          </button>
        </div>
        </div>
        <h1 className="text-2xl font-bold mb-4">Sipnosis</h1>
      <h1>{movieData.title}</h1>
      <p>Overview: {movieData.overview}</p>
      {/* Tampilkan ulasan di sini */}
      {/* Tampilkan karakter di sini */}
      
      {/* Tombol untuk mengatur sorting */}
      <h1 className="text-2xl font-bold mb-4">Movie info</h1>
      
    </div>
    
  );
}
