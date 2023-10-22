import { imageUrl } from "@/lib/api";
import Image from "next/image";
import { AiTwotoneStar } from 'react-icons/ai';

export default function Card({
    image,
    title,
    popularity,
    overview
}) {
    return (
        <div className="flex flex-col max-w-xs md:max-w-md lg:max-w-lg rounded-md bg-gray-200 m-2">
            <Image className="rounded-t-md" src={imageUrl + image} alt={title} priority width={500} height={500} />
            <div className="p-4">
                <h3 className="font-semibold text-lg text-center md:text-left">{title}</h3>
                <div className="mt-2">
                    <p className="text-sm overflow-hidden line-clamp-2">{overview}</p>
                </div>
                <p className="flex items-center justify-center md:justify-start mt-2"><AiTwotoneStar /> {popularity}</p>
            </div>
        </div>
    );
}
