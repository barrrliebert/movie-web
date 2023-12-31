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
if (page < maxPages) { setPage(page + 1); } }; return ( <>
  {data?.results && data.results.length >= 3 && (
  <Carousel showArrows={true} showStatus={false} showThumbs={false} infiniteLoop={true} centerMode={true}
    centerSlidePercentage={100} className="max-w-screen-2xl mx-auto" style={{ width: "80%", margin: "0 auto" }}>
    {data?.results?.reduce((slideGroups, item, index) => {
    if (index % 3 === 0) {
    slideGroups.push([]);
    }
    slideGroups[slideGroups.length - 1].push(item);
    return slideGroups;
    }, []).map((slide, slideIndex) => (
    <div key={slideIndex} className="max-w-screen-2xl mx-auto">
      <div className="banner-container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px" }}>
        {slide.map((subItem, subIndex) => (
        <Link href={`/movie/${subItem.id}`} key={subItem.id}>
        <div className="bg-white p-4 shadow-md rounded-lg">
          <div className="banner-wrapper">
            <img src={`https://image.tmdb.org/t/p/w500${subItem.poster_path}`} alt={subItem.title}
              className="w-full h-auto object-cover" />
          </div>
        </div>
        </Link>
        ))}
      </div>
    </div>
    ))}
  </Carousel>
  )}



  <h1 className="text-2xl font-bold mb-4 px-5">Browse by category</h1>
  <div className="w-full flex justify-between items-start space-x-3 overflow-x-scroll scrollbar">

    <div className="flex space-x-2">
      <button className={`px-6 py-2 rounded-full hover:bg-red-500 hover:text-white ${sortBy==="all"
        ? 'bg-red-500 text-white' : 'bg-white text-gray-500' }`} onClick={()=> setSortBy("all")}
        >
        All
      </button>
      <button className={`px-6 py-2 rounded-full hover:bg-red-500 hover:text-white ${sortBy==="popularity.desc"
        ? 'bg-red-500 text-white' : 'bg-white text-gray-500' }`} onClick={()=> setSortBy("popularity.desc")}
        >
        Anime
      </button>
      <button className={`px-6 py-2 rounded-full hover:bg-red-500 hover:text-white ${sortBy==="popularity.asc"
        ? 'bg-red-500 text-white' : 'bg-white text-gray-500' }`} onClick={()=> setSortBy("popularity.asc")}
        >
        Action
      </button>
      <button className={`px-6 py-2 rounded-full hover:bg-red-500 hover:text-white ${sortBy==="revenue.asc"
        ? 'bg-red-500 text-white' : 'bg-white text-gray-500' }`} onClick={()=> setSortBy("revenue.asc")}
        >
        Adventure
      </button>
      <button className={`px-6 py-2 rounded-full hover:bg-red-500 hover:text-white ${sortBy==="revenue.desc"
        ? 'bg-red-500 text-white' : 'bg-white text-gray-500' }`} onClick={()=> setSortBy("revenue.desc")}
        >
        Science fiction
      </button>
      <button className={`px-6 py-2 rounded-full hover:bg-red-500 hover:text-white ${sortBy==="revenue.sc"
        ? 'bg-red-500 text-white' : 'bg-white text-gray-500' }`} onClick={()=> setSortBy("revenue.sc")}
        >
        Comedy
      </button>
    </div>

  </div>
  <div className="flex items-center justify-center mt-10">
    <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-5">
      {data?.results?.map((item, index) => (
      <Link href={`/movie/${item.id}`} key={item.id}>
      <Card image={item.poster_path} overview={item.overview} id={item.id} popularity={item.popularity}
        title={item.title} />
      </Link>
      ))}
    </div>
  </div>
  <div className="flex justify-center mt-10">
    <ul className="flex items-center gap-4 sm:gap-28">
      <li>
        <Link href={`/?page=${page - 1}`}>
        <BsArrowLeft size={50} />
        </Link>
      </li>

      <li>
        <Link href="/?page=1">
        <span className={`text-2xl sm:text-4xl hover:text-white hover:bg-red-500 hover:transform hover:scale-105
          ${page===1 ? 'bg-red-500 text-white' : 'bg-white text-gray-500' }`}>1</span>
        </Link>
      </li>
      <li>
        <Link href="/?page=2">
        <span className={`text-2xl sm:text-4xl hover:text-white hover:bg-red-500 ${page===2 ? 'bg-red-500 text-white'
          : 'bg-white text-gray-500' }`}>2</span>
        </Link>
      </li>
      <li>
        <Link href="/?page=3">
        <span className={`text-2xl sm:text-4xl hover:text-white hover:bg-red-500 ${page===3 ? 'bg-red-500 text-white'
          : 'bg-white text-gray-500' }`}>3</span>
        </Link>
      </li>
      <li>
        <Link href="/?page=4">
        <span className={`text-2xl sm:text-4xl hover:text-white hover:bg-red-500 ${page===4 ? 'bg-red-500 text-white'
          : 'bg-white text-gray-500' }`}>4</span>
        </Link>
      </li>
      <li>
        <Link href="/?page=5">
        <span className={`text-2xl sm:text-4xl hover:text-white hover:bg-red-500 ${page===5 ? 'bg-red-500 text-white'
          : 'bg-white text-gray-500' }`}>5</span>
        </Link>
      </li>
      <li>
        <Link href="/?page=6">
        <span className={`text-2xl sm:text-4xl hover:text-white hover:bg-red-500 hover:transform hover:scale-105
          ${page===6 ? 'bg-red-500 text-white' : 'bg-white text-gray-500' }`}>6</span>
        </Link>
      </li>
      <li>
        <Link href={`/?page=${page + 1}`}>
        <BsArrowRight size={50} />
        </Link>
      </li>
    </ul>
  </div>

  <div className="flex justify-center gap-32   mt-10">
  </div>
</>
);
};