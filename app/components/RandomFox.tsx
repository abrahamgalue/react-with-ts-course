import { useRef, useEffect, useState } from "react";
import type { ImgHTMLAttributes } from "react";

type lazyImageProps = {
  src: string;
  alt: string;
};

type ImageNativeTypes = ImgHTMLAttributes<HTMLImageElement>;

type Props = lazyImageProps & ImageNativeTypes;

const LazyImage = ({ src, alt, ...imgProps }: Props) => {
  const [currentSrc, setCurrentSrc] = useState(
    "https://signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png"
  );
  const node = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // new observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // onIntersection
        if (entry.isIntersecting) {
          setCurrentSrc(src);
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
  }, [src]);

  return (
    <picture>
      <img alt={alt} ref={node} src={currentSrc} {...imgProps} />
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

export default LazyImage;
