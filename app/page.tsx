"use client";
import { useState, useEffect } from "react";
import RandomFox from "@/app/components/RandomFox";

const random = () => Math.floor(Math.random() * 123) + 1;
const generateId = () => crypto.randomUUID();

type ImageItem = { id: string; url: string };

export default function Home() {
  const [images, setImages] = useState<ImageItem[]>([]);

  useEffect(() => {
    setImages([
      {
        id: generateId(),
        url: `http://randomfox.ca/images/${random()}.jpg`,
      },
      {
        id: generateId(),
        url: `http://randomfox.ca/images/${random()}.jpg`,
      },
      {
        id: generateId(),
        url: `http://randomfox.ca/images/${random()}.jpg`,
      },
      {
        id: generateId(),
        url: `http://randomfox.ca/images/${random()}.jpg`,
      },
    ]);
  }, []);

  return (
    <div>
      <main>
        <h1 className="text-3xl font-bold underline">Hello React with TS</h1>
        {images.map(({ id, url }) => (
          <div key={id} className="p-4">
            <RandomFox image={url} />
          </div>
        ))}
      </main>

      <footer></footer>
    </div>
  );
}
