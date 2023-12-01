import { imageUrl } from "@/lib/api";
import { AiTwotoneStar } from 'react-icons/ai';

export default function Card({
    image,
    title,
    overview
}) {
    return (
        <div className="flex flex-col max-w-xs md:max-w-md lg:max-w-lg bg-white m-2 shadow-md">
            <img className="rounded-t-md" src="bali.png" />
            <div className="p-4">
                <h3 className="font-semibold text-lg text-center md:text-left">{title}</h3>
                <div className="mt-2">
                    <p className="text-sm overflow-hidden line-clamp-2">{overview}</p>
                </div>
                <p className="flex items-center justify-center md:justify-start mt-2 text-red-600">
                Rp 2.000.000 
                <p className="text-sm text-black">/ Orang </p>
                    <AiTwotoneStar className="text-yellow-800 ml-20" />
                </p>
                <button className="bg-red-500 text-white w-full py-2 mt-2 hover:bg-red-700 transition duration-300 ease-in-out">
            Pesan Sekarang
        </button>
            </div>
        </div>
    );
}
