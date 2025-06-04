import Link from "next/link";

interface Sala {
  nome: string;
  id: number;
  clienteId: string;
  funcionarioId: string;
}
const Salas = ({ salas }: { salas: Sala[] }) => {
  return (
    <>
      {salas.length > 0 ? (
        <div>
          <h2 className="text-center text-white text-xl font-semibold bg-accent p-2">
            Salas de suporte abertas
          </h2>
          {salas.map((sala) => (
            <Link
              href={`/suporte/${sala.id}`}
              className="block text-center odd:bg-zinc-500/10 even:bg-zinc-500/20"
              key={sala.id}
            >
              {sala.nome}
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center">Você não possui salas de suporte abertas</p>
      )}
    </>
  );
};

export default Salas;
