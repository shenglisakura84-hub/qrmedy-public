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

    // OPCIONAIS
    foto: "/foto-paciente.jpg", // coloque a foto em /public
    documentos: [
      { nome: "Laudo Médico", url: "/documento.pdf" },
    ],
  };

  return (
    <main className="container">
      {/* TOPO COM LOGO */}
      <header className="header">
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Image src="/logo.png" alt="QRMedy" width={32} height={32} />
          <strong>QRMEDY</strong>
        </div>
        <span className="badge">Emergência</span>
      </header>

      {/* PERFIL */}
      <section className="card destaque">
        {data.foto && (
          <Image
            src={data.foto}
            alt={data.nome}
            width={100}
            height={100}
            style={{ borderRadius: "50%", marginBottom: 8 }}
          />
        )}

        <h2>{data.nome}</h2>
        <p className="idade">{data.idade} anos</p>
        <p className="local">
          {data.cidade} / {data.estado}
        </p>

        <div className="sangue">{data.tipoSanguineo}</div>
      </section>

      {/* CONDIÇÕES */}
      <section className="card">
        <h3>Condições Médicas</h3>
        <p><strong>Comorbidades:</strong> {data.comorbidades}</p>
        <p><strong>Medicamentos:</strong> {data.medicamentos}</p>
      </section>

      {/* OBSERVAÇÕES */}
      <section className="card alerta">
        <h3>Observações Importantes</h3>
        <p>{data.observacoes}</p>
      </section>

      {/* DOCUMENTOS */}
      {data.documentos.length > 0 && (
        <section className="card">
          <h3>Documentos Anexados</h3>
          <ul>
            {data.documentos.map((doc, index) => (
              <li key={index}>
                📄 <a href={doc.url} target="_blank">{doc.nome}</a>
              </li>
            ))}
          </ul>
        </section>
      )}

      <footer className="footer">
        <p>Código QR: {params.code}</p>
        <small>Informações fornecidas pelo paciente</small>
      </footer>
    </main>
  );
}
