import { useRouter } from "next/router";

export default function DetailsPage() {
  const router = useRouter();

  return (
    <>
      <button type="button" onClick={() => router.back()}>
        back
      </button>
      <h2>Welcome to the details page</h2>
    </>
  );
}
