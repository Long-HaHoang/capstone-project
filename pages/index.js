import styled from "styled-components";

import Gallery from "@/components/Gallery";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";
import useStore from "@/hooks/useStore";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function HomePage() {
  const router = useRouter();
  const [session] = useStore((state) => [state.session]);

  useEffect(() => {
    !session && router.push("/Login");
  }, [router, session]);
  if (session) {
    return (
      <>
        <HeroSection />
        <Link href={"/Login"}>To Login Page</Link>
        <Gallery />
      </>
    );
  }
}
