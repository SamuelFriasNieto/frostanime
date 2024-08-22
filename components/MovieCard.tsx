import React, { useEffect } from "react";
import { useState, useRef } from "react";

import { BsFillPlayFill } from "react-icons/bs";
import { FaDeaf } from "react-icons/fa";
import FavoroteButton from "./favoriteButton";

interface MovieCardProps {
    data: Record<string, any>;
}
const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
    const [showVideo, setShowVideo] = useState(false);
    const [showFadeIn, setFadeIn] = useState(false);
    const isHoveredRef = useRef(false);

    const handleMouseEnter = () => {
        isHoveredRef.current = true;

        setTimeout(() => {
            if (isHoveredRef.current) {
                setShowVideo(true);
            }
        }, 1500); // 2 segundos de retraso
    };

    const handleMouseLeave = () => {
        isHoveredRef.current = false;
        setShowVideo(false);
        setFadeIn(false);
    };

    useEffect(() => {
        if (showVideo) {
            setFadeIn(true)
            console.log(showFadeIn)
        }
    }, [showVideo])

    return (
        <div
            className="group bg-pink-950 col-span relative h-[12vw] rounded-md"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >

            <img
                className="cursor-pointer object-cover transition duration-300 shadow-xl rounded-md w-full h-[12vw]"
                src={data.thumbnail}
                alt=""
            />

            <div className="opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100">
                <img
                    className={`border-b-4 border-pink-600 cursor-pointer object-cover transition duration-300 shadow-xl rounded-t-md w-full h-[12vw] absolute ${showFadeIn ? 'opacity-0' : 'opacity-100'}`}
                    src={data.thumbnail}
                    alt=""
                />
                {showVideo ? (
                    <video autoPlay loop muted src={data.videoUrl} className={`border-b-4 border-pink-600 cursor-pointer object-cover transition duration-300 shadow-xl rounded-t-md w-full h-[12vw] ${showFadeIn ? 'opacity-100' : 'opacity-0'}`}></video>
                ) : (
                    <img
                        className="border-b-4 border-pink-600 cursor-pointer object-cover transition duration-300 shadow-xl rounded-t-md w-full h-[12vw]"
                        src={data.thumbnail}
                        alt=""
                    />
                )}

                <div className="z-10 bg-black p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
                    <div className="flex flex-row items-center gap-3">
                        <div className="flex cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full justify-center transition items-center hover:bg-pink-600" onClick={() => { }}>
                            <BsFillPlayFill size={30} />
                        </div>
                        <FavoroteButton movieId={data.id}/>
                    </div>
                    <p className="text-blue-500 font-semibold mt-4">New <span className="text-white">2023</span></p>
                    <div className="flex flex-row mt-4 gap-2 items-center">
                        <p className="text-white text-[10px] lg:text-sm">{data.duration}</p>
                    </div>
                    <div className="flex flex-row mt-4 gap-2 items-center">
                        <p className="text-white text-[10px] lg:text-sm">{data.genre}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
