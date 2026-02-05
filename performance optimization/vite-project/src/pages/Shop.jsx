import LazyImage from "../components/LazyImage";

export default function Shop() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Shop Page</h1>

      <LazyImage
        src="/images/hero.webp"
        alt="Optimized product"
      />
    </div>
  );
}
