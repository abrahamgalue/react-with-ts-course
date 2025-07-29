"use client";
import { useState, useEffect } from "react";
import RandomFox from "@/app/components/RandomFox";

const random = () => Math.floor(Math.random() * 123) + 1;

export default function Home() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    setImages([
      `http://randomfox.ca/images/${random()}.jpg`,
      `http://randomfox.ca/images/${random()}.jpg`,
      `http://randomfox.ca/images/${random()}.jpg`,
      `http://randomfox.ca/images/${random()}.jpg`,
    ]);
  }, []);

  return (
    <div>
      <main>
        <h1 className="text-3xl font-bold underline">Hello React with TS</h1>
        {images.map((image, index) => (
          <div key={index} className="p-4">
            <RandomFox image={image} />
          </div>
        ))}
      </main>

      <footer></footer>
    </div>
  );
}
