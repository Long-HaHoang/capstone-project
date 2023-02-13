import { useRouter } from "next/router";
import useStore from "@/hooks/useStore";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [session, updatePosition, updateRole, updateSession, resetSession] =
    useStore((state) => [
      state.session,
      state.updatePosition,
      state.updateRole,
      state.updateSession,
      state.resetSession,
    ]);

  function handleLoginButton(role) {
    updatePosition("/");
    updateRole(role);
    updateSession(true);
    router.push("/");
  }

  function handleLogoutButton() {
    updateRole("guest");
    router.push("/Login");
    resetSession();
  }

  if (session) {
    return (
      <>
        <h2>Logout Page</h2>
        <button type="button" onClick={handleLogoutButton}>
          Logout
        </button>
      </>
    );
  } else {
    return (
      <>
        <Link href={"/LandingPage"}>Back to Landing Page</Link>
        <form>
          <fieldset>
            <legend>Login as seller</legend>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" required />
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" id="password" required />
          </fieldset>
        </form>
      </>
    );
  }
}
