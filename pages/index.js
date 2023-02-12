import styled from "styled-components";

import Gallery from "@/components/Gallery";
import HeroSection from "@/components/HeroSection";
import useStore from "@/hooks/useStore";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();
  const [session] = useStore((state) => [state.session]);

  if (session) {
    return (
      <>
        <HeroSection />
        <Gallery />
      </>
    );
  }
}
