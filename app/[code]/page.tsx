interface PageProps {
  params: Promise<{ code: string }>
}

export default async function PublicProfilePage({ params }: PageProps) {
  const { code } = await params

  const perfil = {
    nome: "João da Silva",
    idade: 42,
    cidade: "Belém",
    estado: "PA",
    tipoSanguineo: "O+",
    comorbidades: "Hipertensão",
    medicamentos: "Losartana 50mg",
    observacoes: "Alergia a dipirona"
  }

  return (
    <main style={{ padding: 24, fontFamily: "Arial" }}>
      <h1>Perfil Médico</h1>

      <p><strong>Nome:</strong> {perfil.nome}</p>
      <p><strong>Idade:</strong> {perfil.idade} anos</p>
      <p><strong>Localidade:</strong> {perfil.cidade} / {perfil.estado}</p>
      <p><strong>Tipo sanguíneo:</strong> {perfil.tipoSanguineo}</p>
      <p><strong>Comorbidades:</strong> {perfil.comorbidades}</p>
      <p><strong>Medicamentos:</strong> {perfil.medicamentos}</p>
      <p><strong>Observações:</strong> {perfil.observacoes}</p>

      <hr />
      <p><strong>Código:</strong> {code}</p>
    </main>
  )
}