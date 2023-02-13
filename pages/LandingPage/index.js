import styled from "styled-components";
import { useRouter } from "next/router";
import useStore from "@/hooks/useStore";
import Link from "next/link";

export default function LandingPage() {
  const router = useRouter();
  const [updateSession, updateRole, updatePosition] = useStore((state) => [
    state.updateSession,
    state.updateRole,
    state.updatePosition,
  ]);

  function handleGuest() {
    updateSession(true);
    updateRole("buyer");
    router.push("/");
  }

  function handleSeller() {
    updateRole("seller");
    router.push("/Login");
  }

  return (
    <>
      <button type="button" onClick={handleGuest}>
        Use the app as guest
      </button>
      <button type="button" onClick={handleSeller}>
        Login as a seller
      </button>
    </>
  );
}
