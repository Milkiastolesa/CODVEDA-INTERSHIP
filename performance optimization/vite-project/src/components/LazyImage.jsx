export default function LazyImage({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      width="400"
      height="300"
      style={{ borderRadius: "8px" }}
    />
  );
}
