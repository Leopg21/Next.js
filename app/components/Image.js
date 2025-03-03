// Image.js
import Image from 'next/image';
export default function ImageComponent({ src, alt }) {
    return <Image className="rounded-lg shadow-md" src={src} alt={alt} />;
  }
