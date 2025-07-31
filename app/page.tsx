"use client";
import { useState } from "react";
import type { MouseEventHandler } from "react";
import LazyImage from "@/app/components/RandomFox";

const random = () => Math.floor(Math.random() * 123) + 1;
const generateId = () => crypto.randomUUID();

export default function Home() {
  const [images, setImages] = useState<IFoxImageItem[]>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();

    const newImageItem: IFoxImageItem = {
      id: generateId(),
      url: `https://randomfox.ca/images/${random()}.jpg`,
    };

    setImages([...images, newImageItem]);
  };

  return (
    <div>
      <main>
        <h1 className="text-3xl font-bold underline">Hello React with TS</h1>
        <button onClick={addNewFox}>Add new fox</button>
        {images.map(({ id, url }) => (
          <div key={id} className="p-4">
            <LazyImage
              alt="random fox image"
              className="rounded bg-gray-300"
              height="auto"
              onClick={() => console.log("Hello image")}
              src={url}
              width={320}
            />
          </div>
        ))}
      </main>

      <footer></footer>
    </div>
  );
}
