import Plano from "@/components/plano";
import { auth } from "@/auth";
const PlanosPage = async () => {
  const session = await auth();
  const planos = [
    { valor: 99.99, download: 100 },
    { valor: 149.99, download: 300 },
    { valor: 199.99, download: 500 },
  ];
  console.log(Number(session?.user?.plano?.replace("MB", "")));
  return (
    <main className="w-full min-h-[calc(100dvh-650px)]">
      <div className="w-full flex flex-wrap gap-6 items-center justify-center bg-muted p-6">
        {planos
          .sort((a, b) => a.download - b.download)
          .map((plano) => (
            <Plano
              key={plano.download}
              plano={{ ...plano, upload: plano.download / 2 }}
              current={
                Number(session?.user?.plano?.replace("MB", "")) ===
                plano.download
              }
            />
          ))}
      </div>
    </main>
  );
};
export default PlanosPage;
