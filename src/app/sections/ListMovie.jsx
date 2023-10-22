"use client"
import { useGetMovies } from "@/hooks/useMovies"
import Card from "../components/Card";
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';
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

  <div class="bg-black">
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
        <AiFillYoutube className="text-red-500 w-20 h-20" />
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-white">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
        
          </div>
        </div>
        <div className="space-y-4 text-sm">
          <p className="mr-1 text-white">
            Tentang kami
          </p>
          <div className="flex">
            <p className="mr-1 text-white">Blog</p>
          </div>
          <div className="flex">
            <p className="mr-1 text-white">Layanan</p>
          </div>
          <div className="flex">
            <p className="mr-1 text-white">Karir</p>
          </div>
        </div>
        <div>

        <span className="text-base font-bold tracking-wide text-white">
  Download
</span>

<div className="flex justify-center my-2">
  <div className="flex items-center border rounded-lg px-1 py-1 space-x-1 mx-2">
    <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-4 md:w-5" />
    <div className="text-left">
      <p className="text-xs text-gray-200">Download on</p>
      <p className="text-xxs md:text-xs">Google Play Store</p>
    </div>
  </div>
  <div className="flex items-center border rounded-lg px-1 py-1 space-x-1 mx-2">
    <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-4 md:w-5" />
    <div className="text-left">
      <p className="text-xs text-gray-200">Download on</p>
      <p className="text-xxs md:text-xs">Apple Store</p>
    </div>
  </div>
</div>




          
          <p className="text-base font-bold tracking-wide text-white">
            Social media

              <div className="flex items-center mt-1 space-x-3">
            <a
              href="/"
              className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
          </div>
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="flex items-center flex-grow justify-center text-sm text-white">
          © Copyright 2020 Lorem Inc. All rights reserved.
        </p>
      </div>
    </div>
    </div>
    </>
  );
};
        
   