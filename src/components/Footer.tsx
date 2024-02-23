import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import minhaSky from "../assets/minha-sky.svg";
import buttonGooglePlayLightDefault from "../assets/button-google-play-light-default.svg";
import buttonAppleStoreLightDefault from "../assets/button-apple-store-light-default.svg";
import skyLightDefault from "../assets/sky-light-default.svg";
import { Accordion } from "./Accordion.js";

export function Footer() {
  return (
    <footer className="bg-[#f1f2fa] text-[#00000099]">
      <div className="border-b-2 border-[#D0CFD6]">
        <div className="flex items-center justify-between py-4 container">
          <img
            src={skyLightDefault}
            alt=""
            className="w-16 h-6 sm:w-[82px] sm:h-[30px]"
          />
          <div className="flex gap-5 justify-center">
            <FaFacebook className="text-[#606064] w-4 h-4 sm:w-6 sm:h-6" />
            <FaTwitter className="text-[#606064] w-4 h-4 sm:w-6 sm:h-6" />
            <FaYoutube className="text-[#606064] w-4 h-4 sm:w-6 sm:h-6" />
            <FaInstagram className="text-[#606064] w-4 h-4 sm:w-6 sm:h-6" />
          </div>
        </div>
      </div>
      <div className="py-10 container">
        <div className="grid-1 grid gap-8 md:grid-cols-2 ">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src={minhaSky} alt="" className="w-12 h-12" />
              <p className="text-[#db524ffc] sm:text-[#00000099] w-[280px] font-bold">
                Baixe no seu celular o app Minha SKY e divirta-se.
              </p>
            </div>
            <div className="hidden lg:flex items-center gap-4 pl-[60px]">
              <img
                src={buttonGooglePlayLightDefault}
                alt=""
                className="w-[160px] h-[52px]"
              />
              <img
                src={buttonAppleStoreLightDefault}
                alt=""
                className="w-[160px] h-[52px]"
              />
            </div>
          </div>

          <div className="hidden sm:grid grid-cols-2">
            <div>
              <h6 className="mb-4 font-semibold md:justify-start">Sobre</h6>
              <p className="mb-4">
                <a href="#!" className="text-[#00000099] text-sm font-medium">
                  Nossa história
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-[#00000099] text-sm font-medium">
                  Impresa
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-[#00000099] text-sm font-medium">
                  Prêmios conquistados
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-[#00000099] text-sm font-medium">
                  Credenciamento
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-[#00000099] text-sm font-medium">
                  Trabalhe com a gente
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-[#00000099] text-sm font-medium">
                  Promoção
                </a>
              </p>
            </div>
            <div>
              <h6 className="mb-4 font-semibold md:justify-start">
                Nossas responsabilidades
              </h6>
              <p className="mb-4">
                <a href="#!" className="text-[#00000099] text-sm font-medium">
                  Conselho aos usuários
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-[#00000099] text-sm font-medium">
                  Pesquisa Anatel
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-[#00000099] text-sm font-medium">
                  Relatórios de transparência
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-[#00000099] text-sm font-medium">
                  Responsabilidade Social
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-[#00000099] text-sm font-medium">
                  Acessibilidade
                </a>
              </p>
            </div>
            <div>
              <h6 className="mb-4 font-semibold md:justify-start">Ajuda</h6>
              <p className="mb-4">
                <a href="#!" className="text-[#00000099] text-sm font-medium">
                  Central de ajuda
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className="text-[#00000099] text-sm font-medium">
                  Manuais
                </a>
              </p>
            </div>
            <div>
              <h6 className="mb-4 font-semibold md:justify-start">
                SKY Empresas
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="block sm:hidden container">
        <Accordion title="Sobre">
          <div className="grid gap-2">
            <p>
              <a href="#!" className="text-[#00000099] text-sm font-medium">
                Nossa história
              </a>
            </p>
            <p>
              <a href="#!" className="text-[#00000099] text-sm font-medium">
                Impresa
              </a>
            </p>
            <p>
              <a href="#!" className="text-[#00000099] text-sm font-medium">
                Prêmios conquistados
              </a>
            </p>
            <p>
              <a href="#!" className="text-[#00000099] text-sm font-medium">
                Credenciamento
              </a>
            </p>
            <p>
              <a href="#!" className="text-[#00000099] text-sm font-medium">
                Trabalhe com a gente
              </a>
            </p>
            <p>
              <a href="#!" className="text-[#00000099] text-sm font-medium">
                Promoção
              </a>
            </p>
          </div>
        </Accordion>
        <Accordion title="Nossas responsabilidades">
          <div className="grid gap-2">
            <p>
              <a href="#!" className="text-[#00000099] text-sm font-medium">
                Conselho aos usuários
              </a>
            </p>
            <p>
              <a href="#!" className="text-[#00000099] text-sm font-medium">
                Pesquisa Anatel
              </a>
            </p>
            <p>
              <a href="#!" className="text-[#00000099] text-sm font-medium">
                Relatórios de transparência
              </a>
            </p>
            <p>
              <a href="#!" className="text-[#00000099] text-sm font-medium">
                Responsabilidade Social
              </a>
            </p>
            <p>
              <a href="#!" className="text-[#00000099] text-sm font-medium">
                Acessibilidade
              </a>
            </p>
          </div>
        </Accordion>
        <Accordion title="Ajuda">
          <div className="grid gap-2">
            <p>
              <a href="#!" className="text-[#00000099] text-sm font-medium">
                Central de ajuda
              </a>
            </p>
            <p>
              <a href="#!" className="text-[#00000099] text-sm font-medium">
                Manuais
              </a>
            </p>
          </div>
        </Accordion>

        <div className="border-y border-gray-300 rounded-lg">
          <div className="flex justify-between items-center py-4 cursor-pointer transition-colors duration-300 ease-in-out bg-gray-100 hover:bg-gray-200">
            <a href="#" className="font-semibold">
              SKY Empresas
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[##f1f2fa] py-4 text-sm text-[#00000099]">
        <p className="container">
          <a href="#" className="cursor-pointer hover:underline">
            Início
          </a>
          {" | "}

          <a href="#" className="cursor-pointer hover:underline">
            Política de Privacidade
          </a>
          {" | "}

          <a href="#" className="cursor-pointer hover:underline">
            Contratos gerais
          </a>
          {" | "}

          <a href="#" className="cursor-pointer hover:underline">
            Contratos Pré-pago
          </a>
          {" | "}

          <a href="#" className="cursor-pointer hover:underline">
            Cancelamento
          </a>
          {" | "}

          <a href="#" className="cursor-pointer hover:underline">
            Ouvidoria
          </a>
          {" | "}

          <a href="#" className="cursor-pointer hover:underline">
            Consumidor.gov
          </a>
        </p>
      </div>
      <div className="bg-[#fafaff] py-4 text-sm text-[#00000099]">
        <p className="container text-center sm:text-left">
          ® Todos os direitos reservados 2018. Todas as marcas SKY e qualquer
          propriedade intelectual inserida nelas são de propriedade da SKY
          Internacional AG e usadas pela SKY Serviços de Banda Larga LTDA.
          mediante licença.
        </p>
      </div>
    </footer>
  );
}
