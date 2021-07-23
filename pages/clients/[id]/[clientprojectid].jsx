import { useRouter } from "next/dist/client/router"
export default function SelectedClientProjectPage() {
  const router = useRouter()

  console.log(router.query);
  
  return (
    <div>
      <h1>Um determinado Projeto de um cliente selecionado</h1>
    </div>
  )
}