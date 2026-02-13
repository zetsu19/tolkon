"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function MirrorPage() {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#ff7373] p-4 md:p-8 relative overflow-hidden">
      <Image
        src="/romantic-bg.jpg"
        alt="background"
        fill
        priority
        className="object-cover -z-20 opacity-40"
      />
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <span
            key={i}
            className="absolute text-white/50 text-2xl md:text-3xl heart"
            style={{
              left: `${(i * 7) % 100}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          >
            💞
          </span>
        ))}
      </div>
      <h1
        className={`text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold mb-12 md:mb-16 tracking-wide drop-shadow-lg text-center transition-all duration-1000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        Чамдаа зориулсан цэцэгс
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full max-w-6xl">
        {" "}
        <div
          className={`flex flex-col gap-8 md:gap-12 w-full md:w-1/4 transition-all duration-1000 delay-300 ${
            loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <Card className="bg-white/95 rounded-3xl p-6 md:p-12 text-center shadow-2xl">
            <p className="text-[#333] text-lg sm:text-xl md:text-2xl font-bold">
              Уулзаж чадахгүй байгаа ч сэтгэл минь үргэлж чамтай байдагшүү
            </p>
          </Card>
          <Card className="bg-white/95 rounded-3xl p-6 md:p-12 text-center shadow-2xl">
            <p className="text-[#333] text-lg sm:text-xl md:text-2xl font-bold">
              Чи бол миний амьдралын хамгийн чухал хэсэг
            </p>
          </Card>
        </div>
        <div
          className={`bg-[#ffb5b5] p-2 md:p-4 rounded-2xl md:rounded-[40px] shadow-2xl transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <div className="bg-white p-2 md:p-4 rounded-2xl md:rounded-[30px] overflow-hidden roseFloat">
            <Image
              src="/rose.png"
              alt="Rose"
              height={400}
              width={320}
              className="object-contain md:object-contain"
            />
          </div>
        </div>
        <div
          className={`flex flex-col gap-8 md:gap-12 w-full md:w-1/4 transition-all duration-1000 delay-700 ${
            loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <Card className="bg-white/95 rounded-3xl p-6 md:p-12 text-center shadow-2xl">
            <p className="text-[#333] text-lg sm:text-xl md:text-2xl font-bold">
              Чамайг санах мэдрэмж миний өдөр бүрийн аз жаргал
            </p>
          </Card>
          <Card className="bg-white/95 rounded-3xl p-6 md:p-12 text-center shadow-2xl">
            <p className="text-[#333] text-lg sm:text-xl md:text-2xl font-bold">
              Чамтайгаа уулзах өдрөө тэсэн ядан хүлээж байна
            </p>
          </Card>
        </div>
      </div>
      <button
        className="fixed bottom-8 right-8 bg-[#c92a2a] text-white px-6 py-2 rounded-full font-bold shadow-lg hover:bg-red-700 transition-colors"
        onClick={() => router.push("/yesOfCourse")}
      >
        Буцах ←
      </button>
    </main>
  );
}
