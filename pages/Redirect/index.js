import { useEffect } from "react";
import { useRouter } from "next/router";
import useStore from "@/hooks/useStore";

import LoadingCube from "@/components/LoadingCube";

export default function RedirectPage() {
  const router = useRouter();
  const [position] = useStore((state) => [state.position]);

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push(`/${position}`);
    }, 600);
    return () => clearTimeout(timer);
  });

  return (
    <>
      <h2>Redirecting...</h2>
      <LoadingCube />
    </>
  );
}
