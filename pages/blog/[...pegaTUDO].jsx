import { useRouter } from "next/dist/client/router"
// pega tudo DEPOIS do "/"...!!! <== LEMBRAR
export default function BlogPostsPage() {
  const router = useRouter()
  console.log(router.query);
  return (
    <div>
      <h1>Os posts do blog</h1>
    </div>
  )
}