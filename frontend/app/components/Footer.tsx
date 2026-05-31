import { Heart, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer id="contato" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#EEA71E" }}
              >
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl">SONIPA</h3>
                <p className="text-xs text-gray-400">Adoção & Cuidado</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Dedicados a resgatar, cuidar e encontrar lares amorosos para cães
              que precisam de uma segunda chance. Juntos, transformamos vidas.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:opacity-90 transition"
                style={{ backgroundColor: "#EEA71E" }}
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:opacity-90 transition"
                style={{ backgroundColor: "#23809B" }}
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#inicio"
                  className="text-gray-400 hover:text-[#EEA71E] transition"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#adocao"
                  className="text-gray-400 hover:text-[#EEA71E] transition"
                >
                  Adoção
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-gray-400 hover:text-[#EEA71E] transition"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-gray-400 hover:text-[#EEA71E] transition"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone
                  className="w-5 h-5 shrink-0 mt-0.5"
                  style={{ color: "#EEA71E" }}
                />
                <div>
                  <p className="text-gray-400">(21) 9822-2822</p>
                </div>
              </li>
              {/* <li className="flex items-start gap-2">
                <Mail
                  className="w-5 h-5 shrink-0 mt-0.5"
                  style={{ color: "#EEA71E" }}
                />
                <p className="text-gray-400">contato@sonipa.org.br</p>
              </li> */}
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 shrink-0 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#EEA71E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="0.5"
                    fill="#EEA71E"
                    stroke="none"
                  />
                </svg>
                <a
                  href="https://instagram.com/sonipaniteroi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  @sonipaniteroi
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2025 SONIPA - Todos os direitos reservados. Feito com{" "}
            <Heart
              className="w-4 h-4 inline fill-current"
              style={{ color: "#EEA71E" }}
            />{" "}
            para os animais.
          </p>
        </div>
      </div>
    </footer>
  );
}
