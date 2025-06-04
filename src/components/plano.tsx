"use client";
import { DownloadCloud, Star, UploadCloud, Wifi } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
const Plano = ({
  plano,
  current,
}: {
  plano: { valor: number; download: number; upload: number };
  current?: boolean;
}) => {
  return (
    <div
      className={`w-60 bg-${
        current ? "primary" : "background"
      } rounded-2xl shadow-xl overflow-hidden`}
    >
      <div className="aspect-square p-4 relative flex flex-col justify-center gap-2 items-center">
        <h2
          className={`font-bold text-6xl text-${current ? "white" : "accent"}`}
        >
          {plano.download}MB
        </h2>
        <p
          className={`text-2xl font-semibold text-${
            current ? "white" : "accent"
          }`}
        >
          R$: {plano.valor.toString().split(".")[0]}
          <sup className="text-xs">
            <span>,{plano.valor.toFixed(2).toString().split(".")[1]}</span>
          </sup>
        </p>
        <Button
          asChild
          className="w-[calc(100%+32px)] absolute bottom-0 rounded-none"
        >
          {current ? (
            <p>Assinado</p>
          ) : (
            <Link href={`/agendamento?plano=${plano.download}`}>Contratar</Link>
          )}
        </Button>
      </div>
      <div
        className={`p-4 hidden md:flex bg-${
          current ? "accent" : "primary"
        } flex-col gap-4 items-center`}
      >
        <p className="text-white flex gap-2 font-semibold">
          <Wifi />
          Wi-fi 5G Incluso
        </p>
        <p className="text-white flex gap-2 font-semibold">
          <Star fill="white" />
          Suporte Premium
        </p>
        <p className="text-white flex gap-2 font-semibold">
          <DownloadCloud />
          {plano.download} Mega de Download
        </p>
        <p className="text-white flex gap-2 font-semibold">
          <UploadCloud />
          {plano.upload} Mega de Upload
        </p>
      </div>
    </div>
  );
};

export default Plano;
