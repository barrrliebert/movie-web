"use client";
import { useParams } from 'next/navigation';
import { useGetDetailMovie } from '@/hooks/useMovies';
import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function MovieDetailPage() {
const params = useParams();
const movieId = params.id;
const movieData = useGetDetailMovie(movieId);

const [sortBy, setSortBy] = useState("all");

if (!movieData) {
return <p>Loading...</p>;
}

return (
<main className="container mx-auto mt-10 relative">

    <div className="relative w-full px-[5rem] lg:px-[10rem] py-[5rem] h-max text-left text-17xl text-white font-roboto bg-cover "
        style={{ backgroundImage: 'url(https://collider.com/wp-content/uploads/the-avengers-movie-poster-banners-04.jpg)' }}>

        <div className="flex flex-col items-start justify-center">
            <div className=" text-[30px] sm:text-[50px] lg:text-[70px] font-black w-[70%]">
                {movieData.title}
            </div>

            <div className="flex items-center justify-center space-x-5 mt-[3rem] lg:mt-[8rem]">
                <div className="flex">
                    <AiFillStar className="text-yellow-500 w-14 h-14" />
                <AiFillStar className="text-yellow-500 w-14 h-14" />
                <AiFillStar className="text-yellow-500 w-14 h-14" />
                <AiFillStar className="text-yellow-500 w-14 h-14" />
                <AiFillStar className="text-yellow-500 w-14 h-14" />
                </div>

                <h5 className=" sm:text-normal text-sm font-medium mt-2">
                    2200 reviews
                </h5>
            </div>

            <p className="m-0 break-words w-20rem sm:w-[40rem] mt-5 sm:text-normal text-sm">
                {movieData.overview}
            </p>

            <div className="flex sm:flex-row flex-col space-y-3 sm:space-y-0 sm:space-x-5 mt-[5rem]">
                <button
                    className="sm:py-3 py-2 sm:px-10 px-5 bg-red-500 w-max text-white text-lg sm:text-2xl font-black rounded-md hover:bg-red-700">
                    Watch Trailer
                </button>
                <button
                    className="sm:py-3 py-2 sm:px-10 px-5 bg-transparent w-max text-white text-lg sm:text-2xl font-bold rounded-md border border-white hover:bg-gray-500 hover:text-white">
                    Add to Watchlist
                </button>

            </div>
        </div>

    </div>
    <div className="flex flex-col justify-between max-h-screen p-10">
        <div>
            <div className="flex flex-col lg:flex-row items-center">
                <div className="flex space-x-2">
                    <button className={`px-6 py-2 rounded-full hover:bg-red-500 hover:text-white ${sortBy==="all"
                        ? 'bg-red-500 text-white' : 'bg-white text-gray-500' }`} onClick={()=> setSortBy("all")}
                        >
                        Overview
                    </button>
                    <button className={`px-6 py-2 rounded-full hover:bg-red-500 hover:text-white
                        ${sortBy==="popularity.desc" ? 'bg-red-500 text-white' : 'bg-white text-gray-500' }`}
                        onClick={()=> setSortBy("popularity.desc")}
                        >
                        Characters
                    </button>
                    <button className={`px-6 py-2 rounded-full hover:bg-red-500 hover:text-white
                        ${sortBy==="popularity.sc" ? 'bg-red-500 text-white' : 'bg-white text-gray-500' }`}
                        onClick={()=> setSortBy("popularity.sc")}
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

                <div className="flex justify-center gap-32   mt-10"></div>
            </div>
        </div>
    </div>

</main>
);
}
