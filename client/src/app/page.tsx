import { Suspense } from "react";
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense
        fallback={<div className="text-4xl text-white">loading...</div>}
      >
        <Hero />
      </Suspense>
    </main>
  );
}
