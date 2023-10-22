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

export default function ListMovie() {
    const [sortBy, setSortBy] = useState('popularity.desc')
    const params = useSearchParams()
    const data = useGetMovies(sortBy, params.get('page'))
    const [page, setPage] = useState(1);

    useEffect(() => {
        const pageParam = parseInt(params.get('page')) || 1;
        setPage(pageParam);
      }, [params.get('page')]);

    return (
        <>
         <Carousel
      showArrows={true}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      selectedItem={1} // Adjust the initial selected item as needed
      centerMode={true}
      centerSlidePercentage={33}
      className="max-w-screen-xl mx-auto"
    >
      {data?.results?.map((item, index) => (
        <Link href={`/movie/${item.id}`} key={item.id}>
          <Card
            image={item.poster_path}
            className="bg-white p-4 shadow-md rounded-lg"
            
          />
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
    <li>
      <BsArrowLeft size={30} />
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
    <li>
      <BsArrowRight size={30} />
    </li>
  </ul>
</div>


    <div className="flex justify-center gap-32   mt-10">

    </div>

<div class="bg-black">
  <div class="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl md:px-24 lg:px-8">
    <div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
      <div class="sm:col-span-2">
        <div class="space-y-4 text-base mt-4 lg:max-w-sm">
  
    <AiFillYoutube className="text-red-500 w-20 h-20" />
    <p class="text-sm text-white font-light w-80">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.printing and typesetting industry. Lorem Ipsum has been the industry's standard
    </p>
  </div>
</div>


    <div class="space-y-3 text-base "> 
  <p class="mr-1 text-white">Tentang Kami</p>
  <div class="flex">
    <p class="mr-1 text-white">Blog</p>
  </div>
  <div class="flex">
    <p class="mr-1 text-white">Layanan</p>
  </div>
  <div class="flex">
    <p class="mr-1 text-white">Karir</p>
  </div>
  <div class="flex">
    <p class="mr-1 text-white">Pusat Media</p>
  </div>
</div>


<div>
  <span class="text-base font-bold tracking-wide text-white">Download</span>
  <div class="flex items-center mt-1 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end">
    <button class="inline-flex items-center px-4 py-3 rounded-lg bg-gray-600 text-gray-50">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current w-8 h-8 text-gray-50">
        <path d="M 5.4160156 2.328125 L 12.935547 10.158203 C 13.132547 10.363203 13.45925 10.363203 13.65625 10.158203 L 15.179688 8.5742188 C 15.405688 8.3392188 15.354312 7.956875 15.070312 7.796875 C 11.137313 5.571875 6.2620156 2.811125 5.4160156 2.328125 z M 3.140625 2.8476562 C 3.055625 3.0456562 3 3.2629063 3 3.5039062 L 3 20.591797 C 3 20.788797 3.044375 20.970625 3.109375 21.140625 L 11.576172 12.324219 C 11.762172 12.131219 11.762172 11.826813 11.576172 11.632812 L 3.140625 2.8476562 z"></path>
      </svg>
      <span class="flex flex-col items-start ml-4 leading-none">
        <span class="mb-1 text-xs">GET IT ON</span>
        <span class="font-semibold title-font">Google Play</span>
      </span>
    </button>
    <button class="inline-flex items-center px-4 py-3 rounded-lg bg-gray-600 text-gray-50 mt-4 sm:mt-0">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" class="fill-current w-8 h-8 text-gray-50">
        <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
      </svg>
      <span class="flex flex-col items-start ml-4 leading-none">
        <span class="mb-1 text-xs">GET IT ON</span>
        <span class="font-semibold title-font">App Store</span>
      </span>
    </button>
  </div>

    

      <span class="text-base font-bold tracking-wide text-white">Social Media</span>
      <div class="flex items-center mt-1 space-x-3">
        <a href="/" class="text-white transition-colors duration-300 hover:text-deep-purple-accent-400">
          <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
            <path
              d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
            ></path>
          </svg>
        </a>
        <a href="/" class="text-white transition-colors duration-300 hover:text-deep-purple-accent-400">
          <svg viewBox="0 0 30 30" fill="currentColor" class="h-6">
            <circle cx="15" cy="15" r="4"></circle>
            <path
              d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
            ></path>
          </svg>
        </a>
        <a href="/" class="text-white transition-colors duration-300 hover:text-deep-purple-accent-400">
          <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
            <path
              d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
  </div>
  <div class="flex items-center justify-center pt-5 pb-10 border-t lg:flex-row bg-black">
  <p class="text-sm text-white">
    Copyright © .  All Rights Reserved
  </p>
</div>
</div>
        </>
    )
}