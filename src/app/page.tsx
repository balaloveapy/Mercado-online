import React, { Suspense } from "react";
import { Footer } from "./page/footer";
import { Header } from "./page/header";
import { Skeletons } from "./page/skeleton";
import dynamic from "next/dynamic";
const ProductTab = dynamic(() => import('./page/tab'), {
  ssr: false, loading: () => <Skeletons />
})

export default function Home() {
  return (
    <div className="max-w-xs  md:max-w-5xl sm:max-w-2xl mx-auto gap-4">
      <Header />
      <div>
        <ProductTab />
      </div>
      <Footer />
    </div>
  );
}
