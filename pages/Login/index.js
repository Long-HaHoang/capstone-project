import { useRouter } from "next/router";
import useStore from "@/hooks/useStore";

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

  //   updatePosition("/Login");
  console.log(session);

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
        <h2>Login Page</h2>
        <button type="button" onClick={() => handleLoginButton("buyer")}>
          Buyer
        </button>
        <button type="button" onClick={() => handleLoginButton("seller")}>
          Seller
        </button>
      </>
    );
  }
}
