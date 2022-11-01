import { useRouter } from "next/router";

export default function Show() {
  const router = useRouter();
  const { id } = router.query
  return <p>{id}</p>
}