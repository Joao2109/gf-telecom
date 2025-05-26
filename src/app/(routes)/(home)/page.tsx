import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <main className="w-full min-h-[calc(100dvh-650px)]">
      <div className="w-full h-80 relative">
        <Image
          src="/images/bg.jpg"
          fill
          alt="Imagem de fundo"
          className="object-cover"
        />
        <Button asChild>
          <Link
            href="/planos"
            className="absolute text-white bottom-8 left-1/2 translate-x-[-50%] bg-transparent border-2 border-primary hover:bg-primary"
          >
            Conheça nossos planos
          </Link>
        </Button>
      </div>
      <div className="p-4 bg-foreground/10">
        <h2 className="text-2xl text-center font-bold">Suporte Técnico</h2>
        <div className="flex justify-center gap-6 pt-4">
          <Card
            className="w-64 h-64 bg-background"
            variant="link"
            to="/agendamento"
          >
            <h3 className="text-lg font-semibold text-center mb-16">
              Agendar Suporte
            </h3>
            <p className="text-center">De segunda a sábado</p>
            <p className="text-center">Das 8h às 18h</p>
          </Card>
          <Card
            className="w-64 h-64 bg-background"
            variant="link"
            to="/suporte"
          >
            <h3 className="text-lg font-semibold text-center mb-16">
              Suporte Remoto
            </h3>
            <p className="text-center">De segunda a sexta</p>
            <p className="text-center">Das 8h às 22h</p>
          </Card>
          <Card
            className="w-64 h-64 bg-background"
            variant="link"
            to="/suporte-emergencial"
          >
            <h3 className="text-lg font-semibold text-center mb-16">
              Suporte Emergencial
            </h3>
            <p className="text-center">Atendimento 24h</p>
            <p className="text-center">7 dias por semana</p>
          </Card>
        </div>
      </div>
    </main>
  );
};
export default HomePage;
