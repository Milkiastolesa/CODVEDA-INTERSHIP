import { lazy, Suspense } from "react";

const Shop = lazy(() => import("./pages/Shop"));

export default function App() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Shop />
    </Suspense>
  );
}
