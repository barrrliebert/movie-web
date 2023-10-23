"use client";
import { useParams } from 'next/navigation';
import { useGetDetailMovie } from '@/hooks/useMovies';
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function MovieDetailPage() {
  const params = useParams();
  const movieId = params.id;
  const movieData = useGetDetailMovie(movieId);

  const [sortBy, setSortBy] = useState("all");

  if (!movieData) {
    return <p>Loading...</p>;
  }

  const movieItems = [
    {
      title: movieData.title,
      rating: "8.5", // Replace with the actual rating
      review: "123 Reviews", // Replace with the actual number of reviews
    },
    // Add more movie items as needed
  ];

  return (
    <main className="container mx-auto mt-10 relative">

<div className="relative w-full h-[705px] text-left text-17xl text-white font-roboto">
  <img
    className="absolute top-[0px] left-[7px] w-[1961px] h-[704px] object-cover"
    alt=""
    src="https://collider.com/wp-content/uploads/the-avengers-movie-poster-banners-04.jpg"
  />
  <div className="relative bg-gray w-full h-[705px]">
  <div className="relative">
  <div className="absolute top-[90px] left-[172px] text-[70px] font-black inline-block max-w-[950px] h-[84px] break-words">
    {movieData.title}
  </div>

  <svg
    className="absolute top-[300px] left-[179.2px] font-medium inline-block w-[51px] h-[42px]"
    alt=""
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 49 38"
    fill="#EBCD00"
  >
    <path d="M24.5 0L30.2251 14.5106H48.7519L33.7634 23.4787L39.4885 37.9894L24.5 29.0213L9.51148 37.9894L15.2366 23.4787L0.248058 14.5106H18.7749L24.5 0Z" />
  </svg>

  <svg
    className="absolute top-[300px] left-[232.2px] font-medium inline-block w-[51px] h-[42px]"
    alt=""
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 49 38"
    fill="#EBCD00"
  >
    <path d="M24.5 0L30.2251 14.5106H48.7519L33.7634 23.4787L39.4885 37.9894L24.5 29.0213L9.51148 37.9894L15.2366 23.4787L0.248058 14.5106H18.7749L24.5 0Z" />
  </svg>

  <svg
    className="absolute top-[300px] left-[283.2px] font-medium inline-block w-[51px] h-[42px]"
    alt=""
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 49 38"
    fill="#EBCD00"
  >
    <path d="M24.5 0L30.2251 14.5106H48.7519L33.7634 23.4787L39.4885 37.9894L24.5 29.0213L9.51148 37.9894L15.2366 23.4787L0.248058 14.5106H18.7749L24.5 0Z" />
  </svg>

  <svg
    className="absolute top-[300px] left-[335.2px] font-medium inline-block w-[51px] h-[42px]"
    alt=""
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 49 38"
    fill="#E4E4E4"
  >
    <path d="M24.5 0L30.2251 14.5106H48.7519L33.7634 23.4787L39.4885 37.9894L24.5 29.0213L9.51148 37.9894L15.2366 23.4787L0.248058 14.5106H18.7749L24.5 0Z" />
  </svg>


  <div className="absolute top-[300px] left-[405px] font-medium inline-block w-[235px] h-[38px]">
    2200 reviews
  </div>
</div>


<div className="absolute top-[350px] left-[175px] font-medium inline-block max-w-[95%] w-[700px] h-[165px] break-words">
  <p className="m-0 break-words">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>
</div>
</div>

  <button className="absolute top-[502px] left-[475px] w-64 h-16 bg-transparent text-white text-2xl font-bold rounded-md border border-white">
    Add to Watchlist
  </button>

  <button className="absolute top-[502px] left-[175px] w-64 h-16 bg-red-500 text-white text-2xl font-black rounded-md">
    Watch Trailer
  </button>
  </div>
<div className="flex justify-center gap-32   mt-10"></div>

      <div className="flex flex-col justify-between max-h-screen">
        {/* Content */}
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
                className={`px-6 py-2 rounded-full hover:bg-red-500 hover:text-white ${sortBy === "popularity.desc" ? 'bg-red-500 text-white' : 'bg-white text-gray-500'}`}
                onClick={() => setSortBy("popularity.desc")}
              >
                Characters
              </button>
              <button
                className={`px-6 py-2 rounded-full hover:bg-red-500 hover:text-white ${sortBy === "popularity.sc" ? 'bg-red-500 text-white' : 'bg-white text-gray-500'}`}
                onClick={() => setSortBy("popularity.sc")}
              >
                Review
              </button>
            </div>
          </div>

          <div className="flex justify-center gap-32   mt-10"></div>
    

          <div className="flex flex-row items-center">
            <h1 className="text-2xl lg:text-5xl font-bold mb-4">Synopsis</h1>
            <div className="border-t border-gray-500 flex-grow ml-4"></div>
          </div>
          <h1 className="text-2xl lg:text-3xl font-bold mb-4">{movieData.title}</h1>
          <p className="lg:text-lg">Overview: {movieData.overview}</p>

          <div className="flex justify-center gap-32 mt-10"></div>

          <div className="flex flex-row items-center">
            <h1 className="text-2xl lg:text-5xl font-bold mb-4">Movie Info</h1>
            <div className="border-t border-gray-500 flex-grow ml-4"></div>
          </div>
          {/* Display Movie Info */}
          <div className="mt-4">
        <div>
          <p className="text-xl font-semibold">Release date:</p>
          <p>{movieData.release_date}</p>
        </div>

        <div>
          <p className="text-xl font-semibold">Budget:</p>
          <p>{movieData.budget} USD</p>
        </div>

        <div>
          <p className="text-xl font-semibold">Director:</p>
          <p>{movieData.director}</p>
        </div>

        <div>
          <p className="text-xl font-semibold">Featured song:</p>
          <p>{movieData.featured_song}</p>
        </div>
        <div>
          <p className="text-xl font-semibold">Release date:</p>
          <p>{movieData.release_date}</p>
        </div>

        <div>
          <p className="text-xl font-semibold">Budget:</p>
          <p>{movieData.budget} USD</p>
        </div>

        <div>
          <p className="text-xl font-semibold">Director:</p>
          <p>{movieData.director}</p>
        </div>

        <div>
          <p className="text-xl font-semibold">Featured song:</p>
          <p>{movieData.featured_song}</p>
        </div>
        <div className="flex justify-center gap-32   mt-10"></div>
      </div>
      </div>

      </div>
    </main>
  );
}

