import { useRef, useEffect, useState } from "react";

type Props = {
  image: string;
};

const RandomFox = ({ image }: Props) => {
  const [src, setSrc] = useState(
    "https://signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png"
  );
  const node = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // new observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // onIntersection
        if (entry.isIntersecting) {
          setSrc(image);
        }
      });
    });

    // observe node
    if (node.current) {
      observer.observe(node.current);
    }

    // disconnect
    return () => {
      observer.disconnect();
    };
  }, [image]);

  return (
    <picture>
      <img
        alt="random fox image"
        className="rounded bg-gray-300"
        height="auto"
        ref={node}
        src={src}
        width={320}
      />
    </picture>
  );
};

// const RandomFox = (): JSX.Element => {
//   return <img />
// }

// const RandomFox: FunctionComponent = () => {
//   return <img />
// }

// const RandomFox: FC = () => {
//   return <img />
// }

export default RandomFox;
