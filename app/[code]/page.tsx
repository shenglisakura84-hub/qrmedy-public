type PageProps = {
  params: { code: string };
};

type PublicProfileData = {
  nome: string;
  idade: number;
  cidade: string;
  estado: string;
  tipoSanguineo: string;
  comorbidades: string;
  medicamentos: string;
  observacoes: string;
  foto?: string;
  documentos?: { nome: string; url: string }[];
};

async function getPublicProfile(code: string): Promise<PublicProfileData | null> {
  try {
    const res = await fetch(
      `https://SEU-ENDPOINT-BASE44/public-profile?code=${code}`,
      { cache: "no-store" }
    );

    if (!res.ok) return null;

    return res.json();
  } catch {
    return null;
  }
}

export default async function PublicProfile({ params }: PageProps) {
  const data = await getPublicProfile(params.code);

  if (!data) {
    return (
      <main style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif"
      }}>
        <p>Perfil não encontrado ou desativado.</p>
      </main>
    );
  }

  return (
    <main style={{
      minHeight: "100vh",
      background: "#f5f6f8",
      display: "flex",
      justifyContent: "center",
      padding: 16
    }}>
      <div style={{ width: "100%", maxWidth: 420 }}>

        {/* HEADER */}
        <header style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <img src="/logo.png" width={32} alt="QRMEDY" />
            <strong>QRMEDY</strong>
          </div>
          <span style={{
            background: "#e53935",
            color: "#fff",
            padding: "4px 12px",
            borderRadius: 20,
            fontSize: 12
          }}>
            Emergência
          </span>
        </header>

        {/* PERFIL */}
        <section style={cardStyle}>
          {data.foto && (
            <img
              src={data.foto}
              alt={data.nome}
              style={{
                width: 96,
                height: 96,
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: 8
              }}
            />
          )}

          <h2>{data.nome}</h2>
          <p>{data.idade} anos</p>
          <p>{data.cidade} / {data.estado}</p>

          <div style={bloodStyle}>{data.tipoSanguineo}</div>
        </section>

        {/* ALERTA */}
        <section style={{ ...cardStyle, borderLeft: "4px solid #fb8c00" }}>
          <h3>⚠️ Alerta Médico</h3>
          <p>{data.observacoes}</p>
        </section>

        {/* CONDIÇÕES */}
        <section style={cardStyle}>
          <h3>Condições Médicas</h3>
          <p><strong>Comorbidades:</strong> {data.comorbidades}</p>
          <p><strong>Medicamentos:</strong> {data.medicamentos}</p>
        </section>

        {/* DOCUMENTOS */}
        {data.documentos && data.documentos.length > 0 && (
          <section style={cardStyle}>
            <h3>Documentos Anexados</h3>
            {data.documentos.map((doc, i) => (
              <p key={i}>
                📄 <a href={doc.url} target="_blank">{doc.nome}</a>
              </p>
            ))}
          </section>
        )}

        <footer style={{ textAlign: "center", fontSize: 12, opacity: 0.6 }}>
          <p>Código QR: {params.code}</p>
          <p>Informações fornecidas pelo paciente</p>
        </footer>
      </div>
    </main>
  );
}

const cardStyle = {
  background: "#fff",
  borderRadius: 12,
  padding: 16,
  marginBottom: 12,
  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
  textAlign: "center" as const
};

const bloodStyle = {
  marginTop: 8,
  display: "inline-block",
  background: "#e53935",
  color: "#fff",
  padding: "6px 16px",
  borderRadius: 20,
  fontWeight: "bold"
};
