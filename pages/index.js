import styled from "styled-components";

import Gallery from "@/components/Gallery";
import HeroSection from "@/components/HeroSection";
import useStore from "@/hooks/useStore";

export default function HomePage() {
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
