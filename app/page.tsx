import RandomFox from "@/app/components/RandomFox";

const random = () => Math.floor(Math.random() * 123) + 1;

export default function Home() {
  return (
    <div>
      <main>
        <h1 className="text-3xl font-bold underline">Hello React with TS</h1>
        <RandomFox image={`http://randomfox.ca/images/${random()}.jpg`} />
      </main>

      <footer></footer>
    </div>
  );
}
