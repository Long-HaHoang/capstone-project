import styled from "styled-components";

import Gallery from "@/components/Gallery";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Link href={"/Login"}>To Login Page</Link>
      <Gallery />
    </>
  );
}
