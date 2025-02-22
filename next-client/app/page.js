import HeroSection from "@/components/Sections/HeroSection";
import CatogaryListing from "@/components/Sections/HomeCatogary/CatogaryListing";
import ProductListing from "@/components/Sections/HomeProductListing/ProductListing";
import Image from "next/image";

export default function Home() {
  return (
    <>
   <HeroSection/>
   <CatogaryListing/>
   <ProductListing/>
    </>
  );
}
