import Plano from "@/components/plano";

const PlanosPage = () => {
  return (
    <main className="w-full min-h-[calc(100dvh-650px)]">
      <div className="w-full flex flex-wrap gap-6 items-center justify-center bg-muted p-6">
        <Plano plano={{ valor: 99.9, download: 100, upload: 50 }} />
        <Plano plano={{ valor: 99.9, download: 300, upload: 150 }} />
        <Plano plano={{ valor: 99.9, download: 500, upload: 250 }} />
      </div>
    </main>
  );
};
export default PlanosPage;
