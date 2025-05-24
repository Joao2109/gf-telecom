import { Mail, Phone } from "lucide-react";
import { SocialIcon } from "react-social-icons";
const Footer = () => {
  return (
    <footer className="bg-accent">
      <div className="p-16">
        <div className="mb-8 flex flex-col gap-2">
          <h3 className="text-white font-bold mb-2">Contato</h3>
          <div className="flex gap-2 items-center">
            <Phone size={16} className="stroke-primary" />
            <p className="text-white">(71) 98452-6376</p>
          </div>
          <div className="flex gap-2 items-center">
            <Mail size={16} className="stroke-primary" />
            <p className="text-white">empresa@gmail.com</p>
          </div>
        </div>
        <div className="mb-8 flex flex-col gap-2">
          <h3 className="text-white font-bold mb-2">Horário de Atendimento</h3>
          <p className="text-white">Seg-Sex: 8h-18h</p>
          <p className="text-white">Sáb: 9h-13h</p>
          <p className="text-white">Plantão 24h para emergências</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-white font-bold mb-2">Redes Sociais</h3>
          <div className="flex gap-4">
            <SocialIcon url="https://www.facebook.com/" target="_blank" />
            <SocialIcon url="https://www.instagram.com/" target="_blank" />
            <SocialIcon url="https://www.whatsapp.com/" target="_blank" />
          </div>
        </div>
      </div>
      <div className="text-white text-center bg-black/30 p-6">
        <p>
          &copy; 2023 Suporte Online Internet. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
