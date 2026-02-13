"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-[#f7b6c2] flex flex-col items-center justify-center px-4">
      <div className="mb-8">
        <Image
          src="/firstPage.gif"
          alt="love gif"
          width={240}
          height={240}
          priority
          className="drop-shadow-xl"
        />
      </div>
      <h1 className="text-center text-5xl md:text-6xl font-extrabold text-red-700 leading-tight drop-shadow-md">
        Сайн уу, Исмайл💞
        <br />
        Миний Валентин болох уу?
      </h1>
      <p className="text-center text-xl md:text-2xl font-semibold text-red-600 mt-4 drop-shadow-sm">
        хайрт Tолкон-оос нь 💞
      </p>
      <div className="flex gap-8 mt-12 flex-wrap justify-center">
        <Button
          className="
            bg-[#f8a5a5]
            hover:bg-[#f48b8b]
            text-black
            text-2xl
            font-extrabold
            tracking-wide
            px-12
            py-7
            rounded-full
            border-2
            border-black
            shadow-[0_8px_0px_rgba(0,0,0,0.45)]
            hover:shadow-[0_5px_0px_rgba(0,0,0,0.45)]
            hover:translate-y-[3px]
            transition-all
          "
          onClick={() => router.push("/yesOfCourse")}
        >
          ТИЙМ ЭЭ, МЭДЭЭЖ
        </Button>
        <Button
          className="
            bg-white
            hover:bg-gray-100
            text-black
            text-2xl
            font-extrabold
            tracking-wide
            px-12
            py-7
            rounded-full
            border-2
            border-black
            shadow-[0_8px_0px_rgba(0,0,0,0.45)]
            hover:shadow-[0_5px_0px_rgba(0,0,0,0.45)]
            hover:translate-y-[3px]
            transition-all
          "
          onClick={() => router.push("/noThanks")}
        >
          ҮГҮЙ ЭЭ, БАЯРЛАЛАА
        </Button>
      </div>
    </main>
  );
}
