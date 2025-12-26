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
    foto: "/foto-paciente.jpg",
    documentos: [
      { nome: "Laudo Médico", url: "/documento.pdf" },
    ],
  };

  return (
    <main className="min-h-screen bg-gray-50 flex justify-center">
      <div className="w-full max-w-md p-4 space-y-4">

        {/* HEADER */}
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="QRMedy"
              width={32}
              height={32}
            />
            <strong className="text-lg">QRMEDY</strong>
          </div>
          <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full">
            Emergência
          </span>
        </header>

        {/* PERFIL */}
        <section className="bg-white rounded-xl shadow p-4 text-center">
          {data.foto && (
            <div className="flex justify-center mb-2">
              <Image
                src={data.foto}
                alt={data.nome}
                width={100}
                height={100}
                className="rounded-full object-cover"
              />
            </div>
          )}

          <h2 className="text-xl font-semibold">{data.nome}</h2>
          <p className="text-gray-500">{data.idade} anos</p>
          <p className="text-gray-500">
            {data.cidade} / {data.estado}
          </p>

          <div className="mt-3 inline-block bg-red-600 text-white px-4 py-1 rounded-full font-bold">
            {data.tipoSanguineo}
          </div>
        </section>

        {/* CONDIÇÕES MÉDICAS */}
        <section className="bg-white rounded-xl shadow p-4">
          <h3 className="font-semibold mb-2">Condições Médicas</h3>
          <p>
            <strong>Comorbidades:</strong> {data.comorbidades}
          </p>
          <p>
            <strong>Medicamentos:</strong> {data.medicamentos}
          </p>
        </section>

        {/* OBSERVAÇÕES */}
        <section className="bg-white rounded-xl shadow p-4 border-l-4 border-orange-500">
          <h3 className="font-semibold mb-2">Observações Importantes</h3>
          <p>{data.observacoes}</p>
        </section>

        {/* DOCUMENTOS */}
        {data.documentos.length > 0 && (
          <section className="bg-white rounded-xl shadow p-4">
            <h3 className="font-semibold mb-2">Documentos Anexados</h3>
            <ul className="space-y-1">
              {data.documentos.map((doc, index) => (
                <li key={index}>
                  📄{" "}
                  <a
                    href={doc.url}
                    target="_blank"
                    className="text-blue-600 underline"
                  >
                    {doc.nome}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* FOOTER */}
        <footer className="text-center text-xs text-gray-400 pt-2">
          <p>Código QR: {params.code}</p>
          <p>Informações fornecidas pelo paciente</p>
        </footer>

      </div>
    </main>
  );
}
