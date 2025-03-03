// Image.js
export default function ImageComponent({ src, alt }) {
    return <img className="rounded-lg shadow-md" src={src} alt={alt} />;
  }