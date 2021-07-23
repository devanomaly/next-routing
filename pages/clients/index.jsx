import Link from "next/dist/client/link"
const ClientsPage = () => {
  return (
    <div>
      <h1>Página dos Clientes</h1>
      <ul>
        <li>
          <Link href="/clients/eu">Eu</Link>
        </li>
      </ul>
    </div>
  )
}
export default ClientsPage