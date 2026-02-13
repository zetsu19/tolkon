"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";

export default function ReasonsPage() {
  const router = useRouter();
  const loveNotes = [
    "Над руу хардаг харцанд чинь.",
    "Намайг харамладаг зан чанар.",
    "Хөөрхөн хөөрхөн зүйл ярьдагт нь хайртай.",
    "Зарим галзуу бодлууд чинь.",
    "Дулаахан инээмсэглэл.",
    "Чиний минь гүн нүд.",
  ];

  return (
    <div className="min-h-screen bg-[#fbc2eb] flex flex-col items-center justify-center p-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className={`absolute text-pink-400 opacity-40 animate-pulse`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 20}px`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      <div className="bg-white w-full max-w-xl rounded-lg shadow-[20px_20px_60px_rgba(0,0,0,0.1)] relative mb-8">
        <div className="flex justify-around px-12 pt-6">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className="w-3 h-3 bg-[#e5e7eb] rounded-full shadow-inner border border-gray-300"></div>
              <div className="w-1 h-6 bg-gradient-to-b from-gray-400 to-transparent opacity-20"></div>
            </div>
          ))}
        </div>

        <div className="relative px-6 pb-16 pt-4 min-h-[550px] overflow-hidden">
          <div className="absolute left-14 top-0 bottom-0 w-[2px] bg-red-200"></div>
          <div className="absolute inset-0 pt-[72px] flex flex-col pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="h-[52px] border-b border-blue-100 mx-4"
              ></div>
            ))}
          </div>
          <div className="relative z-10 pl-12 flex flex-col pt-4">
            {loveNotes.map((note, index) => (
              <div
                key={index}
                className="h-[52px] flex items-center group transition-transform hover:translate-x-1"
              >
                <span className="text-pink-500 mr-4 text-sm opacity-80 group-hover:scale-125 transition-transform">
                  ❤
                </span>
                <p className="text-gray-800 text-lg md:text-xl font-medium italic tracking-tight">
                  {note}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/lined-paper.png')] opacity-30"></div>
      </div>
      <div className="bg-white p-6 md:p-10 rounded-3xl shadow-2xl flex flex-col items-center gap-6 max-w-sm w-full mb-8">
        <Image
          src="/sassyGirl.jpg"
          alt="My Sassy Girl Poster"
          height={450}
          width={300}
          className="rounded-xl object-cover"
        />
        <h2 className="text-3xl font-extrabold text-pink-600 text-center">
          My Sassy Girl 💖
        </h2>
        <h2 className="text-3xl font-extrabold text-pink-600 text-center">
          Заавал үзий шүү 💖
        </h2>
        <a
          href="https://www.youtube.com/results?search_query=My+Sassy+Girl+trailer"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-pink-400 hover:bg-pink-500 text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg transition-all"
        >
          Watch Trailer 🎥
        </a>
      </div>
      <button
        className="fixed bottom-8 right-8 bg-[#c92a2a] text-white px-6 py-2 rounded-full font-bold shadow-lg hover:bg-red-700 transition-colors"
        onClick={() => router.push("/yesOfCourse")}
      >
        Буцах ←
      </button>
    </div>
  );
}
