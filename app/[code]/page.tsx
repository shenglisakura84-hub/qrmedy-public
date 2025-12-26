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

    foto: "/foto.jpg", // precisa estar em /public
    documentos: [
      { nome: "Laudo Médico", url: "/documento.pdf" },
    ],
  };

  return (
    <main style={pageStyle}>
      <div style={containerStyle}>

        {/* HEADER */}
        <header style={headerStyle}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <img src="/logo.png" alt="QRMEDY" style={{ width: 36 }} />
            <strong style={{ fontSize: 18 }}>QRMEDY</strong>
          </div>

          <span style={emergencyBadge}>Emergência</span>
        </header>

        {/* PERFIL PRINCIPAL */}
        <section style={profileCard}>
          <img
            src={data.foto}
            alt={data.nome}
            style={photoStyle}
          />

          <h1 style={nameStyle}>{data.nome}</h1>
          <p style={subtleText}>{data.idade} anos • {data.cidade}/{data.estado}</p>

          <div style={bloodType}>{data.tipoSanguineo}</div>
        </section>

        {/* ALERTA MÉDICO */}
        <section style={alertCard}>
          <h3 style={sectionTitle}>⚠️ Alerta Médico</h3>
          <p>{data.observacoes}</p>
        </section>

        {/* CONDIÇÕES */}
        <section style={cardStyle}>
          <h3 style={sectionTitle}>Condições Médicas</h3>
          <p><strong>Comorbidades:</strong> {data.comorbidades}</p>
          <p><strong>Medicamentos:</strong> {data.medicamentos}</p>
        </section>

        {/* DOCUMENTOS */}
        {data.documentos.length > 0 && (
          <section style={cardStyle}>
            <h3 style={sectionTitle}>Documentos Anexados</h3>
            {data.documentos.map((doc, i) => (
              <p key={i}>
                📄 <a href={doc.url} target="_blank">{doc.nome}</a>
              </p>
            ))}
          </section>
        )}

        {/* RODAPÉ */}
        <footer style={footerStyle}>
          <p>Código QR: {params.code}</p>
          <small>Informações fornecidas pelo paciente</small>
        </footer>

      </div>
    </main>
  );
}

/* ================= ESTILOS ================= */

const pageStyle = {
  minHeight: "100vh",
  background: "#f4f6f8",
  display: "flex",
  justifyContent: "center",
  padding: 16,
};

const containerStyle = {
  width: "100%",
  maxWidth: 420,
};

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 16,
};

const emergencyBadge = {
  background: "#e53935",
  color: "#fff",
  padding: "6px 14px",
  borderRadius: 20,
  fontSize: 12,
  fontWeight: "bold",
};

const profileCard = {
  background: "#fff",
  borderRadius: 16,
  padding: 20,
  textAlign: "center" as const,
  marginBottom: 14,
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
};

const photoStyle = {
  width: 96,
  height: 96,
  borderRadius: "50%",
  objectFit: "cover" as const,
  marginBottom: 10,
};

const nameStyle = {
  margin: 0,
  fontSize: 20,
  fontWeight: 700,
};

const subtleText = {
  fontSize: 14,
  color: "#666",
  marginTop: 4,
};

const bloodType = {
  marginTop: 10,
  display: "inline-block",
  background: "#e53935",
  color: "#fff",
  padding: "8px 20px",
  borderRadius: 24,
  fontSize: 18,
  fontWeight: "bold",
};

const cardStyle = {
  background: "#fff",
  borderRadius: 14,
  padding: 16,
  marginBottom: 12,
  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
};

const alertCard = {
  ...cardStyle,
  borderLeft: "5px solid #fb8c00",
};

const sectionTitle = {
  marginBottom: 6,
};

const footerStyle = {
  textAlign: "center" as const,
  fontSize: 12,
  opacity: 0.6,
  marginTop: 12,
};
