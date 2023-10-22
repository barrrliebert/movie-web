"use client"
import { useGetMovies } from "@/hooks/useMovies"
import Card from "../components/Card";
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Link from "next/link";
import { useSearchParams } from 'next/navigation'
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const maxPages = 6;

export default function ListMovie() {
    const [sortBy, setSortBy] = useState('popularity.desc')
    const params = useSearchParams()
    const data = useGetMovies(sortBy, params.get('page'))
    const [page, setPage] = useState(1);

    useEffect(() => {
        const pageParam = parseInt(params.get('page')) || 1;
        setPage(pageParam);
      }, [params.get('page')]);

      const goToPreviousPage = () => {
        if (page > 1) {
          setPage(page - 1);
        }
      };
    
      const goToNextPage = () => {
        if (page < maxPages) {
          setPage(page + 1);
        }
      };

    return (
        <>
        <Carousel
  showArrows={true}
  showStatus={false}
  showThumbs={false}
  infiniteLoop={true}
  selectedItem={1} // Adjust the initial selected item as needed
  centerMode={true}
  centerSlidePercentage={100} // Set to 100 to center the selected item
  className="max-w-screen-xl mx-auto"
>
  {data?.results?.map((item, index) => (
    <Link href={`/movie/${item.id}`} key={item.id}>
      <div className="bg-white p-4 shadow-md rounded-lg">
        <div className="banner-wrapper">
          <img
            src="https://collider.com/wp-content/uploads/the-avengers-movie-poster-banners-04.jpg"
            alt={item.title}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </Link>
  ))}
</Carousel>




        <h1 className="text-2xl font-bold mb-4">Browse by category</h1>
     <div className="flex flex-col lg:flex-row items-center">
     
  <div className="flex space-x-2">
  <button
      className={`px-6 py-2 rounded-full hover:bg-red-500 hover:text-white ${sortBy === "all" ? 'bg-red-500 text-white' : 'bg-white text-gray-500'}`}
      onClick={() => setSortBy("all")}
    >
      All
    </button>
    <button
      className={`px-6 py-2 rounded-full hover:bg-red-500 hover:text-white ${sortBy === "popularity.desc" ? 'bg-red-500 text-white' : 'bg-white text-gray-500'}`}
      onClick={() => setSortBy("popularity.desc")}
    >
      Anime
    </button>
    <button
      className={`px-6 py-2 rounded-full hover:bg-red-500 hover:text-white ${sortBy === "popularity.asc" ? 'bg-red-500 text-white' : 'bg-white text-gray-500'}`}
      onClick={() => setSortBy("popularity.asc")}
    >
      Action
    </button>
    <button
      className={`px-6 py-2 rounded-full hover:bg-red-500 hover:text-white ${sortBy === "revenue.asc" ? 'bg-red-500 text-white' : 'bg-white text-gray-500'}`}
      onClick={() => setSortBy("revenue.asc")}
    >
      Adventure
    </button>
    <button
      className={`px-6 py-2 rounded-full hover:bg-red-500 hover:text-white ${sortBy === "revenue.desc" ? 'bg-red-500 text-white' : 'bg-white text-gray-500'}`}
      onClick={() => setSortBy("revenue.desc")}
    >
      Science fiction
    </button>
    <button
      className={`px-6 py-2 rounded-full hover:bg-red-500 hover:text-white ${sortBy === "revenue.sc" ? 'bg-red-500 text-white' : 'bg-white text-gray-500'}`}
      onClick={() => setSortBy("revenue.sc")}
    >
      Comedy
    </button>
  </div>
</div>




<div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 justify-center sm:justify-around gap-5">
  {data?.results?.map((item, index) => (
    <Link href={`/movie/${item.id}`} key={item.id}>
      <Card image={item.poster_path} overview={item.overview} id={item.id} popularity={item.popularity} title={item.title} />
    </Link>
  ))}
</div>
<div className="flex justify-center mt-10">
  <ul className="flex items-center gap-4 sm:gap-28">
  <li onClick={goToPreviousPage}>
      <BsArrowLeft size={50} />
    </li>
    <li>
      <Link href="/?page=1">
        <span className={`text-2xl sm:text-4xl hover:text-white hover:bg-red-500 hover:transform hover:scale-105 ${page === 1 ? 'bg-red-500 text-white' : 'bg-white text-gray-500'}`}>1</span>
      </Link>
    </li>
    <li>
      <Link href="/?page=2">
        <span className={`text-2xl sm:text-4xl hover:text-white hover:bg-red-500 ${page === 2 ? 'bg-red-500 text-white' : 'bg-white text-gray-500'}`}>2</span>
      </Link>
    </li>
    <li>
      <Link href="/?page=3">
        <span className={`text-2xl sm:text-4xl hover:text-white hover:bg-red-500 ${page === 3 ? 'bg-red-500 text-white' : 'bg-white text-gray-500'}`}>3</span>
      </Link>
    </li>
    <li>
      <Link href="/?page=4">
        <span className={`text-2xl sm:text-4xl hover:text-white hover:bg-red-500 ${page === 4 ? 'bg-red-500 text-white' : 'bg-white text-gray-500'}`}>4</span>
      </Link>
    </li>
    <li>
      <Link href="/?page=5">
        <span className={`text-2xl sm:text-4xl hover:text-white hover:bg-red-500 ${page === 5 ? 'bg-red-500 text-white' : 'bg-white text-gray-500'}`}>5</span>
      </Link>
    </li>
    <li>
      <Link href="/?page=6">
        <span className={`text-2xl sm:text-4xl hover:text-white hover:bg-red-500 hover:transform hover:scale-105 ${page === 6 ? 'bg-red-500 text-white' : 'bg-white text-gray-500'}`}>6</span>
      </Link>
    </li>
    <li onClick={goToNextPage}>
      <BsArrowRight size={50} />
    </li>
  </ul>
</div>


    <div className="flex justify-center gap-32   mt-10">
    </div>
    </>
  );
};
        
   