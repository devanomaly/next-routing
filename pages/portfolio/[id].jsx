import { useRouter, withRouter } from "next/dist/client/router"

export default function PortfolioIdPage() {
  const router = useRouter()

  console.log(router.pathname); // vai dar o nome da pasta
  console.log(router.query); // fornece o que passamos de fato na query (url)

  return (
    <div>
      <h1> Bota o que quiser ae parça, eu não arredo o pé... <br /> a não ser que seja 'list'</h1>
    </div>
  )
}