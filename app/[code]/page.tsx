import Image from "next/image";

type PageProps = {
  params: { code: string };
};

export default function PublicProfile({ params }: PageProps) {
  const data = {
    nome: "João da Silva",
    idade: 42,
    cidade: "Belém",
    estado: "PA",
    tipoSanguineo: "O+",
    comorbidades: "Hipertensão",
    medicamentos: "Losartana 50mg",
    observacoes: "Alergia à dipirona",
  };

  return (
    <main className="container">
      <header className="header">
        <h1>Perfil Médico</h1>
        <span className="badge">Emergência</span>
      </header>

      <section className="card destaque">
        <h2>{data.nome}</h2>
        <p className="idade">{data.idade} anos</p>
        <p className="local">
          {data.cidade} / {data.estado}
        </p>
        <div className="sangue">{data.tipoSanguineo}</div>
      </section>

      <section className="card">
        <h3>Condições Médicas</h3>
        <p><strong>Comorbidades:</strong> {data.comorbidades}</p>
        <p><strong>Medicamentos:</strong> {data.medicamentos}</p>
      </section>

      <section className="card alerta">
        <h3>Observações Importantes</h3>
        <p>{data.observacoes}</p>
      </section>

      <footer className="footer">
        <p>Código QR: {params.code}</p>
        <small>Informações fornecidas pelo paciente</small>
      </footer>
    </main>
  );
}
